const fs = require('fs');
const path = require('path');

/**
 * Script to parse Google Search Console CSV export and generate redirect objects for next.config.js
 * 
 * Usage: node scripts/generate-redirects.js
 * 
 * Expected CSV format from Google Search Console:
 * - Contains URLs with domains that need to be cleaned to extract paths
 * - Includes Soft 404 and other error types that need redirects
 */

function parseCsvLine(line) {
  // Simple CSV parser - handles quoted fields with commas
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

function cleanUrl(url) {
  // Remove domain and extract only the path
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch (error) {
    // If URL parsing fails, try to extract path manually
    const match = url.match(/https?:\/\/[^\/]+(.*)/);
    return match ? match[1] : url;
  }
}

function generateRedirects() {
  const csvPath = path.join(process.cwd(), 'Tabela.csv');
  
  if (!fs.existsSync(csvPath)) {
    console.error('❌ Tabela.csv not found in project root');
    console.log('Please export the data from Google Search Console and place Tabela.csv in the project root');
    process.exit(1);
  }
  
  console.log('📖 Reading Tabela.csv...');
  const csvContent = fs.readFileSync(csvPath, 'utf8');
  const lines = csvContent.split('\n').filter(line => line.trim());
  
  if (lines.length < 2) {
    console.error('❌ CSV file appears to be empty or invalid');
    process.exit(1);
  }
  
  // Skip header row
  const headerLine = lines[0];
  const headers = parseCsvLine(headerLine);
  console.log('📋 CSV Headers:', headers);
  
  const redirects = [];
  const highPriorityUrls = ['/rekuperacja-lodz/', '/fotowoltaika-lodz/'];
  
  // Process data rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    const values = parseCsvLine(line);
    const row = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    // Find the URL column (common names in GSC exports)
    const urlColumn = headers.find(h => 
      h.toLowerCase().includes('url') || 
      h.toLowerCase().includes('page') ||
      h.toLowerCase().includes('strona')
    );
    
    if (!urlColumn || !row[urlColumn]) {
      console.warn(`⚠️  Row ${i + 1}: No URL found, skipping`);
      continue;
    }
    
    const originalUrl = row[urlColumn];
    const cleanPath = cleanUrl(originalUrl);
    
    if (!cleanPath || cleanPath === '/') {
      console.warn(`⚠️  Row ${i + 1}: Invalid path "${originalUrl}", skipping`);
      continue;
    }
    
    // Determine if this should be a permanent redirect (301)
    const isHighPriority = highPriorityUrls.some(priorityUrl => cleanPath.includes(priorityUrl.replace('/', '')));
    const isSoft404 = headers.some(h => h.toLowerCase().includes('error')) && 
                     row[headers.find(h => h.toLowerCase().includes('error'))]?.includes('Soft 404');
    
    const permanent = isHighPriority || isSoft404;
    
    // Create redirect object with temporary placeholder for manual review
    const redirect = {
      source: cleanPath,
      destination: `/new-path/${cleanPath.replace(/\//g, '')}`.replace(/-+/g, '-').replace(/^-|-$/g, '') || '/new-path',
      permanent: permanent
    };
    
    redirects.push(redirect);
    
    console.log(`✅ Added redirect: ${cleanPath} -> ${redirect.destination} (${permanent ? '301' : '302'})`);
  }
  
  // Generate output
  const output = {
    summary: {
      totalRedirects: redirects.length,
      permanent301: redirects.filter(r => r.permanent).length,
      temporary302: redirects.filter(r => !r.permanent).length,
      highPriorityUrls: redirects.filter(r => r.permanent && highPriorityUrls.some(url => r.source.includes(url.replace('/', '')))).length
    },
    redirects: redirects
  };
  
  // Save to JSON file
  const outputPath = path.join(process.cwd(), 'redirects-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  
  console.log('\n🎉 Redirect generation complete!');
  console.log(`📊 Summary: ${output.summary.totalRedirects} total redirects`);
  console.log(`   - ${output.summary.permanent301} permanent (301) redirects`);
  console.log(`   - ${output.summary.temporary302} temporary (302) redirects`);
  console.log(`   - ${output.summary.highPriorityUrls} high-priority URLs`);
  console.log(`💾 Output saved to: redirects-output.json`);
  console.log('\n📝 Next steps:');
  console.log('1. Review the redirects-output.json file');
  console.log('2. Update destination paths manually');
  console.log('3. Run Windsurf command to integrate into next.config.js');
}

// Run the script
if (require.main === module) {
  generateRedirects();
}

module.exports = { generateRedirects };

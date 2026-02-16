'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function IconsPage() {
  const router = useRouter();

  // This will run on the client side
  useEffect(() => {
    // Redirect to the actual HTML file
    window.location.href = '/assets/font/flaticon_slaze.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Icons Library</title>
      </Head>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Icons Library...</h1>
        <p>You will be redirected to the icons page shortly.</p>
        <p className="mt-4">
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go to Home
          </button>
        </p>
      </div>
    </div>
  );
}

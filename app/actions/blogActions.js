'use server';

import { blogService } from '../../services/blogService.js';

export async function getBlogs() {
  return blogService.getBlogs();
}

export async function getRecentBlogs(limit = 3) {
  return blogService.getRecentBlogs(limit);
}

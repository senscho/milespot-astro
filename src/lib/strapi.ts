import type { Post, StrapiResponse } from './types';

const STRAPI_API_URL = import.meta.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

const headers = {
  'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
  'Content-Type': 'application/json',
};

async function fetchFromAPI<T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(`${STRAPI_API_URL}${url}`, { headers });
    if (!response.ok) {
      console.error('API request failed:', response.status, response.statusText);
      return [];
    }
    const data: StrapiResponse<T[]> = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('API request error:', error);
    return [];
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return fetchFromAPI<Post>('/posts?filters[featured][$eq]=true&sort[0]=publishedAt:desc&pagination[limit]=3&populate=*');
}

export async function getLatestPosts(): Promise<Post[]> {
  return fetchFromAPI<Post>('/posts?sort[0]=publishedAt:desc&pagination[limit]=2&populate=*');
} 
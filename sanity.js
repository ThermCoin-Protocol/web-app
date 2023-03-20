import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-09-18',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);
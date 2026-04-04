import React from 'react';
import { ParticlesEffect } from '@/components/ui';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { LinkPreview } from '@/components/ui/link-preview';
import { Resource } from '@/types/resource';
import axios from 'axios';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const BASE_URL = process.env.BASE_URL;

export default async function Page() {
  const response = await axios.get(`${BASE_URL}/api/resource`);
  const resources: Resource[] = response.data;

  return (
    <>
      <section className='grow max-w-5xl pt-4'>
        <ParticlesEffect />
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Recommended{' '}
          <span className='text-pink-500 font-semibold'>Resources</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          In this section, you’ll find a selection of insightful content that
          reflects my interests and expertise.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Each video and article has been chosen for its ability to inspire,
          educate, and provoke thought, providing valuable perspectives on
          topics I’m passionate about.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Whether you’re looking to expand your knowledge or simply explore new
          ideas, I hope you find these resources as enriching as I have.
        </p>
      </section>

      <h3 className='text-xl md:text-2xl font-bold mt-8 mb-4'>
        Videos & Articles
      </h3>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col mb-6 bg-background z-30'>
        {resources
          .filter((r) => r.category === 'content' || !r.category)
          .map(({ title, description, url }) => {
            return (
              <li key={title}>
                <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-pink-500'>
                  <LinkPreview
                    url={url}
                    className='font-bold bg-clip-text underline'
                  >
                    {title}
                  </LinkPreview>{' '}
                  <ExternalLinkIcon className='text-muted-foreground' />
                </h3>
                <p className='text-sm text-muted-foreground'>{description}</p>
              </li>
            );
          })}
      </ul>

      <h3 className='text-xl md:text-2xl font-bold mt-8 mb-4'>People</h3>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col mb-6 bg-background z-30'>
        {resources
          .filter((r) => r.category === 'person')
          .map(({ title, description, url }) => {
            return (
              <li key={title}>
                <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-pink-500'>
                  <LinkPreview
                    url={url}
                    className='font-bold bg-clip-text underline'
                  >
                    {title}
                  </LinkPreview>{' '}
                  <ExternalLinkIcon className='text-muted-foreground' />
                </h3>
                <p className='text-sm text-muted-foreground'>{description}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

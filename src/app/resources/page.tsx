import React from 'react';
import { ParticlesEffect } from '@/components/ui';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { LinkPreview } from '@/components/ui/link-preview';
import { Resource } from '@/types/resource';
import { Blogger } from '@/types/blogger';
import axios from 'axios';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const BASE_URL = process.env.BASE_URL;

export default async function Page() {
  const [resourcesResponse, bloggersResponse] = await Promise.all([
    axios.get(`${BASE_URL}/api/resource`),
    axios.get(`${BASE_URL}/api/blogger`),
  ]);
  const resources: Resource[] = resourcesResponse.data;
  const bloggers: Blogger[] = bloggersResponse.data;

  return (
    <>
      <section className='grow max-w-5xl pt-4'>
        <ParticlesEffect />
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Recommended{' '}
          <span className='text-sky-500 font-semibold'>Resources</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          In this section, you'll find a selection of insightful content that
          reflects my interests and expertise.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Each video and article has been chosen for its ability to inspire,
          educate, and provoke thought, providing valuable perspectives on
          topics I'm passionate about.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Whether you're looking to expand your knowledge or simply explore new
          ideas, I hope you find these resources as enriching as I have.
        </p>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col my-6 bg-background z-30'>
        {resources.map(({ title, description, url }) => {
          return (
            <li key={title}>
              <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-sky-500'>
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
      <section className='grow max-w-5xl pt-4'>
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Bloggers I <span className='text-sky-500 font-semibold'>Read</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          A curated list of writers and thinkers whose blogs I follow regularly.
          Their work has shaped how I think about software, engineering, and
          technology.
        </p>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col my-6 bg-background z-30'>
        {bloggers.map(({ authorName, url, description }) => {
          return (
            <li key={url}>
              <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-sky-500'>
                <LinkPreview
                  url={url}
                  className='font-bold bg-clip-text underline'
                >
                  {authorName}
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

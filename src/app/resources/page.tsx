import React from 'react';
import { ParticlesEffect } from '@/components/ui';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { LinkPreview } from '@/components/ui/link-preview';
import { Resource } from '@/types/resource';
import { Blogger } from '@/types/blogger';
import { Person } from '@/types/person';
import axios from 'axios';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const BASE_URL = process.env.BASE_URL;

export default async function Page() {
  const [resourcesResponse, bloggersResponse, peopleResponse] =
    await Promise.all([
      axios.get(`${BASE_URL}/api/resource`),
      axios.get(`${BASE_URL}/api/blogger`),
      axios.get(`${BASE_URL}/api/person`),
    ]);
  const content: Resource[] = resourcesResponse.data;
  const bloggers: Blogger[] = bloggersResponse.data;
  const people: Person[] = peopleResponse.data;

  return (
    <>
      <section className='grow max-w-5xl pt-4'>
        <ParticlesEffect />
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          My <span className='text-sky-500 font-semibold'>Recommendations</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          A collection of content, writers, and people that have shaped how I
          think about software and technology.
        </p>
        <nav className='flex gap-4 mt-4 text-lg font-medium'>
          <a href='#resources' className='text-sky-500 hover:underline'>
            Resources
          </a>
          <a href='#bloggers' className='text-sky-500 hover:underline'>
            Bloggers
          </a>
          <a href='#people' className='text-sky-500 hover:underline'>
            People
          </a>
        </nav>
      </section>

      <section id='resources' className='grow max-w-5xl pt-4 scroll-mt-24'>
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Resources
        </h2>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col mb-4 bg-background z-30'>
        {content.map(({ title, description, url }) => (
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
            <p className='text-base text-muted-foreground'>{description}</p>
          </li>
        ))}
      </ul>

      <section id='bloggers' className='grow max-w-5xl pt-4 scroll-mt-24'>
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Bloggers I <span className='text-sky-500 font-semibold'>Read</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          A curated list of writers and thinkers whose blogs I follow regularly.
          Their work has shaped how I think about software, engineering, and
          technology.
        </p>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col mb-4 bg-background z-30'>
        {bloggers.map(({ authorName, url, description }) => (
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
            <p className='text-base text-muted-foreground'>{description}</p>
          </li>
        ))}
      </ul>

      <section id='people' className='grow max-w-5xl pt-4 scroll-mt-24'>
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          People
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          Practitioners and thinkers worth following.
        </p>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col mb-4 bg-background z-30'>
        {people.map(({ name, description, url }) => (
          <li key={name}>
            <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-sky-500'>
              <LinkPreview
                url={url}
                className='font-bold bg-clip-text underline'
              >
                {name}
              </LinkPreview>{' '}
              <ExternalLinkIcon className='text-muted-foreground' />
            </h3>
            <p className='text-base text-muted-foreground'>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

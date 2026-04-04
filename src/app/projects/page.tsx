import React from 'react';
import { GlowingStarsBackgroundCard } from '../../components/ui/animated-card';
import Logos, { LogoContainer } from '@/components/ui/logos';
import { TechKey } from '@/types/tech-keys';
import { Project } from '@/types/project';
import axios from 'axios';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { buttonVariants, ParticlesEffect } from '@/components/ui';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const BASE_URL = process.env.BASE_URL;

export default async function Page() {
  const response = await axios.get(`${BASE_URL}/api/project`);
  const projects: Project[] = response.data;

  return (
    <>
      <section className='grow max-w-5xl pt-4'>
        <ParticlesEffect />
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Projects
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          In this section, you will find a collection of projects I have worked
          on, each representing a unique challenge that helped me{' '}
          <span className='text-pink-500 font-semibold'>
            sharpen my skills and expand my abilities.
          </span>
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          For each project, there’s a link to a live demo and another to the
          code repository.
        </p>
      </section>
      <section className='flex justify-center md:justify-normal gap-4 w-full flex-wrap my-4'>
        {projects.map(
          ({ name, description, demo, repository, stack, active }) => {
            if (!active) return null;
            return (
              <GlowingStarsBackgroundCard
                className='w-full min-w-72 min-h-[345px] sm:w-1/2 sm:min-w-96 pb-0'
                key={name}
              >
                <h3 className='font-bold text-lg text-pink-500 py-1'>{name}</h3>
                <h4>{description}</h4>
                <section className='flex flex-row flex-shrink-0 items-center gap-2 mt-2'>
                  {stack.map((tech: TechKey) => {
                    const Logo = Logos[tech];
                    return (
                      <LogoContainer className='h-10 w-10 circle-1' key={tech}>
                        <Logo className='h-7 w-7 ' />
                      </LogoContainer>
                    );
                  })}
                </section>
                <p className='flex flex-wrap gap-2 mt-4 w-full'>
                  <Link
                    href={repository}
                    target='_blank'
                    className={`inline-flex items-center gap-2 bg-background w-40 ${buttonVariants(
                      { variant: 'outline' }
                    )}`}
                  >
                    <GitHubLogoIcon className='inline w-4 h-4' />
                    Repository
                  </Link>
                  {demo && (
                    <Link
                      href={demo}
                      target='_blank'
                      className={`inline-flex items-center gap-2 bg-background w-40 ${buttonVariants(
                        { variant: 'outline' }
                      )}`}
                    >
                      <GlobeIcon className='inline w-4 h-4' />
                      Deployment
                    </Link>
                  )}
                </p>
              </GlowingStarsBackgroundCard>
            );
          }
        )}
      </section>
    </>
  );
}

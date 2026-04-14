import React from 'react';
import { ParticlesEffect } from '@/components/features/shared/particles';
import { ProjectCard } from '@/components/features/projects/project-card';
import { getProjects } from '@/lib/queries/projects';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page() {
  const projects = await getProjects();

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
          <span className='text-sky-500 font-semibold'>
            sharpen my skills and expand my abilities.
          </span>
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          For each project, there&apos;s a link to a live demo and another to
          the code repository.
        </p>
      </section>
      <section className='flex justify-center md:justify-normal gap-4 w-full flex-wrap my-4'>
        {projects
          .filter((p) => p.active)
          .map(({ name, description, demo, repository, stack }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              demo={demo}
              repository={repository}
              stack={stack}
            />
          ))}
      </section>
    </>
  );
}

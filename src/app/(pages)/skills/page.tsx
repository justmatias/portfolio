import React from 'react';
import { ParticlesEffect } from '@/components/features/shared/particles';
import { SkillSection } from '@/components/features/skills/skills-section';
import { getSkillsByCategory } from '@/lib/queries/skills';


export default async function Page() {
  const { frontend, backend, devops } = await getSkillsByCategory();

  return (
    <section className='grow max-w-5xl pt-4'>
      <ParticlesEffect />
      <section className='mb-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          My <span className='text-sky-500'>Tech Stack</span>
        </h2>
        <p className='text-lg mb-4'>
          Here, I want to share the skills I have developed in my journey as a
          software developer.
        </p>
        <p className='text-lg'>
          With a strong commitment to learning and growth, I am
          <span className='text-sky-500 font-semibold mx-1'>
            constantly building on my expertise
          </span>
          to stay current in the fast-evolving world of technology.
        </p>
      </section>

      <SkillSection title='Backend' skills={backend} />
      <SkillSection title='DevOps' skills={devops} />
      <SkillSection title='Frontend' skills={frontend} />
    </section>
  );
}

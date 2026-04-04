import React from 'react';
import axios from 'axios';
import { Categories } from '@/types/skill';
import { ParticlesEffect, SkillSection } from '@/components/ui';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const BASE_URL = process.env.BASE_URL;

export default async function Component() {
  const response = await axios.get(`${BASE_URL}/api/skills`);
  const { frontend, backend, devops }: Categories = response.data;

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

      <SkillSection title='Frontend' skills={frontend} />
      <SkillSection title='Backend' skills={backend} />
      <SkillSection title='DevOps' skills={devops} />
    </section>
  );
}

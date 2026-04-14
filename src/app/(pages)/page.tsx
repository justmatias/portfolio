import Image from 'next/image';
import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '@/components/ui/button';
import { WorkExperienceList } from '@/components/features/home/work-experience-list';
import { ParticlesEffect } from '@/components/features/shared/particles';
import { avatar } from '@/assets/images';
import { getExperience } from '@/lib/queries/experience';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const experiences = await getExperience();

  return (
    <>
      <ParticlesEffect />
      <section className='z-30 lg:w-3/4 flex flex-col items-start md:flex-row md:items-center m-auto mt-0 gap-2 md:gap-8 md:mt-8'>
        <Image
          priority={true}
          src={avatar}
          width={150}
          height={200}
          className='rounded-md p-4 w-auto h-auto z-30 mb-4 drop-shadow-md'
          alt='Avatar'
        />
        <section className='grow max-w-lg z-30 bg-background'>
          <h2 className='text-3xl lg:text-5xl font-bold drop-shadow-lg py-1 px-2 md:pr-3'>
            Hi, I&apos;m <span className='text-sky-500'>Matias</span>
          </h2>
          <h3 className='text-2xl font-semibold px-2 py-1 md:pr-3 text-sky-500'>
            Programmer Analyst
          </h3>
          <h4 className='text-xl px-2 py-1 md:pr-3'>
            <span className='text-sky-500 font-semibold'>
              Backend developer
            </span>{' '}
            skilled in Python and Node.js
          </h4>
          <p className='text-lg md:text-xl pt-6 pb-2 px-2 md:pr-3'>
            This is my personal site made using Next.js, Typescript, and
            TailwindCSS.
          </p>
          <p className='text-md md:text-xl px-2 pb-4 md:pr-3'>
            You can check out the source code on my
            <Link
              href='https://github.com/justmatias'
              target='_blank'
              className='font-semibold ml-1 hover:underline bg-background'
            >
              Github
            </Link>
          </p>
          <p className='flex gap-2 px-2 md:pr-3'>
            <Link
              href='https://www.linkedin.com/in/matiagimenez/'
              target='_blank'
              className={`inline-flex items-center gap-2 w-32 bg-background ${buttonVariants(
                { variant: 'outline' }
              )}`}
            >
              <LinkedInLogoIcon className='inline text-blue-500' />
              LinkedIn
            </Link>
            <Link
              href='https://github.com/justmatias'
              target='_blank'
              className={`inline-flex items-center justify-center gap-2 w-32 ${buttonVariants(
                { variant: 'outline' }
              )}`}
            >
              <GitHubLogoIcon className='inline' /> Github
            </Link>
          </p>
        </section>
      </section>
      <WorkExperienceList experiences={experiences} />
    </>
  );
}

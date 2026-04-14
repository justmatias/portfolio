import { GlowingStarsBackgroundCard } from '@/components/features/shared/animated-card';
import Logos, { LogoContainer } from '@/components/features/shared/logos';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import type { TechKey } from '@/components/features/shared/logos';

interface ProjectCardProps {
  name: string;
  description: string;
  demo?: string | null;
  repository: string;
  stack: TechKey[];
}

export function ProjectCard({
  name,
  description,
  demo,
  repository,
  stack,
}: ProjectCardProps) {
  return (
    <GlowingStarsBackgroundCard className='w-4/5 min-w-72 min-h-[350px] sm:w-1/3 sm:min-w-96 pb-0'>
      <h3 className='font-bold text-lg text-sky-500 py-1'>{name}</h3>
      <h4 className='min-h-20 mb-4'>{description}</h4>
      <section className='flex flex-row flex-shrink-0 items-center gap-2'>
        {stack.map((tech: TechKey) => {
          const Logo = Logos[tech];
          return (
            <LogoContainer className='h-10 w-10 circle-1' key={tech}>
              <Logo className='h-7 w-7' />
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


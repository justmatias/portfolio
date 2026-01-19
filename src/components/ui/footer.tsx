import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Card,
  CardContent,
} from '@/components/ui';

const quotes = [
  {
    quote: 'In the face of ambiguity, refuse the temptation to guess.',
    author: 'Tim Peters',
  },
  {
    quote: "If the implementation is hard to explain, it's a bad idea.",
    author: 'Tim Peters',
  },
  {
    quote: 'Clean code always looks like it was written by someone who cares.',
    author: 'Robert C. Martin',
  },
  {
    quote: 'Code is read much more often than it is written.',
    author: 'Guido Van Rossum',
  },
  {
    quote:
      'Static typing is to reliable programming what a spelling checker is to a good writer.',
    author: 'Peter Van Roy',
  },
];

export const Footer = () => {
  return (
    <footer className='w-full mt-8 px-2 bg-background'>
      <section className='text-lg w-full max-w-5xl bg-background'>
        <p className='py-1 bg-background'>
          I am currently doing a{' '}
          <span className='font-semibold text-pink-500'>
            bachelor&apos;s degree in information systems
          </span>{' '}
          in Argentina while working in the IT field.
        </p>
        <p className='py-1 bg-background'>
          My current job is helping me grow both{' '}
          <span className='font-semibold text-pink-500'>
            professionally and personally
          </span>
          . This role has allowed me to build on the skills and knowledge I
          gained from my previous experience, deepening my understanding of
          various technologies and practices.
        </p>
        <p className='py-1 bg-background'>
          I am actively{' '}
          <span className='font-semibold text-pink-500'>
            contributing to real-world projects
          </span>
          , continuously improving my technical abilities, problem-solving
          skills, and{' '}
          <span className='font-semibold text-pink-500'>
            collaborating with diverse teams{' '}
          </span>
          to achieve project goals.
        </p>
      </section>
      <Carousel className='m-auto my-12 w-9/12 md:w-full max-w-xl bg-background'>
        <CarouselContent className='w-full m-auto'>
          {quotes.map(({ quote, author }) => (
            <CarouselItem className='w-full pl-0' key={quote}>
              <Card className='w-full h-28 flex items-center justify-center bg-transparent'>
                <CardContent className='flex items-center aspect-square justify-center p-4'>
                  <blockquote className='text-sm font-medium text-pink-500 text-center'>
                    <p className='py-1 italic font-medium'>{quote}</p>
                    <p className='py-1 font-sm font-light text-foreground'>
                      {author}
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-left-10 md:-left-12' />
        <CarouselNext className='-right-10 md:-right-12' />
      </Carousel>
      <section className='border-t min-h-16 mt-8 flex gap-4 items-center justify-center'>
        <Link href='https://github.com/justmatias' target='_blank'>
          <GitHubLogoIcon className='w-6 h-6' />
        </Link>
        <Link href='https://www.linkedin.com/in/matiagimenez/' target='_blank'>
          <LinkedInLogoIcon className='w-6 h-6 text-blue-500' />
        </Link>
      </section>
    </footer>
  );
};

import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

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
          I&apos;m currently pursuing a{' '}
          <span className='font-semibold text-sky-500'>
            Bachelor&apos;s degree in Artificial Intelligence
          </span>{' '}
          in Argentina, while building my career in software development.
        </p>
        <p className='py-1 bg-background'>
          My current role has been a catalyst for both{' '}
          <span className='font-semibold text-sky-500'>
            professional and personal growth
          </span>
          {' '}&mdash; allowing me to deepen my understanding of modern
          technologies and engineering practices, building on a solid
          foundation from previous experience.
        </p>
        <p className='py-1 bg-background'>
          I thrive on{' '}
          <span className='font-semibold text-sky-500'>
            contributing to real-world projects
          </span>
          , sharpening my problem-solving and technical skills while{' '}
          <span className='font-semibold text-sky-500'>
            collaborating with cross-functional teams{' '}
          </span>
          to deliver meaningful results.
        </p>
      </section>
      <Carousel className='m-auto my-12 w-9/12 md:w-full max-w-xl bg-background'>
        <CarouselContent className='w-full m-auto'>
          {quotes.map(({ quote, author }) => (
            <CarouselItem className='w-full pl-0' key={quote}>
              <Card className='w-full h-28 flex items-center justify-center bg-transparent'>
                <CardContent className='flex items-center aspect-square justify-center p-4'>
                  <blockquote className='text-sm font-medium text-sky-500 text-center'>
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

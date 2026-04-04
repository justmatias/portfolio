import React from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
} from '@/components/ui';
import { WorkExperience } from '@/types/work-experience';
import { BackpackIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL;

export const WorkExperienceList = async () => {
  const response = await axios.get(`${BASE_URL}/api/experience`);
  const experiences: WorkExperience[] = response.data;

  return (
    <section className='mt-10 px-2 max-w-6xl mb-6 bg-background w-full z-30'>
      <h2 className='flex items-center gap-2 text-2xl font-bold text-pink-500'>
        Work experience
      </h2>
      <ul className='mt-4 flex flex-col gap-5 z-30 bg-background'>
        {experiences.map(
          ({ title, company, since, to, description, labels, url }) => {
            return (
              <li key={title} className='z-30'>
                <Card className='min-h-52 bg-background z-30'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg md:text-xl'>
                      <BackpackIcon width={20} height={20} /> {title}
                    </CardTitle>
                    <CardDescription>
                      <Link
                        href={url}
                        className='text-foreground mt-1 block hover:underline'
                      >
                        {company}
                      </Link>
                      <span className='block'>
                        {since} - {to}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{description}</p>
                  </CardContent>
                  <CardFooter className='pb-6 flex-wrap gap-1'>
                    {labels.map((text) => (
                      <Badge
                        className='mr-1 font-medium bg-pink-500 text-white hover:bg-pink-500'
                        key={text}
                      >
                        {text}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions as Options,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export const ParticlesEffect = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    if (container) return;
    return;
  };

  const options: Options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        zIndex: { value: 0 },
        color: {
          value: `${theme === 'dark' ? '#fff' : '#3b82f6'}`,
        },
        links: {
          color: `${theme === 'dark' ? '#fff' : '#3b82f6'}`,
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'lines',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!init) return <></>;

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

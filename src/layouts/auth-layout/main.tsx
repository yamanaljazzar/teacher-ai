'use client';

import Image from 'next/image';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const floatingIcons = [
  {
    src: '/assets/images/Star.png',
    alt: 'Star',
    className: 'top-[12%] left-[8%]',
    size: 90,
    delay: 0.2,
    y: [0, -12, 0],
    rotate: [-5, 5, -5],
    duration: 5,
  },
  {
    src: '/assets/images/Rocket.png',
    alt: 'Rocket',
    className: 'bottom-[50%] left-[15%]',
    size: 90,
    delay: 0.5,
    y: [0, -16, 0],
    rotate: [0, -8, 0],
    duration: 5.5,
  },
  {
    src: '/assets/images/Heart.png',
    alt: 'Heart',
    className: 'top-[18%] right-[6%]',
    size: 90,
    delay: 0.4,
    y: [0, -10, 0],
    rotate: [0, 6, 0],
    duration: 4.5,
  },
  {
    src: '/assets/images/Book.png',
    alt: 'Book',
    className: 'top-[55%] right-[15%]',
    size: 90,
    delay: 0.6,
    y: [0, -14, 0],
    rotate: [-3, 3, -3],
    duration: 6,
  },
];

// ----------------------------------------------------------------------

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-2">
      {/* Top-right ellipse */}
      <m.div
        className="pointer-events-none absolute top-0 right-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <m.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/assets/images/ellipse-top-right.png"
            alt=""
            width={500}
            height={500}
            className="h-auto w-[300px] sm:w-[400px] md:w-[500px]"
            priority
          />
        </m.div>
      </m.div>

      {/* Bottom-left ellipse */}
      <m.div
        className="pointer-events-none absolute bottom-0 left-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      >
        <m.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        >
          <Image
            src="/assets/images/ellipse-bottom-left.png"
            alt=""
            width={500}
            height={500}
            className="h-auto w-[300px] sm:w-[400px] md:w-[500px]"
            priority
          />
        </m.div>
      </m.div>

      {/* Floating icons */}
      {floatingIcons.map((icon) => (
        <m.div
          key={icon.alt}
          className={`pointer-events-none absolute -z-10 hidden md:block ${icon.className}`}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: icon.delay,
          }}
        >
          <m.div
            animate={{ y: icon.y, rotate: icon.rotate }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image src={icon.src} alt={icon.alt} width={icon.size} height={icon.size} />
          </m.div>
        </m.div>
      ))}

      {/* Content */}
      {children}
    </div>
  );
}

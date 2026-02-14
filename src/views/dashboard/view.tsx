'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { Moon, Palette, BookOpen, Languages, Calculator, FlaskConical } from 'lucide-react';

import { Logo } from 'src/components/logo';

import { SubjectCard } from './components/subject-card';

// ----------------------------------------------------------------------

const FLOATING_ICONS = [
  {
    src: '/assets/images/Heart.png',
    alt: 'Heart',
    className: 'top-[8%] start-[20%] sm:start-[20%]',
    size: 70,
    smSize: 75,
    delay: 0.4,
    y: [0, -5, 0],
    rotate: [0, 6, 0],
    duration: 4.5,
  },
  {
    src: '/assets/images/Vector.png',
    alt: 'Pen',
    className: 'top-[40%] start-[2%] sm:start-[5%]',
    size: 70,
    smSize: 65,
    delay: 0.5,
    y: [0, -12, 0],
    rotate: [-3, 3, -3],
    duration: 6,
  },
  {
    src: '/assets/images/Book.png',
    alt: 'Book',
    className: 'top-[70%] start-[2%] sm:start-[5%]',
    size: 70,
    smSize: 65,
    delay: 0.5,
    y: [0, -12, 0],
    rotate: [-3, 3, -3],
    duration: 6,
  },
  {
    src: '/assets/images/Star.png',
    alt: 'Star',
    className: 'top-[10%] end-[20%] sm:end-[20%]',
    size: 70,
    smSize: 80,
    delay: 0.2,
    y: [0, -14, 0],
    rotate: [-5, 5, -5],
    duration: 5,
  },
  {
    src: '/assets/images/Rocket.png',
    alt: 'Rocket',
    className: 'top-[40%] end-[3%] sm:end-[6%]',
    size: 70,
    smSize: 75,
    delay: 0.6,
    y: [0, -16, 0],
    rotate: [0, -8, 0],
    duration: 5.5,
  },
  {
    src: '/assets/images/GraduationCap.png',
    alt: 'GraduationCap',
    className: 'top-[80%] end-[2%] sm:end-[5%]',
    size: 70,
    smSize: 65,
    delay: 0.5,
    y: [0, -12, 0],
    rotate: [-3, 3, -3],
    duration: 6,
  },
];

const SUBJECTS = [
  {
    label: 'لفتي',
    icon: BookOpen,
    iconClassName: 'bg-red-50 text-red-500 dark:bg-red-900/30 dark:text-red-400',
  },
  {
    label: 'الرياضيات',
    icon: Calculator,
    iconClassName: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    label: 'العلوم',
    icon: FlaskConical,
    iconClassName: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  {
    label: 'الدراسات الإسلامية',
    icon: Moon,
    iconClassName: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    label: 'اللغة الإنجليزية',
    icon: Languages,
    iconClassName: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  },
  {
    label: 'المهارات الحياتية والأسرية',
    icon: Palette,
    iconClassName: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
];

// ----------------------------------------------------------------------

export function DashboardView() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:py-14">
      {/* Floating Decorative Elements */}
      {FLOATING_ICONS.map((icon) => (
        <m.div
          key={icon.alt}
          className={`pointer-events-none absolute -z-10 hidden sm:block ${icon.className}`}
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
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.smSize}
              height={icon.smSize}
              className="h-auto w-[var(--icon-size)]"
              style={
                {
                  '--icon-size': `${icon.size}px`,
                } as React.CSSProperties
              }
            />
          </m.div>
        </m.div>
      ))}

      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <m.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Logo
                href="/dashboard"
                disabled
                className="mb-6 h-32 w-32 sm:mb-8 sm:h-40 sm:w-4h-40 md:h-48 md:w-48"
              />
            </m.div>
          </m.div>

          {/* Headline */}
          <m.h1
            className="mb-3 text-2xl font-bold text-primary sm:mb-4 sm:text-3xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            جاهز للإبداع؟ اختر مادة لننطلق معاً!
          </m.h1>

          {/* Subhead */}
          <m.p
            className="text-sm text-secondary font-normal sm:text-base md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            معلمك الذكي هنا ليجعل دروسك أسهل وأكثر متعة
          </m.p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 gap-4 md:p-7 sm:gap-5 md:grid-cols-3 md:gap-7">
          {SUBJECTS.map((subject, index) => (
            <SubjectCard
              key={subject.label}
              label={subject.label}
              icon={subject.icon}
              iconClassName={subject.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

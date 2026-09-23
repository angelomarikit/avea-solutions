import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { IconArrow } from './Icons'
import { MagneticButton } from './MagneticButton'

const reasons = [
  {
    title: 'No HR hassle',
    body: 'Recruitment, onboarding, employment admin, benefits, and team support sit with Avea — you get the output of a dedicated team.',
  },
  {
    title: 'Dedicated, not random',
    body: 'Long-term remote professionals who learn your practice, not rotating freelancers from a marketplace feed.',
  },
  {
    title: 'Accountability built in',
    body: 'Where appropriate, a Team Leader layer adds systems fluency, training support, and quality control.',
  },
  {
    title: 'Humans + modern tools',
    body: 'Capable professionals paired with AI and productivity tooling where it meaningfully improves how work gets done.',
  },
  {
    title: 'Partnership mindset',
    body: 'Subscription-based staffing designed to scale with you — a quiet extension of your business, not a transactional vendor.',
  },
]

export function WhyAvea() {
  return (
    <section id="why" className="bg-grain relative overflow-hidden bg-brand py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/25 blur-3xl" />
        <motion.svg
          className="absolute right-[-10%] top-1/4 h-[380px] w-[380px] text-white/10"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
          animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M40 260 C150 100 250 130 370 210"
            stroke="currentColor"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      <div className="relative z-[2] mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
            Why Avea
          </p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            An extension of your practice.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            Premium managed workforce solutions for businesses that want to
            scale capacity without unnecessarily increasing internal overhead.
          </p>
          <div className="mt-10">
            <MagneticButton
              href="#contact"
              className="bg-brand-accent text-white shadow-[0_18px_40px_-16px_rgba(2,135,144,0.9)] hover:bg-white hover:text-brand"
            >
              Start your journey
              <IconArrow className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>

        <div className="space-y-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group grid gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 sm:grid-cols-[minmax(0,12.5rem)_1fr] sm:gap-6 sm:px-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 font-display text-lg text-brand-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-white drop-shadow-sm transition group-hover:text-brand-accent">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                  {reason.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

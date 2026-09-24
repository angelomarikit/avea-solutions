import { useRef } from 'react'
import type { MouseEvent } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { LogoMark } from './Logo'
import { IconArrow } from './Icons'
import { MagneticButton } from './MagneticButton'

const lineEase = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const imgX = useTransform(sx, [-1, 1], [-18, 18])
  const imgY = useTransform(sy, [-1, 1], [-12, 12])
  const glowX = useTransform(sx, [-1, 1], ['35%', '65%'])
  const glowY = useTransform(sy, [-1, 1], ['25%', '55%'])

  function onMove(e: MouseEvent) {
    if (reduce || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="bg-grain relative min-h-[100svh] overflow-hidden bg-surface-muted"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-brand opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(2,135,144,0.22),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(5,87,124,0.28),transparent_55%),linear-gradient(160deg,#EBEBE3_0%,#E3E9E8_45%,#D5E2E4_100%)]" />
        <motion.div
          className="absolute h-[420px] w-[420px] rounded-full bg-brand-accent/25 blur-3xl"
          style={
            reduce
              ? { left: '55%', top: '20%' }
              : { left: glowX, top: glowY, x: '-50%', y: '-50%' }
          }
        />
        <motion.svg
          className={`absolute -right-20 top-24 h-[420px] w-[420px] text-brand/20 sm:right-0 sm:h-[560px] sm:w-[560px] ${reduce ? '' : 'animate-swoosh'}`}
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
        >
          <path
            d="M40 280 C140 120 240 140 360 220"
            stroke="currentColor"
            strokeWidth="48"
            strokeLinecap="round"
          />
          <path
            d="M60 320 C160 160 260 180 380 260"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.5"
          />
        </motion.svg>

        <motion.div
          className="absolute inset-y-0 right-0 hidden w-[48%] overflow-hidden lg:block"
          style={reduce ? undefined : { x: imgX, y: imgY }}
        >
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #EBEBE3 0%, rgba(235,235,227,0.7) 22%, rgba(235,235,227,0.12) 52%), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
            }}
            role="img"
            aria-label="Professional team collaborating remotely"
          />
          <div className="absolute bottom-16 left-10 rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-md">
            <p className="text-[0.65rem] font-medium tracking-brand text-brand-accent uppercase">
              Partnership model
            </p>
            <p className="mt-1 font-display text-2xl text-brand">Dedicated teams</p>
            <p className="mt-1 max-w-[12rem] text-xs leading-relaxed text-brand/65">
              Managed staffing, not freelance placement.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: lineEase }}
            className="mb-8"
          >
            <motion.div
              className={`inline-block ${reduce ? '' : 'animate-float'}`}
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            >
              <LogoMark className="h-28 w-auto sm:h-36 md:h-40" />
            </motion.div>
          </motion.div>

          <h1 className="font-display text-[3.25rem] leading-[0.95] text-brand sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {['Your team,', 'without the', 'HR hassle.'].map((line, i) => (
              <motion.span
                key={line}
                className={`block overflow-hidden ${i === 2 ? 'text-brand-accent' : ''}`}
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: lineEase }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: lineEase }}
            className="mt-6 max-w-md text-base leading-relaxed text-brand/75 sm:text-lg"
          >
            Managed remote staffing for law firms and professional practices.
            Dedicated Philippine based teams that work as an extension of yours.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: lineEase }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="bg-brand-accent text-white shadow-[0_16px_40px_-16px_rgba(2,135,144,0.8)] hover:bg-brand"
            >
              Book a consultation
              <IconArrow className="h-4 w-4" />
            </MagneticButton>
            <a
              href="#about"
              className="link-draw group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-brand"
            >
              How Avea works
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2 text-brand/50 sm:flex"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about"
      >
        <span className="text-[0.6rem] tracking-brand uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.a>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { IconCheck } from './Icons'

const roles = [
  {
    title: 'Assistant / Paralegal',
    detail:
      'Document preparation, research, client communication support, intake, billing admin, compliance tasks, and day-to-day legal operations.',
  },
  {
    title: 'Administrative professionals',
    detail:
      'Scheduling, correspondence, filing systems, reporting, and the operational workloads that keep a practice moving.',
  },
  {
    title: 'Team Leader layer',
    detail:
      'Where needed, a Team Leader learns your systems, helps train the team, and adds quality control and accountability.',
  },
]

const steps = [
  {
    title: 'Understand the practice',
    body: 'We map your recurring workloads and the structure that will actually help — not a rigid off-the-shelf package.',
  },
  {
    title: 'Build the team',
    body: 'Avea handles recruitment, onboarding, and employment administration so you get dedicated people, not a revolving door.',
  },
  {
    title: 'Coordinate & support',
    body: 'Ongoing team support, coordination, and — where appropriate — AI and productivity tools to sharpen how work gets done.',
  },
  {
    title: 'You stay focused',
    body: 'Your remote team becomes an extension of the firm. You practise. We run the staffing infrastructure behind the scenes.',
  },
]

export function Staffing() {
  return (
    <section
      id="staffing"
      className="bg-grain relative overflow-hidden bg-surface-muted py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-brand opacity-40" />

      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
                How we staff
              </p>
              <h2 className="mt-3 font-display text-5xl text-brand sm:text-6xl">
                Dedicated remote teams built around your needs.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-brand/70">
                Flexible arrangements based on what your practice actually
                requires — subscription-based simplicity with Avea owning the
                staffing-side responsibilities.
              </p>
            </Reveal>

            <div className="mt-12 space-y-4">
              {roles.map((role, i) => (
                <Reveal key={role.title} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="group cursor-default rounded-xl border border-transparent bg-surface/60 p-5 transition duration-300 hover:border-brand-accent/30 hover:bg-surface hover:shadow-[0_20px_50px_-28px_rgba(5,87,124,0.4)]"
                  >
                    <div className="flex gap-4 border-l-2 border-brand-accent/50 pl-4 transition group-hover:border-brand-accent">
                      <div>
                        <h3 className="font-semibold text-brand transition group-hover:text-brand-accent">
                          {role.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-brand/65">
                          {role.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative overflow-hidden rounded-2xl bg-brand p-8 text-white shadow-[0_30px_70px_-30px_rgba(5,87,124,0.7)] sm:p-10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-accent/35 blur-2xl animate-pulse-soft" />
              <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <p className="relative font-display text-3xl tracking-wide sm:text-4xl">
                From brief to bench
              </p>
              <ol className="relative mt-8 space-y-3">
                {steps.map((step, i) => (
                  <motion.li
                    key={step.title}
                    whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    className="flex gap-4 rounded-xl p-3 transition"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-accent/50 bg-brand-accent/15 text-brand-accent">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold">
                        <span className="mr-2 text-brand-accent">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {step.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

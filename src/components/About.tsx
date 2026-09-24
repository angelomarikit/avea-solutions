import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const pillars = [
  {
    title: 'Who we are',
    body: 'Avea Solutions is a managed staffing and remote workforce partner. We help law firms and professional practices build reliable teams in the Philippines by designing and running the staffing structure around your practice.',
  },
  {
    title: 'What we do',
    body: 'We recruit, onboard, and coordinate dedicated assistants, paralegals, administrative professionals, and team leaders who learn your systems and operate as part of your firm.',
  },
  {
    title: 'Our promise',
    body: 'Reliable. Skilled. Accountable. A long term staffing partnership so you can focus on practising law, serving clients, and growing while we quietly handle the people infrastructure.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-grain relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl animate-pulse-soft" />

      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
            About Avea
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl text-brand sm:text-6xl">
            Managed staffing built around your practice.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand/70 sm:text-lg">
            Clients choose Avea when they need capacity without the cost,
            complexity, or HR burden of hiring locally, and without the
            unpredictability of freelancer platforms.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={0.1 * i} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-brand/10 bg-surface-muted/80 p-7 transition-shadow duration-300 hover:border-brand-accent/35 hover:shadow-[0_28px_60px_-28px_rgba(5,87,124,0.45)] sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-accent/0 via-transparent to-brand/0 opacity-0 transition duration-500 group-hover:from-brand-accent/10 group-hover:to-brand/5 group-hover:opacity-100" />
                <p className="font-display text-3xl text-brand-accent transition duration-300 group-hover:translate-x-1 sm:text-4xl">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-sans text-lg font-semibold text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand/70 sm:text-[0.95rem]">
                  {item.body}
                </p>
                <span className="mt-6 block h-px w-10 bg-brand-accent/40 transition-all duration-500 group-hover:w-full group-hover:bg-brand-accent" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Reveal } from './Reveal'
import { IconArrow } from './Icons'
import { TiltCard } from './TiltCard'
import { MagneticButton } from './MagneticButton'

const engagements = [
  {
    name: 'Foundation desk',
    summary:
      'A dedicated Assistant or Paralegal embedded in your workflows, ideal for sole practitioners and lean practices adding reliable capacity.',
    points: [
      'Role designed around your matters and admin load',
      'Avea managed recruitment and employment',
      'Ongoing coordination and support',
      'Predictable subscription staffing',
    ],
  },
  {
    name: 'Practice pod',
    summary:
      'Assistant or Paralegal plus Team Leader oversight, systems fluency, training support, and an extra layer of quality control.',
    points: [
      'Team Leader learns your tools and standards',
      'Quality control and accountability built in',
      'Scales with recurring operational work',
      'Best for growing small to mid sized firms',
    ],
    featured: true,
  },
  {
    name: 'Custom structure',
    summary:
      'Multi role remote support designed around intake, research, billing, compliance, or firm specific operations, built with you, not forced into a box.',
    points: [
      'Flexible headcount and role mix',
      'Human expertise plus modern productivity tools',
      'Long term partnership model',
      'Expand beyond legal as your needs evolve',
    ],
  },
]

export function Engagements() {
  return (
    <section id="engagements" className="bg-grain relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />

      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
            Engagements
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl text-brand sm:text-6xl">
            Flexible staffing. Subscription simplicity.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand/70">
            Choose an arrangement shaped by how your practice works. Avea
            handles the staffing infrastructure so capacity stays predictable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {engagements.map((item, i) => (
            <Reveal key={item.name} delay={0.1 * i} className="h-full">
              <TiltCard>
                <article
                  className={`group flex h-full flex-col rounded-2xl border p-7 sm:p-8 ${
                    item.featured
                      ? 'border-brand-accent/40 bg-brand text-white shadow-[0_24px_60px_-28px_rgba(5,87,124,0.55)]'
                      : 'border-brand/10 bg-surface-muted text-brand'
                  }`}
                >
                  {item.featured && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-brand-accent/20 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-brand-accent uppercase">
                      Most chosen
                    </span>
                  )}
                  <h3 className="font-display text-3xl tracking-wide transition duration-300 group-hover:tracking-wider">
                    {item.name}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      item.featured ? 'text-white/75' : 'text-brand/65'
                    }`}
                  >
                    {item.summary}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm transition duration-300 group-hover:translate-x-1"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        <span className={item.featured ? 'text-white/85' : 'text-brand/80'}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                      item.featured
                        ? 'text-brand-accent hover:text-white'
                        : 'text-brand-accent hover:text-brand'
                    }`}
                  >
                    Request a consult
                    <IconArrow className="h-4 w-4 transition group-hover/link:translate-x-1" />
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <MagneticButton
            href="#contact"
            className="border border-brand/20 bg-transparent text-brand hover:border-brand-accent hover:bg-brand-accent hover:text-white"
          >
            Prefer a custom quote? Tell us what you need
            <IconArrow className="h-4 w-4" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  )
}

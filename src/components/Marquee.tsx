const items = [
  'Managed staffing',
  'Dedicated remote teams',
  'No HR hassle',
  'Team Leader + Paralegal',
  'The Right People. The Right Fit.',
  'Professional practices',
  'Philippine professionals',
  'Subscription simplicity',
]

export function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-brand/10 bg-brand py-4 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand to-transparent" />
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap will-change-transform">
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-10 font-display text-2xl tracking-wide text-white/90 sm:text-3xl"
          >
            {label}
            <span className="inline-block h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}

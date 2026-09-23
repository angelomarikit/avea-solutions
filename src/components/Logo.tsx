type LogoProps = {
  variant?: 'color' | 'white'
  showWordmark?: boolean
  showTagline?: boolean
  className?: string
  markClassName?: string
}

/** Dual-tone A with swoosh crossbar — matches Avea brand mark */
function MarkPaths({ variant }: { variant: 'color' | 'white' }) {
  const isWhite = variant === 'white'
  const upper = isWhite ? '#FFFFFF' : '#05577C'
  const lower = isWhite ? '#FFFFFF' : '#028790'
  const gap = isWhite ? '#05577C' : '#EBEBE3'

  return (
    <g>
      {/* Left leg + apex (upper brand) */}
      <path
        d="M40 6 L14 74 H27.5 L40 42 L45 54 L52 42 L40 6 Z"
        fill={upper}
      />
      {/* Right leg (lower brand) */}
      <path d="M40 6 L66 74 H52.5 L40 42 L40 6 Z" fill={lower} />
      {/* Swoosh cut through crossbar area */}
      <path
        d="M18 50 C32 34 48 38 62 48"
        stroke={gap}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

export function Logo({
  variant = 'color',
  showWordmark = true,
  showTagline = false,
  className = '',
  markClassName = 'h-10 w-10',
}: LogoProps) {
  const isWhite = variant === 'white'
  const text = isWhite ? 'text-white' : 'text-brand'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className={markClassName}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <MarkPaths variant={variant} />
      </svg>

      {showWordmark && (
        <div className={`flex flex-col leading-none ${text}`}>
          <span className="font-sans text-xl font-semibold tracking-tight lowercase sm:text-2xl">
            avea
          </span>
          <span className="mt-0.5 font-sans text-[0.65rem] font-medium tracking-brand uppercase">
            Solutions
          </span>
          {showTagline && (
            <>
              <span
                className={`mt-2 block h-px w-full ${isWhite ? 'bg-white/50' : 'bg-brand/30'}`}
              />
              <span className="mt-2 max-w-[11rem] text-[0.55rem] font-medium tracking-brand uppercase opacity-80">
                The Right People. The Right Fit.
              </span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export function LogoMark({
  variant = 'color',
  className = 'h-9 w-9',
}: {
  variant?: 'color' | 'white'
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <MarkPaths variant={variant} />
    </svg>
  )
}

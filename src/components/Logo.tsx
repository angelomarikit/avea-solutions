type LogoProps = {
  /** Full lockup includes mark, avea, SOLUTIONS, and tagline */
  className?: string
  /** Height utility classes, e.g. h-10 */
  imgClassName?: string
  alt?: string
  /** Use white lockup on dark backgrounds */
  variant?: 'color' | 'white'
}

/** Official Avea Solutions logo asset (do not recreate). */
export function Logo({
  className = '',
  imgClassName = 'h-10 w-auto',
  alt = 'Avea Solutions',
  variant = 'color',
}: LogoProps) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo-transparent.png'

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`${imgClassName} object-contain`}
        decoding="async"
      />
    </span>
  )
}

/** Compact usage of the same official logo */
export function LogoMark({
  className = 'h-9 w-auto',
  variant = 'color',
}: {
  className?: string
  variant?: 'color' | 'white'
}) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo-transparent.png'

  return (
    <img
      src={src}
      alt="Avea Solutions"
      className={`${className} object-contain`}
      decoding="async"
    />
  )
}

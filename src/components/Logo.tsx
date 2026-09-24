type LogoProps = {
  /** Full lockup includes mark, avea, SOLUTIONS, and tagline */
  className?: string
  /** Height utility classes, e.g. h-10 */
  imgClassName?: string
  alt?: string
}

/** Official Avea Solutions logo asset (do not recreate). */
export function Logo({
  className = '',
  imgClassName = 'h-10 w-auto',
  alt = 'Avea Solutions',
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/logo-transparent.png"
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
}: {
  className?: string
}) {
  return (
    <img
      src="/logo-transparent.png"
      alt="Avea Solutions"
      className={`${className} object-contain`}
      decoding="async"
    />
  )
}

export function IconCircle({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current ${className}`}
    >
      {children}
    </span>
  )
}

export function IconCheck({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5 L10 17.5 L19 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconFacebook({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.2 18V12.4h1.7l.25-2H13.2V9.15c0-.58.16-1 .96-1H15.3V6.1C15 6.05 14.3 6 13.5 6c-1.7 0-2.85 1.05-2.85 2.95V10.4H9v2h1.65V18h2.55Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconInstagram({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <rect
        x="8"
        y="8"
        width="8"
        height="8"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.35" cy="8.65" r="0.7" fill="currentColor" />
    </svg>
  )
}

export function IconPhoneChat({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.2 9.2c0-.7.55-1.25 1.25-1.25h5.1c.7 0 1.25.55 1.25 1.25v4.4c0 .7-.55 1.25-1.25 1.25h-2.2L10.2 16.8v-1.95H9.45c-.7 0-1.25-.55-1.25-1.25V9.2Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M10.1 11.4c.35-.55.9-.9 1.55-.9.85 0 1.55.55 1.75 1.3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconArrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

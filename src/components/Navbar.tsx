import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'
import { MagneticButton } from './MagneticButton'

const links = [
  { href: '#about', label: 'About' },
  { href: '#staffing', label: 'How we staff' },
  { href: '#engagements', label: 'Engagements' },
  { href: '#why', label: 'Why Avea' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-brand/10 bg-surface-muted/90 shadow-[0_10px_40px_-24px_rgba(5,87,124,0.35)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <motion.a
          href="#top"
          className="relative z-10"
          aria-label="Avea Solutions home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo markClassName="h-9 w-9 sm:h-10 sm:w-10" />
        </motion.a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-draw text-sm font-medium text-brand/80 transition-colors hover:text-brand-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton
            href="#contact"
            className="bg-brand-accent px-5 py-2.5 text-white shadow-[0_12px_30px_-14px_rgba(2,135,144,0.85)] hover:bg-brand"
          >
            Get Started
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md text-brand transition hover:bg-brand/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-brand transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 bg-brand transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 bg-brand transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 bg-surface-muted lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-1 px-6 py-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    className="block py-3 font-display text-3xl text-brand transition hover:text-brand-accent"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a
                  href="#contact"
                  className="btn-shine inline-flex w-full items-center justify-center rounded-md bg-brand-accent px-5 py-3.5 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

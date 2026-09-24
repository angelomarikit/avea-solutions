import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { IconFacebook, IconInstagram, IconPhoneChat } from './Icons'
import { CONTACT_EMAIL, MAILTO_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#staffing', label: 'How we staff' },
  { href: '#engagements', label: 'Engagements' },
  { href: '#why', label: 'Why Avea' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo variant="white" imgClassName="h-20 w-auto sm:h-24" />
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Managed remote staffing for law firms and professional practices.
              Your team, without the HR hassle.
            </p>
            <div className="mt-6 flex gap-3">
              {(
                [
                  {
                    href: 'https://facebook.com',
                    label: 'Facebook',
                    Icon: IconFacebook,
                  },
                  {
                    href: 'https://instagram.com',
                    label: 'Instagram',
                    Icon: IconInstagram,
                  },
                  {
                    href: MAILTO_URL,
                    label: 'Email Avea',
                    Icon: IconPhoneChat,
                  },
                ] as const
              ).map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-white/80"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08, color: '#028790' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-9 w-9" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-[0.65rem] font-medium tracking-brand text-brand-accent uppercase">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-medium tracking-brand text-brand-accent uppercase">
                Contact
              </p>
              <a
                href={MAILTO_URL}
                className="mt-4 block text-sm text-white/75 transition hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm text-white/75 transition hover:text-white"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href="#contact"
                className="mt-6 inline-flex text-sm font-semibold text-brand-accent transition hover:text-white"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Avea Solutions. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-xs font-medium tracking-wide text-white/60 uppercase transition hover:text-brand-accent"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

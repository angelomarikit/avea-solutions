import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from './Reveal'
import { IconArrow, IconPhoneChat } from './Icons'
import { MagneticButton } from './MagneticButton'
import {
  CONTACT_EMAIL,
  FORM_SUBMIT_URL,
  MAILTO_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../lib/contact'

type FormState = {
  name: string
  firm: string
  email: string
  phone: string
  need: string
  message: string
}

const initial: FormState = {
  name: '',
  firm: '',
  email: '',
  phone: '',
  need: '',
  message: '',
}

const needLabels: Record<string, string> = {
  foundation: 'Foundation desk (single role)',
  pod: 'Practice pod (with Team Leader)',
  custom: 'Custom structure',
  explore: 'Not sure yet, explore options',
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.firm.trim()) errors.firm = 'Please enter your firm or practice.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.need.trim()) errors.need = 'Tell us what staffing support you need.'
  if (!values.message.trim()) errors.message = 'A short message helps us prepare.'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  function onChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSubmitError(null)
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setSubmitError(null)

    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          firm: values.firm.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || 'Not provided',
          staffing_need: needLabels[values.need] || values.need,
          message: values.message.trim(),
          _subject: `Avea consultation: ${values.firm.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = (await res.json().catch(() => null)) as {
        success?: string | boolean
        message?: string
      } | null

      if (!res.ok || data?.success === 'false' || data?.success === false) {
        throw new Error(data?.message || 'Unable to send your message right now.')
      }

      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('idle')
      setSubmitError(
        `We couldn’t send that just now. Email us at ${CONTACT_EMAIL} or message us on WhatsApp.`,
      )
    }
  }

  return (
    <section
      id="contact"
      className="bg-grain relative overflow-hidden bg-surface-muted py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-brand-accent/15 blur-3xl animate-pulse-soft" />
      <div className="relative z-[2] mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-display text-5xl text-brand sm:text-6xl">
            Ready to build your remote team?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand/70">
            Tell us about your practice and the capacity you need. We’ll follow
            up with a clear path to a managed staffing arrangement.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={MAILTO_URL}
              className="link-draw group flex items-center gap-3 text-sm font-semibold text-brand"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/15 text-brand-accent transition group-hover:border-brand-accent/40">
                <IconPhoneChat className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.65rem] font-medium tracking-brand text-brand/50 uppercase">
                  Email
                </span>
                {CONTACT_EMAIL}
              </span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="link-draw group flex items-center gap-3 text-sm font-semibold text-brand"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/15 text-brand-accent transition group-hover:border-brand-accent/40">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.65rem] font-medium tracking-brand text-brand/50 uppercase">
                  WhatsApp
                </span>
                {WHATSAPP_DISPLAY}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="rounded-2xl border border-brand/10 bg-surface p-6 shadow-[0_20px_50px_-30px_rgba(5,87,124,0.35)] transition hover:border-brand-accent/25 hover:shadow-[0_28px_60px_-28px_rgba(5,87,124,0.45)] sm:p-8"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[320px] flex-col items-start justify-center"
                >
                  <p className="font-display text-4xl text-brand">Thank you.</p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand/70">
                    Your consultation request has been sent to {CONTACT_EMAIL}.
                    We’ll be in touch shortly.
                  </p>
                  <button
                    type="button"
                    className="mt-8 text-sm font-semibold text-brand-accent"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <Field
                    label="Full name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label="Firm / practice"
                    name="firm"
                    value={values.firm}
                    onChange={onChange}
                    error={errors.firm}
                    autoComplete="organization"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    label="Phone (optional)"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="need"
                      className="mb-1.5 block text-xs font-medium text-brand/70"
                    >
                      Staffing need
                    </label>
                    <select
                      id="need"
                      name="need"
                      value={values.need}
                      onChange={onChange}
                      className={inputClass(!!errors.need)}
                    >
                      <option value="">Select one</option>
                      <option value="foundation">Foundation desk (single role)</option>
                      <option value="pod">Practice pod (with Team Leader)</option>
                      <option value="custom">Custom structure</option>
                      <option value="explore">Not sure yet, explore options</option>
                    </select>
                    {errors.need && (
                      <p className="mt-1 text-xs text-red-700">{errors.need}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-brand/70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={onChange}
                      className={inputClass(!!errors.message)}
                      placeholder="Tell us about your practice and what support would help most."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-700">{errors.message}</p>
                    )}
                  </div>
                  {submitError && (
                    <p className="sm:col-span-2 text-sm text-red-700">{submitError}</p>
                  )}
                  <div className="sm:col-span-2 pt-2">
                    <MagneticButton
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-accent text-white shadow-[0_16px_40px_-16px_rgba(2,135,144,0.8)] hover:bg-brand disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Submit message'}
                      {status !== 'submitting' && <IconArrow className="h-4 w-4" />}
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.36 12.76L3.8 20.2l3.99-.84A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.4c.2-.4.4-.45.7-.45h.5c.18 0 .35.08.45.3l.7 1.55c.1.22.05.45-.12.6l-.4.38c-.12.12-.15.28-.08.43.35.75 1.1 1.5 1.9 1.95.18.1.4.06.55-.08l.5-.5c.16-.16.4-.2.6-.1l1.55.7c.22.1.35.3.3.52v.55c0 .28-.1.5-.4.7-.55.35-1.45.55-2.35.2-1.55-.6-3.05-2.05-3.8-3.7-.4-.9-.4-1.8.05-2.45Z"
        fill="currentColor"
      />
    </svg>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-surface-muted/60 px-3.5 py-2.5 text-sm text-brand outline-none transition placeholder:text-brand/35 focus:border-brand-accent focus:bg-surface focus:ring-2 focus:ring-brand-accent/25 focus:scale-[1.01] ${
    hasError ? 'border-red-400' : 'border-brand/15'
  }`
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
}: {
  label: string
  name: keyof FormState
  value: string
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-brand/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={inputClass(!!error)}
      />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  )
}

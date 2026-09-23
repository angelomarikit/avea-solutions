import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from './Reveal'
import { IconArrow } from './Icons'
import { MagneticButton } from './MagneticButton'

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

  function onChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    // Stub: replace with Formspree / API endpoint when available
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
    setValues(initial)
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
          <a
            href="mailto:hello@aveasolutions.com"
            className="link-draw mt-8 inline-flex text-sm font-semibold text-brand"
          >
            hello@aveasolutions.com
          </a>
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
                    Your consultation request has been received. We’ll be in
                    touch shortly.
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
                      <option value="explore">Not sure yet — explore options</option>
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

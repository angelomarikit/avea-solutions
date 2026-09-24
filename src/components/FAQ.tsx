import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { IconArrow } from './Icons'
import { MagneticButton } from './MagneticButton'

const faqs = [
  {
    q: 'How is Avea different from hiring freelancers?',
    a: 'Avea is a managed staffing partner. We design and run a dedicated remote staffing structure around your practice, handling recruitment, employment administration, support, and coordination, rather than matching you with random freelancers.',
  },
  {
    q: 'Who is Avea built for?',
    a: 'Law firms, sole practitioners, and small to mid sized professional practices that need extra capacity without the cost, complexity, or HR burden of hiring locally. Over time, the model can extend to other professional service industries.',
  },
  {
    q: 'What roles can Avea provide?',
    a: 'Trained assistants, paralegals, administrative professionals, and where appropriate, Team Leaders who learn your systems, help train the team, and add quality control and accountability.',
  },
  {
    q: 'How does the Team Leader and Assistant model work?',
    a: 'Depending on your needs, your team may include an Assistant or Paralegal supported by a Team Leader. The Team Leader builds fluency in your tools and processes, supports training, and provides an extra layer of oversight so work stays consistent.',
  },
  {
    q: 'What does Avea handle versus what we manage?',
    a: 'Avea takes care of staffing side responsibilities: recruitment, onboarding, employment administration, benefits, team support, and coordination. You direct the day to day work of your dedicated team as an extension of your practice.',
  },
  {
    q: 'Are packages fixed, or can we customise?',
    a: 'Engagements are flexible and built around your actual workloads, from a single Foundation desk to a Practice pod or a fully custom structure. Subscription staffing keeps capacity predictable without forcing you into rigid packages.',
  },
  {
    q: 'Where is the team based, and how do they work with us?',
    a: 'Avea provides trained Philippine based professionals who work as a dedicated remote extension of your firm, learning your systems and supporting recurring admin, legal support, research, intake, billing, compliance, and other operational work that can be done remotely.',
  },
  {
    q: 'Do you use AI and modern productivity tools?',
    a: 'Yes, where it helps. The goal is not simply more people. It is a more efficient operating model that combines capable human professionals with technology, applied thoughtfully to your workflows.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-grain relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-brand text-brand-accent uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-5xl text-brand sm:text-6xl">
              Questions, answered.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand/70">
              Straight answers about how Avea’s managed staffing model works for
              professional practices. Don’t see your question? Reach out through
              the contact form and we’ll help personally.
            </p>

            <div className="mt-8 rounded-2xl border border-brand/10 bg-surface-muted p-6">
              <p className="font-semibold text-brand">Still need clarity?</p>
              <p className="mt-2 text-sm leading-relaxed text-brand/65">
                If your question isn’t covered here, including pricing for a custom
                structure, timelines, or a specific practice need, send us a
                short note and we’ll follow up.
              </p>
              <div className="mt-5">
                <MagneticButton
                  href="#contact"
                  className="bg-brand-accent text-white shadow-[0_14px_36px_-16px_rgba(2,135,144,0.85)] hover:bg-brand"
                >
                  Go to contact form
                  <IconArrow className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const open = openIndex === i
              return (
                <Reveal key={item.q} delay={0.04 * i}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition duration-300 ${
                      open
                        ? 'border-brand-accent/40 bg-surface-muted shadow-[0_18px_40px_-28px_rgba(5,87,124,0.4)]'
                        : 'border-brand/10 bg-surface hover:border-brand/25'
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? null : i)}
                    >
                      <span className="pr-2 text-sm font-semibold text-brand sm:text-[0.95rem]">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none ${
                          open
                            ? 'border-brand-accent bg-brand-accent text-white'
                            : 'border-brand/20 text-brand'
                        }`}
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="border-t border-brand/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-brand/70 sm:px-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}

            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-dashed border-brand-accent/40 bg-brand/[0.03] px-5 py-5 sm:px-6">
                <p className="text-sm font-semibold text-brand">
                  Can’t find your answer?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand/65">
                  Use the contact form below and tell us what you need. If it
                  isn’t covered in these FAQs, we’ll respond directly with
                  guidance for your practice.
                </p>
                <a
                  href="#contact"
                  className="link-draw group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"
                >
                  Ask via contact form
                  <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

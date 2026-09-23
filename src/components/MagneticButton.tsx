import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = '',
  href,
  type = 'button',
  disabled,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 18 })
  const springY = useSpring(y, { stiffness: 280, damping: 18 })

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.28)
    y.set(dy * 0.28)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const shared = {
    ref: ref as never,
    className: `btn-shine relative inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition will-change-transform ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: reduce ? undefined : { x: springX, y: springY },
    whileHover: reduce ? undefined : { scale: 1.04 },
    whileTap: reduce ? undefined : { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} {...shared}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} disabled={disabled} onClick={onClick} {...shared}>
      {children}
    </motion.button>
  )
}

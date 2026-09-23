import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 })
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(2,135,144,0.18), transparent 55%)`

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateX.set((py - 0.5) * -10)
    rotateY.set((px - 0.5) * 12)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  function onLeave() {
    rotateX.set(0)
    rotateY.set(0)
    glareX.set(50)
    glareY.set(50)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative h-full transform-gpu [transform-style:preserve-3d] ${className}`}
      style={
        reduce
          ? undefined
          : {
              rotateX: springRX,
              rotateY: springRY,
              perspective: 900,
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduce ? undefined : { z: 20 }}
    >
      <div className="relative h-full overflow-hidden rounded-[inherit]">
        {children}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light"
            style={{ background: glare }}
          />
        )}
      </div>
    </motion.div>
  )
}

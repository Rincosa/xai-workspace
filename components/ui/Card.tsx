'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { forwardRef } from 'react'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.4)' } : {}}
        className={cn('card', hover && 'card-hover', className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
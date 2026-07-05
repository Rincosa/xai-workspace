'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'
import { cn } from '@/lib/utils/cn'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeColor?: 'success' | 'warning' | 'error'
  delay?: number
}

export function StatCard({ title, value, change, changeColor = 'success', delay = 0 }: StatCardProps) {
  const colors = {
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card hover>
        <div className="text-small">{title}</div>
        <div className="text-3xl font-semibold tracking-tight">{value}</div>
        {change && <span className={cn('text-xs', colors[changeColor])}>{change}</span>}
      </Card>
    </motion.div>
  )
}
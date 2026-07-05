'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card hover className="text-center">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-title mb-1">{title}</h3>
        <p className="text-small">{description}</p>
      </Card>
    </motion.div>
  )
}
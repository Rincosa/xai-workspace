'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ParticleSystem } from '@/components/animations/ParticleSystem'

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display text-glow">
            Revolutionary Business Decisions
            <br />
            <span className="text-[0.7em] text-text-secondary">with AI-Powered Analytics</span>
          </h1>
          <p className="text-body max-w-[480px] mt-3">
            Harness the power of artificial intelligence to transform your business data
            into actionable insights, propelling you to new heights of success.
          </p>
          <div className="flex gap-3 flex-wrap mt-6">
            <Button>Start your free trial</Button>
            <Button variant="ghost">Watch video</Button>
          </div>
          <div className="flex gap-8 flex-wrap mt-4 pt-4 border-t border-border">
            <div>
              <div className="text-2xl font-semibold">160,000+</div>
              <div className="text-tiny text-muted uppercase tracking-wider">Customers in 120+ countries</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">98%</div>
              <div className="text-tiny text-muted uppercase tracking-wider">Customer satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:col-span-5">
        <ParticleSystem />
      </div>
    </section>
  )
}
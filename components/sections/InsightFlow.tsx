'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/Card'

const stages = [
  { icon: '📥', title: 'Ingest Data', description: 'Connect multiple sources, raw streams' },
  { icon: '🧠', title: 'Analyze with AI', description: 'Pattern detection, anomaly scoring' },
  { icon: '⚡', title: 'Generate Insight', description: 'Actionable recommendations & automations' },
]

export function InsightFlow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-headline font-medium">From raw data to intelligence</h2>
        <span className="interactive-tag">scroll · hover</span>
      </div>
      <Card>
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex items-center gap-4 py-3 border-b border-[#1f2937] last:border-b-0 hover:pl-2 transition-all"
          >
            <div className="w-10 h-10 rounded-md bg-[#1f2b3a] flex items-center justify-center text-xl flex-shrink-0 hover:bg-[#2a3b55] hover:scale-105 transition-all">
              {stage.icon}
            </div>
            <div>
              <div className="text-title">{stage.title}</div>
              <div className="text-small">{stage.description}</div>
            </div>
            <span className="ml-auto bg-[#1f2a38] px-3 py-0.5 rounded-full text-tiny text-text-tertiary">
              {index === stages.length - 1 ? 'active' : '→'}
            </span>
          </motion.div>
        ))}
      </Card>
    </section>
  )
}
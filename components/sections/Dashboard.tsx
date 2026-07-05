'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StatCard } from '@/components/ui/StatCard'
import { Badge } from '@/components/ui/Badge'

const tabs = ['All insights', 'Recent', 'Saved']

export function Dashboard() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-headline font-medium">Your weekly activity</h2>
        <Badge>tabs · hover</Badge>
      </div>
      <div className="bg-[#11181f] rounded-xl border border-border overflow-hidden flex flex-col lg:flex-row min-h-[360px]">
        <nav className="w-full lg:w-[170px] bg-[#0d131b] p-4 border-b lg:border-b-0 lg:border-r border-[#1f2935]">
          {['📊 Overview', '📈 Analytics', '🧩 Automations', '⚙️ Settings'].map((item, i) => (
            <div
              key={item}
              className={`p-2 rounded-md text-sm font-medium text-text-tertiary mb-1 transition-all cursor-pointer hover:bg-[#1b2532] hover:text-text-primary hover:translate-x-1 ${
                i === 0 ? 'bg-[#1f2a38] text-text-primary' : ''
              }`}
            >
              {item}
            </div>
          ))}
        </nav>

        <div className="flex-1 p-4 lg:p-5">
          <div className="flex gap-5 border-b border-[#1f2937] pb-2 mb-3">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                  i === activeTab
                    ? 'text-text-primary border-primary'
                    : 'text-text-tertiary border-transparent hover:text-text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                <StatCard title="Total signals" value="1,284" change="↑ 12%" delay={0.1} />
                <StatCard title="Anomalies" value="43" change="3 active" changeColor="warning" delay={0.2} />
              </div>

              <div>
                <div className="text-small">Weekly activity</div>
                <div className="flex gap-2 items-end h-[100px] mt-1">
                  {[0.8, 0.5, 0.9, 0.3, 0.7, 1.0, 0.4].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height * 80 + 20}px` }}
                      transition={{ delay: i * 0.05, duration: 0.6 }}
                      className="flex-1 bg-[#2f4a7a] rounded-t-sm hover:bg-primary hover:scale-y-105 transition-all cursor-pointer"
                      style={{ minHeight: '12px' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
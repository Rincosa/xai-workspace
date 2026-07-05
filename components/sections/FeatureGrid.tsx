'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'

const features = [
  {
    icon: '📊',
    title: 'Predictive Power',
    description: 'Harness AI algorithms to anticipate market shifts and forecast demand.'
  },
  {
    icon: '🔗',
    title: 'Connect with Ease',
    description: 'Integrate with your existing tools for a unified analytics experience.'
  },
  {
    icon: '📈',
    title: 'Visualize Your Success',
    description: 'Craft bespoke dashboards that resonate with your brand\'s goals.'
  },
  {
    icon: '📏',
    title: 'Simplify Metrics',
    description: 'Easily measure your KPIs with an intuitive dashboard.'
  }
]

export function FeatureGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-headline text-center mb-2">Navigate with Confidence through Precise Predictions</h2>
      <p className="text-body text-center max-w-[700px] mx-auto mb-6">
        Embark on a journey of data-driven decision-making with Xai, where our advanced AI algorithms
        meticulously analyze historical data and identify emerging patterns.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
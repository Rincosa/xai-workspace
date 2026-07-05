'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

const testimonials = [
  {
    name: 'Nathan D. Hall',
    role: 'Project Lead',
    quote: 'Xai transformed how we make decisions. The insights are incredible.'
  },
  {
    name: 'Neo K. Johnson',
    role: 'Product Manager',
    quote: 'The AI-powered analytics have given us a competitive edge.'
  },
  {
    name: 'Michael O. Lopez',
    role: 'Operations Director',
    quote: 'Our entire operation runs more efficiently with Xai.'
  }
]

export function Testimonials() {
  return (
    <section className="mt-10">
      <h2 className="text-headline text-center">The Xai Experience</h2>
      <p className="text-body text-center max-w-[600px] mx-auto mt-2 mb-6">
        At Xai, we pride ourselves on delivering top-notch AI-driven business analytics.
        Hear what our satisfied users have to say.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Card hover>
              <p className="text-body italic mb-2">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-small">{testimonial.role}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
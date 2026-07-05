'use client'

import { Hero } from '@/components/sections/Hero'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { InsightFlow } from '@/components/sections/InsightFlow'
import { Dashboard } from '@/components/sections/Dashboard'
import { Testimonials } from '@/components/sections/Testimonials'
import { Signature3D } from '@/components/sections/Signature3D'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <main className="container-app py-8 md:py-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <span className="font-semibold text-xl tracking-tight">Xai</span>
        <span className="badge">Intelligence Workspace</span>
      </header>

      {/* Hero */}
      <Hero />

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Insight Flow */}
      <InsightFlow />

      {/* Dashboard */}
      <Dashboard />

      {/* Testimonials */}
      <Testimonials />

      {/* Signature 3D */}
      <Signature3D />

      {/* CTA Section */}
      <section className="mt-10 text-center p-8 bg-card rounded-xl border border-border">
        <h2 className="text-headline">Experience the Future of Business Analytics</h2>
        <p className="text-body max-w-[500px] mx-auto mt-2 mb-6">
          Insights and predictions made easy. Advanced business intelligence tools enhance efficiency across your entire operation.
        </p>
        <Button size="lg">Start your free trial</Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1d2632] pt-6 mt-10 flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="font-medium text-[#b0c9e5]">Xai</span>
          <span className="ml-3 text-tiny text-muted">Intelligence Workspace</span>
        </div>
        <nav className="flex gap-5 text-tiny text-muted">
          <a href="#" className="hover:text-text-primary transition-colors">Product</a>
          <a href="#" className="hover:text-text-primary transition-colors">Docs</a>
          <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
          <span>© 2026</span>
        </nav>
      </footer>

      {/* Design System Annotation */}
      <div className="mt-4 px-4 py-1 rounded-full bg-[#131d28] border border-[#1e2b3a] text-tiny text-muted inline-block">
        12-col · 8px · Inter · dark · components & variants · WCAG AA
      </div>
    </main>
  )
}
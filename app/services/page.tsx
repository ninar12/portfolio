import React from "react"
import Link from "next/link"

const services = [
  {
    title: "Custom Website",
    tag: "WEBSITES",
    description:
      "A fast, modern site built to actually convert — not a template. I design and build from scratch with Next.js: landing pages, portfolios, business sites, booking flows.",
    details: ["Custom design, no templates", "Mobile-first and fast", "Deployed and ready to go"],
  },
  {
    title: "AI Chatbot",
    tag: "AI PRODUCTS",
    description:
      "A chatbot trained on your content — not generic GPT. Customer support, product Q&A, onboarding, lead capture. Knows your business, speaks in your tone, stays on-topic.",
    details: ["Trained on your docs, site, and FAQs", "Guardrails and tone control built in", "Embeds directly in your website"],
  },
  {
    title: "Small Business Automation",
    tag: "AUTOMATION",
    description:
      "Replace the manual work that slows your team down. Auto-tagging, report generation, email drafts, data extraction — I build AI pipelines that fit how you actually work.",
    details: ["Cuts hours of manual work per week", "Connects to your existing tools", "No engineering team required to maintain"],
  },
  {
    title: "Recommendation System",
    tag: "RETAIL AI",
    description:
      "The same personalization tech that drives revenue for major retail brands — built for your store. I architect recommendation and product discovery systems grounded in your catalog and customer behavior.",
    details: [
      "Built the same systems at GUESS Inc.",
      "Product recommendations, upsells, cross-sells",
      "Works with Shopify, WooCommerce, or custom",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            What I build for{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-200 text-transparent bg-clip-text">
              small businesses.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            The tools enterprise teams use — scoped and priced for growing businesses.
            Especially retail: I architect AI systems at the same level used by brands like GUESS.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-900/50 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-pink-500 border border-pink-500/30 rounded px-2 py-0.5 tracking-widest">
                      {s.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                  <p className="text-neutral-400 leading-relaxed">{s.description}</p>
                  <ul className="space-y-1.5 pt-1">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-neutral-300">
                        <span className="text-pink-400 mt-0.5">_</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-neutral-900/30 p-8 rounded-2xl border border-pink-500/10 space-y-6">
          <h3 className="text-pink-300 font-semibold text-sm tracking-widest">HOW IT WORKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Free 30-min call", desc: "Tell me what you're trying to solve. I'll tell you what I'd build and whether it's worth it." },
              { step: "02", title: "Scoped proposal", desc: "You get a clear scope, timeline, and fixed price. No surprises, no hourly billing." },
              { step: "03", title: "Built & deployed", desc: "I build it, you review it, I ship it. You own everything." },
            ].map((item) => (
              <div key={item.step} className="space-y-2">
                <span className="text-pink-500 font-bold text-2xl">{item.step}</span>
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-pink-500/20">
          <h2 className="text-2xl font-bold text-pink-200">
            Not sure what you need?
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto">
            That's what the free call is for. 30 minutes, no pitch — just an honest conversation about your business and what's actually possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-base">
            Book a free 30-min call
          </Link>
        </div>
      </div>
    </div>
  )
}

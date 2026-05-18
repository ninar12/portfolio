import React from "react"
import Link from "next/link"

const services = [
  {
    title: "Custom Brand Website",
    tag: "WEBSITES",
    description:
      "A fast, tailored site built to convert, clarify your offer, and make your business look more established. Not a template and not a bloated agency process.",
    details: ["Custom design and build", "Mobile-first, fast, and production-ready", "Landing pages, portfolios, business sites, and booking flows"],
  },
  {
    title: "AI Assistant or Chatbot",
    tag: "AI SYSTEMS",
    description:
      "A business-specific assistant trained on your content, not a generic GPT wrapper. Useful for support, onboarding, product education, lead capture, or internal knowledge access.",
    details: ["Grounded in your docs, site, and FAQs", "Tone control and guardrails built in", "Can live on your site or inside an internal workflow"],
  },
  {
    title: "Internal Tools and Automation",
    tag: "AUTOMATION",
    description:
      "I build AI-assisted workflows that remove repetitive work, reduce operational drag, and give small teams better systems without needing an internal engineering org.",
    details: ["Reporting, tagging, extraction, drafting, and workflow support", "Fits into the tools your team already uses", "Designed to be practical to maintain"],
  },
  {
    title: "Retail AI and Product Discovery",
    tag: "RETAIL AI",
    description:
      "Recommendation systems, smarter search, and product discovery flows shaped by real retail experience. This is where I bring enterprise retail thinking into smaller, sharper implementations.",
    details: [
      "Built on experience from GUESS Inc.",
      "Recommendations, upsells, cross-sells, and discovery UX",
      "Can work with Shopify, WooCommerce, or custom stacks",
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
            Custom systems for{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-200 text-transparent bg-clip-text">
              growing brands.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            I design and build websites, AI products, and internal tools for
            businesses that want sharper execution without hiring a full
            product or engineering team.
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
              { step: "02", title: "Scoped proposal", desc: "You get a clear recommendation, project scope, timeline, and fixed price. No vague retainers." },
              { step: "03", title: "Built & shipped", desc: "I design, build, and deploy the work with you. You get something usable, not just a deck or prototype." },
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
            Need clarity before you invest?
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto">
            Tell me what you are trying to build, fix, or automate. I will tell
            you what I would recommend, what I would not recommend, and what is
            worth doing first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-base">
            Start a project conversation
          </Link>
        </div>
      </div>
    </div>
  )
}

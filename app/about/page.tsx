import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About Nina Rhone — Enterprise AI Solutions Architect",
  description:
    "Nina Rhone is an MIT graduate in Computation & Cognition and AI Solutions Architect at GUESS Inc., building custom AI products, internal tools, and websites that ship.",
  path: "/about",
})

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-pink-500/40 shadow-lg shadow-pink-500/10">
              <Image
                src="/portfolio_.webp"
                alt="Nina Rhone"
                width={128}
                height={128}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-tight">
            Nina Rhone
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-100 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Enterprise AI Solutions Architect
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            I build custom AI products, internal tools, and websites that are
            meant to ship and be used.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-neutral-100 dark:bg-neutral-900/50 text-neutral-900 dark:text-white backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 shadow-lg">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I'm <span className="text-pink-400 font-semibold">Nina Rhone</span>{" "}
            — an MIT graduate in{" "}
            <span className="text-pink-400 font-semibold">
              Computation & Cognition
            </span>{" "}
            (CS + Neuroscience) and currently an AI Solutions Architect at
            GUESS Inc. My work sits between product thinking, design, and
            implementation. I have shipped client websites, built full-stack
            web apps, trained models, and integrated AI into real business
            workflows. At GUESS, I architect AI systems across enterprise
            retail workflows, translating model capability into tools teams can
            actually use. For clients, that means I can take a project from
            rough idea to working product without losing the business context.
          </p>
        </div>

        {/* Enterprise Context */}
        <div className="bg-neutral-100 dark:bg-neutral-900/30 p-6 rounded-xl border border-pink-500/20">
          <h3 className="text-pink-600 dark:text-pink-300 font-semibold text-sm mb-4">
            WHAT I BRING TO ENTERPRISE AI TEAMS
          </h3>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">_</span>
              <span>Experience shipping AI tools inside a Fortune 500 retail environment (GUESS Inc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">_</span>
              <span>MIT background in Computation & Cognition — I understand models, not just APIs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">_</span>
              <span>Track record designing for non-technical stakeholders: prompt UX, knowledge base curation, guardrail design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">_</span>
              <span>Full-stack ownership from prototype to deployed, cloud-hosted product</span>
            </li>
          </ul>
        </div>

        {/* What I Can Build */}
        <div className="space-y-4">
          <h3 className="text-pink-600 dark:text-pink-300 font-semibold text-sm">
            WHAT I CAN BUILD FOR YOU
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <h4 className="text-base font-semibold text-pink-700 dark:text-pink-200 mb-2">AI Chatbots</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Custom chatbots trained on your content — customer support bots, internal knowledge assistants, onboarding tools. Built with guardrails, tone control, and real retrieval (not just generic GPT).
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <h4 className="text-base font-semibold text-pink-700 dark:text-pink-200 mb-2">Workflow Automation with AI</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Replace repetitive manual work with AI pipelines — auto-tagging, content generation, data extraction, report drafting, and more. I design automations that fit how your team actually works.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <h4 className="text-base font-semibold text-pink-700 dark:text-pink-200 mb-2">AI-Powered Web Apps</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Full-stack products with AI baked in — search, recommendations, generation, or classification features embedded directly into the user experience.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <h4 className="text-base font-semibold text-pink-700 dark:text-pink-200 mb-2">LLM Integration & RAG Systems</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Connect your existing data and tools to large language models. I architect retrieval-augmented systems that ground AI responses in your actual documents, databases, and workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-100 dark:bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300 mb-3">
              Enterprise AI Integration
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              LLM workflow architecture, RAG systems, model fine-tuning, prompt
              engineering, and AI tooling designed for real business use cases
              and non-technical stakeholders.
            </p>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300 mb-3">
              Full Stack Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              End-to-end web apps built with Next.js, React, and modern tooling
              — designed, developed, and deployed. New builds or existing
              codebases.
            </p>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300 mb-3">
              Web Consulting
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Client-ready web presences built or refreshed to spec — new
              pages, branding, UX improvements, and platform migrations that
              actually convert.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-pink-500/20">
          <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-200">
            Let&apos;s figure out what is worth building.
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
            Tell me what you are working on and I will tell you what I would
            build, where AI is actually useful, and what would create the most
            leverage for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-base">
              Start a project conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-500/40 text-pink-600 dark:text-pink-300 font-semibold rounded-lg hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-200 transition-all text-base">
              Explore services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

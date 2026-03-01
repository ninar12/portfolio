"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-pink-500/40 shadow-lg shadow-pink-500/10">
              <Image
                src="/portfolio_.png"
                alt="Nina Rhone"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-tight">
            Nina Rhone
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-100 to-pink-500 text-transparent bg-clip-text animate-gradient">
            AI Solutions & Full Stack Development
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From a polished website to a custom AI integration — I build what
            your business actually needs.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-neutral-900/50 text-white backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 shadow-lg">
          <p className="text-lg text-neutral-300 leading-relaxed">
            I'm <span className="text-pink-400 font-semibold">Nina Rhone</span>{" "}
            — an MIT graduate in{" "}
            <span className="text-pink-400 font-semibold">
              Computation & Cognition
            </span>{" "}
            (CS + Neuroscience) and currently an AI Solutions Architect at GUESS
            Inc. I've shipped client websites, trained machine learning models,
            built full stack web apps, and integrated AI into real workflows. I
            take projects from idea to deployed product.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mt-4">
            I also built and published a structured dataset of the entire
            Aesthetics Wiki on{" "}
            <a
              href="https://huggingface.co/datasets/ninar12/aesthetics-wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline">
              Hugging Face
            </a>{" "}
            — 239+ downloads and counting.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-300 mb-3">
              AI Integration
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Custom GPTs, chatbots, LLM-powered workflows, AI-assisted tooling,
              prompt engineering, and model fine-tuning for your specific use
              case.
            </p>
          </div>
          <div className="bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-300 mb-3">
              Full Stack Development
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              End-to-end web apps built with Next.js, React, and modern tooling
              — designed, developed, and deployed. New builds or existing
              codebases.
            </p>
          </div>
          <div className="bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-semibold text-pink-300 mb-3">
              Website Design & Editing
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Wix, Squarespace, WordPress, or custom — refreshes, fixes, new
              pages, branding, and UX improvements that actually convert.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-pink-500/20">
          <h2 className="text-2xl font-bold text-pink-200">
            Ready to build something?
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto">
            Whether you need a site built from scratch, an AI feature added to
            an existing product, or just want to talk through what's possible —
            reach out.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-base">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Background Animation */}
        <style jsx global>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 4s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}

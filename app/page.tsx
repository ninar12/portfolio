"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import PixelatedImage from "./components/PixelatedImage"
import { StyleConveyorBelt } from "./components/StyleConveyerBelt"

type Category = "ALL" | "AI + ML" | "PRODUCT" | "CONSULTING" | "EXPERIMENTS"

const galleryItems = [
  // AI + ML
  {
    href: "/black-friday-ai-deal-hunter",
    src: "/blackfriday.jpeg",
    alt: "Black Friday AI Deal Hunter",
    label: "Black Friday AI Deal Hunter",
    category: "AI + ML",
  },
  {
    href: "/lora",
    src: "/lora.png",
    alt: "Black Male Hair Style Lora",
    label: "Black Male Hair Style Lora",
    category: "AI + ML",
  },
  {
    href: "/stable",
    src: "/stablediffusion.png",
    alt: "Stable Diffusion Recipe",
    label: "Stable Diffusion Recipe",
    category: "AI + ML",
  },
  {
    href: "/aesthetics-wiki",
    src: "/aesthetics-wiki.png",
    alt: "Aesthetics Wiki Dataset",
    label: "Aesthetics Wiki Dataset",
    category: "AI + ML",
  },
  {
    href: "/obscure-horror-curator",
    src: "/horror-gpt.jpeg",
    alt: "Obscure Horror Curator",
    label: "Obscure Horror Curator",
    category: "AI + ML",
  },
  {
    href: "/horror-recs",
    src: "/horror-recs.png",
    alt: "Obscure Horror Curator 2.0",
    label: "Obscure Horror Curator 2.0",
    category: "AI + ML",
  },
  {
    href: "/dbt-chatbot",
    src: "/cozebot.png",
    alt: "DBT Chatbot",
    label: "DBT Chatbot",
    category: "AI + ML",
  },
  // Product
  // {
  //   href: "/the-peoples-princess",
  //   src: "/peoples-princess.png",
  //   alt: "The People's Princess",
  //   label: "The People's Princess",
  //   category: "PRODUCT",
  // },
  {
    href: "/myplantry",
    src: "/myplantry.png",
    alt: "Plantry",
    label: "Plantry",
    category: "PRODUCT",
  },
  // Consulting
  {
    href: "/arc-capital-partners",
    src: "/arccapitalpartners.png",
    alt: "Arc Capital Partners",
    label: "Arc Capital Partners",
    category: "CONSULTING",
  },
  {
    href: "/bc",
    src: "/bc.png",
    alt: "BC Central America",
    label: "BC Central America",
    category: "CONSULTING",
  },
  {
    href: "/eastside-therapy-collective",
    src: "/muses-etc.png",
    alt: "Eastside Therapy Collective",
    label: "Eastside Therapy Collective",
    category: "CONSULTING",
  },
  {
    href: "/hilary",
    src: "/hilary.png",
    alt: "Hilary",
    label: "Hilary",
    category: "CONSULTING",
  },
  {
    href: "/jonathan",
    src: "/jonathan.png",
    alt: "Jonathan",
    label: "Jonathan",
    category: "CONSULTING",
  },
  // Experiments
  {
    href: "/in-out",
    src: "/inout.png",
    alt: "In & Out",
    label: "In & Out",
    category: "EXPERIMENTS",
  },
  // {
  //   href: "/pomodoro",
  //   src: "/pomodoro.png",
  //   alt: "Pomodoro",
  //   label: "Pomodoro",
  //   category: "EXPERIMENTS",
  // },
] as const

const categories: Category[] = [
  "ALL",
  "AI + ML",
  "PRODUCT",
  "CONSULTING",
  "EXPERIMENTS",
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("AI + ML")

  const filtered = galleryItems.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter,
  )

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">


        {/* Hero Section */}
        <div className="text-center space-y-6 py-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500/40 shadow-lg shadow-pink-500/10">
              <Image
                src="/portfolio_.png"
                alt="Nina Rhone"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            I build custom websites and{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-200 text-transparent bg-clip-text animate-gradient">
              AI products
            </span>
            <br />
            for modern brands.
          </h1>

          <p className="text-neutral-300 text-base max-w-2xl mx-auto leading-relaxed">
            I&apos;m Nina Rhone — MIT grad in Computation & Cognition and AI
            Solutions Architect at GUESS Inc., where I architect AI systems
            across enterprise retail workflows. I ship full-stack products,
            train models, and integrate AI into tools that create real business
            leverage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors text-base">
              View My AI Work
            </a>
            <a
              href="https://calendly.com/ninajr11/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-500/40 text-pink-300 font-semibold rounded-lg hover:border-pink-500 hover:text-pink-200 transition-all text-base">
              Book a Call →
            </a>
          </div>
        </div>

        {/* Gallery Label */}
        <div className="text-center" id="gallery">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-200 text-transparent bg-clip-text animate-gradient">
            WORK GALLERY
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={
                activeFilter === cat
                  ? "bg-pink-500 text-white rounded-lg px-3 py-1 text-xs font-medium transition-all"
                  : "border border-pink-500/20 text-neutral-400 rounded-lg px-3 py-1 text-xs font-medium hover:border-pink-500/40 transition-all"
              }>
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
                <div className="overflow-hidden rounded-lg">
                  <PixelatedImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Skills Section */}
        <div className="space-y-4 pt-4 border-t border-pink-500/10">
          <div className="text-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-200 text-transparent bg-clip-text animate-gradient">
              TOOLS + SKILLS
            </h2>
          </div>
          <StyleConveyorBelt />
        </div>

      </div>
    </div>
  )
}

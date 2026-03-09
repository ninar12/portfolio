"use client"
import React, { useState } from "react"
import Link from "next/link"
import PixelatedImage from "./components/PixelatedImage"

type Category = "ALL" | "AI + ML" | "PRODUCT" | "CONSULTING" | "EXPERIMENTS"

const galleryItems = [
  // AI + ML
  { href: "/black-friday-ai-deal-hunter", src: "/blackfriday.jpeg",         alt: "Black Friday AI Deal Hunter",   label: "Black Friday AI Deal Hunter",   category: "AI + ML" },
  { href: "/lora",                         src: "/lora.png",                  alt: "Black Male Hair Style Lora",    label: "Black Male Hair Style Lora",    category: "AI + ML" },
  { href: "/stable",                       src: "/stablediffusion.png",       alt: "Stable Diffusion Recipe",       label: "Stable Diffusion Recipe",       category: "AI + ML" },
  { href: "/aesthetics-wiki",              src: "/aesthetics-wiki.png",       alt: "Aesthetics Wiki Dataset",       label: "Aesthetics Wiki Dataset",       category: "AI + ML" },
  { href: "/obscure-horror-curator",       src: "/horror-gpt.jpeg",           alt: "Obscure Horror Curator",        label: "Obscure Horror Curator",        category: "AI + ML" },
  { href: "/dbt-chatbot",                  src: "/cozebot.png",               alt: "DBT Chatbot",                   label: "DBT Chatbot",                   category: "AI + ML" },
  // Product
  { href: "/the-peoples-princess",         src: "/peoples-princess.png",      alt: "The People's Princess",         label: "The People's Princess",         category: "PRODUCT" },
  // Consulting
  { href: "/arc-capital-partners",         src: "/arccapitalpartners.png",    alt: "Arc Capital Partners",          label: "Arc Capital Partners",          category: "CONSULTING" },
  { href: "/bc",                           src: "/bc.png",                    alt: "BC Central America",            label: "BC Central America",            category: "CONSULTING" },
  { href: "/eastside-therapy-collective",  src: "/muses-etc.png",             alt: "Eastside Therapy Collective",   label: "Eastside Therapy Collective",   category: "CONSULTING" },
  { href: "/hilary",                       src: "/hilary.png",                alt: "Hilary",                        label: "Hilary",                        category: "CONSULTING" },
  { href: "/jonathan",                     src: "/jonathan.png",              alt: "Jonathan",                      label: "Jonathan",                      category: "CONSULTING" },
  // Experiments
  { href: "/in-out",                       src: "/inout.png",                 alt: "In & Out",                      label: "In & Out",                      category: "EXPERIMENTS" },
  { href: "/pomodoro",                     src: "/pomodoro.png",              alt: "Pomodoro",                      label: "Pomodoro",                      category: "EXPERIMENTS" },
] as const

const categories: Category[] = ["ALL", "AI + ML", "PRODUCT", "CONSULTING", "EXPERIMENTS"]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL")

  const filtered = galleryItems.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  )

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuschia-500 to-pink-200 text-transparent bg-clip-text animate-gradient">
            WORK GALLERY
          </h1>
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

        {/* Background Animation */}
        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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

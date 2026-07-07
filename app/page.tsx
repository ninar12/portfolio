"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import PixelatedImage from "./components/PixelatedImage"
import { StyleConveyorBelt } from "./components/StyleConveyerBelt"
import { projects } from "./lib/projects"

type Category = "ALL" | "AI + ML" | "PRODUCT" | "CONSULTING" | "EXPERIMENTS"

// Peoples Princess and Pomodoro are kept out of the default gallery view (see NRH-91).
const hiddenFromGallery = new Set(["/the-peoples-princess", "/pomodoro"])
const galleryItems = projects.filter((p) => !hiddenFromGallery.has(p.href))

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
                src="/portfolio_.webp"
                alt="Nina Rhone"
                width={80}
                height={80}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
            I build custom websites and{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-200 text-transparent bg-clip-text animate-gradient">
              AI products
            </span>
            <br />
            for modern brands.
          </h1>

          <p className="text-neutral-600 dark:text-neutral-300 text-base max-w-2xl mx-auto leading-relaxed">
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-500/40 text-pink-300 font-semibold rounded-lg hover:border-pink-500 hover:text-pink-200 transition-all text-base">
              Contact Me
            </Link>
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
                  : "border border-pink-500/20 text-neutral-500 dark:text-neutral-400 rounded-lg px-3 py-1 text-xs font-medium hover:border-pink-500/40 transition-all"
              }>
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="bg-neutral-100 dark:bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
                <div className="overflow-hidden rounded-lg">
                  <PixelatedImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-pink-600 dark:text-pink-300 text-center mt-4 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
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

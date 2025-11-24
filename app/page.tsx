"use client"
import React from "react"
import Link from "next/link"
import PixelatedImage from "./components/PixelatedImage"

export default function HomePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuschia-500 to-pink-200 text-transparent bg-clip-text animate-gradient">
            WORK GALLERY
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link href="/dbt-chatbot" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/cozebot.png"
                  alt="DBT Chatbot"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                DBT Chatbot
              </p>
            </div>
          </Link>

          <Link href="/stable" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/stablediffusion.png"
                  alt="Stable Diffusion Recipe"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Stable Diffusion Recipe
              </p>
            </div>
          </Link>

          <Link href="/bc" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/bc.png"
                  alt="BC Central America"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                BC Central America
              </p>
            </div>
          </Link>

          <Link href="/arc-capital-partners" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/arccapitalpartners.png"
                  alt="Arc Capital Partners"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Arc Capital Partners
              </p>
            </div>
          </Link>

          <Link href="/hilary" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/hilary.png"
                  alt="Hilary"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Hilary
              </p>
            </div>
          </Link>

          <Link href="/in-out" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/inout.png"
                  alt="In & Out"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                In & Out
              </p>
            </div>
          </Link>

          <Link href="/pomodoro" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/pomodoro.png"
                  alt="Pomodoro"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Pomodoro
              </p>
            </div>
          </Link>

          <Link href="/the-peoples-princess" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/peoples-princess.png"
                  alt="The People's Princess"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                The People's Princess
              </p>
            </div>
          </Link>
          <Link href="/aesthetics-wiki" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/aesthetics-wiki.png"
                  alt="Aesthetics Wiki Dataset"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Aesthetics Wiki Dataset
              </p>
            </div>
          </Link>
          <Link href="/black-friday-ai-deal-hunter" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/blackfriday.jpeg"
                  alt="Black Friday AI Deal Hunter"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Black Friday AI Deal Hunter
              </p>
            </div>
          </Link>
          <Link href="/jonathan" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/jonathan.png"
                  alt="Jonathan"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Jonathan
              </p>
            </div>
          </Link>

          <Link href="/lora" className="group">
            <div className="bg-neutral-900/30 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all p-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <PixelatedImage
                  src="/lora.png"
                  alt="Black Male Hair Style Lora"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-pink-300 text-center mt-4 group-hover:text-pink-400 transition-colors">
                Black Male Hair Style Lora
              </p>
            </div>
          </Link>
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

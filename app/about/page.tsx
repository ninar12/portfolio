"use client"
import React from "react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Bring Your Ideas to Life with AI, Design & Tech
          </h1>
        </div>

        {/* Introduction */}
        <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 shadow-lg">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-neutral-50">
              Hi, I'm{" "}
              <span className="text-pink-400 font-semibold">Nina Rhone</span>—an
              MIT graduate in{" "}
              <span className="text-pink-400 font-semibold">
                Computation & Cognition
              </span>{" "}
              (CS + Neuroscience), passionate about turning ideas into reality.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-xl font-semibold text-pink-300 mb-3">
              Technical Expertise
            </h3>
            <p className="text-neutral-300">
              With experience in web and app development, I specialize in
              blending technology, AI, design, and cognitive science to create
              products that engage and inspire.
            </p>
          </div>
          <div className="bg-neutral-900/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
            <h3 className="text-xl font-semibold text-pink-300 mb-3">
              Problem-Solving Approach
            </h3>
            <p className="text-neutral-300">
              I'm a problem-solver who thinks outside the box, understands user
              behavior, and can build sleek, effective digital experiences.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20">
          <h2 className="text-2xl font-bold text-pink-200">
            Let's Collaborate!
          </h2>
          <p className="text-neutral-300">
            Ready to bring your vision to life? Let's work together to create
            something amazing.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors">
              Contact Me
            </Link>
            <a
              href="mailto:ninajr11@icloud.com"
              className="inline-flex items-center px-6 py-3 border border-pink-500 text-pink-400 font-medium rounded-lg hover:bg-pink-500/10 transition-colors">
              Email Me
            </a>
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

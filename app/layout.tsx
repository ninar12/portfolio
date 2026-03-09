"use client"

import "./global.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import Link from "next/link"
import { useState } from "react"
import Resume from "./components/resume"
import { StyleConveyorBelt } from "./components/StyleConveyerBelt"

const cx = (...classes: any) => classes.filter(Boolean).join(" ")

const aiml = [
  { name: "BLACK FRIDAY AI DEAL HUNTER", link: "/black-friday-ai-deal-hunter" },
  { name: "BLACK HAIRSTYLE LORA", link: "/lora" },
  { name: "STABLE DIFFUSION GENERATOR", link: "/stable" },
  { name: "AESTHETICS WIKI DATASET", link: "/aesthetics-wiki" },
  { name: "OBSCURE HORROR CURATOR", link: "/obscure-horror-curator" },
  { name: "DBT CHATBOT", link: "/dbt-chatbot" },
]

const product = [
  { name: "THE PEOPLE'S PRINCESS", link: "/the-peoples-princess" },
]

const consulting = [
  { name: "ARC CAPITAL PARTNERS", link: "/arc-capital-partners" },
  { name: "BC GROUP", link: "/bc" },
  { name: "EASTSIDE THERAPY COLLECTIVE", link: "/eastside-therapy-collective" },
  { name: "HILARY MACGREGOR", link: "/hilary" },
  { name: "JONATHAN FERNANDEZ", link: "/jonathan" },
]

const experiments = [
  { name: "IN & OUT GENERATOR", link: "/in-out" },
  { name: "POMODORO TIMER", link: "/pomodoro" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isResumeVisible, setIsResumeVisible] = useState(true)
  const [isToolVisible, setIsToolVisible] = useState(false)

  return (
    <html
      lang="en"
      className={cx(
        "text-black text-xs bg-white",
        GeistSans.variable,
        GeistMono.variable,
      )}>
      <body className="antialiased h-full">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <div className="flex-1 flex">
            {/* Sidebar Toggle Button - Mobile */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="fixed bottom-4 right-4 z-50 md:hidden bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Sidebar */}
            <aside
              className={`${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } fixed inset-y-0 left-0 z-1 w-64 bg-neutral-900 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}>
              <div className="p-4 pt-12">
                <div className="mb-8">
                  <h1 className="font-semibold text-2xl text-pink-400">
                    NINA RHONE
                  </h1>
                  <p className="text-sm text-neutral-300 mt-1">
                    AI SOLUTIONS ARCHITECT
                  </p>
                  <p className="text-xs mt-2 text-neutral-400">MIT 2023 GRAD</p>
                  <p className="text-xs text-neutral-400">
                    AI SOLUTIONS ARCHITECT @ GUESS INC.
                  </p>
                </div>

                {/* AI + ML */}
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-pink-300 mb-2">
                    AI + ML
                  </h2>
                  <div className="space-y-2">
                    {aiml.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-sm text-neutral-400 hover:text-pink-400 transition-colors">
                        _{item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Product */}
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-pink-300 mb-2">
                    PRODUCT
                  </h2>
                  <div className="space-y-2">
                    {product.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-sm text-neutral-400 hover:text-pink-400 transition-colors">
                        _{item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Consulting */}
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-pink-300 mb-2">
                    CONSULTING
                  </h2>
                  <div className="space-y-2">
                    {consulting.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-sm text-neutral-400 hover:text-pink-400 transition-colors">
                        _{item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Experiments */}
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-pink-300 mb-2">
                    EXPERIMENTS
                  </h2>
                  <div className="space-y-2">
                    {experiments.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-sm text-neutral-500 hover:text-pink-400 transition-colors">
                        _{item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resume */}
                <div className="mb-4 mt-12">
                  <h2
                    className="font-semibold mb-2 text-sm text-pink-300 cursor-pointer"
                    onClick={() => setIsResumeVisible(!isResumeVisible)}>
                    RESUME {isResumeVisible ? "-" : "+"}
                  </h2>
                  {isResumeVisible && <Resume />}
                </div>

                {/* Tools + Skills */}
                <div>
                  <h2
                    className="font-semibold mb-2 text-sm text-pink-300 cursor-pointer"
                    onClick={() => setIsToolVisible(!isToolVisible)}>
                    TOOLS + SKILLS {isToolVisible ? "-" : "+"}
                  </h2>
                  {isToolVisible && <StyleConveyorBelt />}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-6 py-6 md:px-10 md:py-8">{children}</main>
          </div>

          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

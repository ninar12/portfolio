"use client"

import "./global.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Resume from "./components/resume"
import StyleConveyorBelt from "./components/styleconveyorbelt"

const cx = (...classes: any) => classes.filter(Boolean).join(" ")

const work = [
  { name: "STABLE DIFFUSION GENERATOR", link: "/stable" },
  { name: "BLACK HAIRSTYLE LORA", link: "/lora" },
  { name: "WELCOME SITE FOR BC GROUP", link: "/bc" },
  { name: "PERSONAL WEBSITE FOR HILARY", link: "/hilary" },
  { name: "PERSONAL WEBSITE FOR JONATHAN", link: "/jonathan" },
]

const personal = [
  { name: "DBT CHATBOT", link: "/dbt-chatbot" },
  { name: "IN & OUT GENERATOR", link: "/in-out" },
  { name: "POMODORO TIMER", link: "/pomodoro" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)
  const [isResumeVisible, setIsResumeVisible] = useState(true)
  const [isToolVisible, setIsToolVisible] = useState(false)

  return (
    <html
      lang="en"
      className={cx(
        "text-black text-xs bg-white",
        GeistSans.variable,
        GeistMono.variable
      )}>
      <body className="antialiased h-full">
        <main
          className={`flex min-h-screen ${
            isSidebarVisible ? "grid-cols-5" : "grid-cols-1"
          } grid`}>
          {isSidebarVisible && (
            <section className="col-span-2 md:col-span-1 lg:col-span-1 bg-neutral-900 sm:w-full text-white h-full">
              <Navbar />
              <section className="p-4">
                <div className="mb-8">
                  <h1 className="font-semibold mt-8 text-2xl">NINA RHONE</h1>
                  <p className="text-sm ">
                    CREATIVE TECHNOLOGIST. MIT 2023 GRAD.
                  </p>
                  <p className="text-xs mt-2 text-neutral-300">
                    CURRENTLY: DATA ANALYST @ GUESS INC.
                  </p>
                  <a
                    href="mailto:ninajr11@icloud.com"
                    className="text-neutral-300 text-xs hover:text-neutral-400">
                    💌 ninajr11@icloud.com
                  </a>
                </div>

                {/* Commission Projects */}
                <div className="mb-4 mt-16">
                  <h2 className="font-semibold text-sm mb-2">
                    COMMISSION PROJECTS
                  </h2>
                  <ul>
                    {work.map((item, index) => (
                      <li key={index} className="mb-1">
                        <Link
                          href={item.link}
                          className="text-sm hover:text-pink-50 hover:bg-pink-700">
                          {" "}
                          _{item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Personal Projects */}
                <div className="mb-4 mt-8">
                  <h2 className="font-semibold text-sm mb-2">
                    PERSONAL PROJECTS
                  </h2>
                  <ul>
                    {personal.map((item, index) => (
                      <li key={index} className="mb-1">
                        <Link
                          href={item.link}
                          className="text-sm hover:text-pink-50 hover:bg-pink-700">
                          _{item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resume */}
                <div className="mb-4 mt-12">
                  <h2
                    className="font-semibold mb-2 text-sm cursor-pointer"
                    onClick={() => setIsResumeVisible(!isResumeVisible)}>
                    RESUME {isResumeVisible ? "-" : "+"}
                  </h2>
                  {isResumeVisible && <Resume />}
                </div>

                {/* Tools + Skills */}
                <div>
                  <h2
                    className="font-semibold mb-2 text-sm cursor-pointer"
                    onClick={() => setIsToolVisible(!isToolVisible)}>
                    TOOLS + SKILLS {isToolVisible ? "-" : "+"}
                  </h2>
                  {isToolVisible && <StyleConveyorBelt />}
                </div>
              </section>
            </section>
          )}

          {/* Main Content */}
          <section
            className={
              isSidebarVisible
                ? `col-span-3 md:col-span-4 p-4 pt-8 flex justify-center min-h-screen`
                : `flex justify-center p-4 pt-8 min-h-screen`
            }>
            <button
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="absolute right-4 top-4 text-sm text-gray-400">
              {isSidebarVisible ? "←" : "→"}
            </button>
            <div className="w-full max-w-3xl">{children}</div>
          </section>
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

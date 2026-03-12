"use client"
import { useState } from "react"
import MermaidDiagram from "./MermaidDiagram"
import DemoEmbed from "./DemoEmbed"

export function Card({ children }) {
  return (
    <div className="overflow-hidden bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-opacity-10 backdrop-filter backdrop-blur-lg border border-neutral-700">
      {children}
    </div>
  )
}

export function CardContent({ children }) {
  return <div className="p-4 flex flex-col gap-3">{children}</div>
}

const chipBackgrounds: Record<string, string> = {
  framework: "bg-pink-400 border border-pink-500",
  language: "bg-pink-600 border border-pink-700",
  library: "bg-pink-200 border border-pink-300",
  skill: "bg-fuchsia-300 border border-fuchsia-400",
  tool: "bg-purple-300 border border-purple-400",
  other: "bg-purple-500 border border-purple-600",
  API: "bg-purple-300 border border-purple-400",
  hosting: "bg-pink-500 border border-pink-600",
}

const statusStyles: Record<string, { dot: string; label: string }> = {
  live: { dot: "bg-green-400", label: "Live" },
  "in progress": { dot: "bg-yellow-400", label: "In Progress" },
  archived: { dot: "bg-neutral-500", label: "Archived" },
}

export default function ProjectCard({
  title,
  year,
  description,
  subtitle,
  techStack,
  link,
  image,
  githubLink,
  problem,
  solution,
  impact,
  diagram,
  status,
}: {
  title: string
  year?: string
  description: string
  subtitle?: string
  techStack: { type: string; name: string }[]
  skills?: string
  link?: string
  image?: string
  githubLink?: string
  problem?: string
  solution?: string
  impact?: string
  diagram?: string
  status?: "live" | "in progress" | "archived"
}) {
  const [descOpen, setDescOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const statusConfig = status ? statusStyles[status] : null

  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-50 bg-neutral-950 overflow-y-auto px-8 py-8"
          : "max-w-7xl mx-auto text-white py-6 px-2"
      }>
      {/* Fullscreen toggle */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setFullscreen(!fullscreen)}
          className="text-xs text-neutral-500 hover:text-pink-400 transition-colors flex items-center gap-1">
          {fullscreen ? (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 9V4.5M9 9H4.5M15 9h4.5M15 9V4.5M9 15v4.5M9 15H4.5M15 15h4.5M15 15v4.5"
                />
              </svg>{" "}
              exit fullscreen
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>{" "}
              fullscreen
            </>
          )}
        </button>
      </div>

      {/* Title */}
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h3 className="text-3xl font-bold">{title}</h3>
          {statusConfig && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} animate-pulse`}
              />
              {statusConfig.label}
            </span>
          )}
        </div>
        {subtitle && <p className="text-base text-neutral-400">{subtitle}</p>}
        <div className="flex items-center justify-center gap-3 mt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline">
              Project Link ↗
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline">
              Github ↗
            </a>
          )}
          {year && <span className="text-neutral-500 text-sm">{year}</span>}
        </div>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* LEFT — sticky demo */}
        {(link || image) && (
          <div className="w-full lg:w-[45%] lg:sticky lg:top-10 flex flex-col">
            <DemoEmbed url={link} fallbackImage={image} />
          </div>
        )}

        {/* RIGHT — info */}
        <div className="w-full lg:w-[55%] flex flex-col gap-8">
          {problem && (
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                The Problem
              </p>
              <p className="text-neutral-200 text-sm leading-relaxed">
                {problem}
              </p>
            </div>
          )}

          {solution && (
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                The Solution
              </p>
              <p className="text-neutral-200 text-sm leading-relaxed">
                {solution}
              </p>
            </div>
          )}

          {diagram && (
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                Architecture / Flow
              </p>
              <MermaidDiagram chart={diagram} />
            </div>
          )}

          {/* Impact — always visible */}
          {impact && (
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                Impact
              </p>
              <p className="text-pink-300 text-sm leading-relaxed">{impact}</p>
            </div>
          )}

          {/* Tech chips — always visible */}
          {techStack?.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`${chipBackgrounds[tech.type] || "bg-fuchsia-300"} text-gray-800 text-xs font-medium px-2 py-1 rounded-lg`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Collapsible — description only */}
          {description && (
            <div className="border border-neutral-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setDescOpen(!descOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-neutral-800 hover:bg-neutral-700/80 transition-colors text-sm text-neutral-300">
                <span className="font-medium">Full Description</span>
                <span className="text-neutral-500 text-base leading-none">
                  {descOpen ? "−" : "+"}
                </span>
              </button>
              {descOpen && (
                <div className="px-4 py-4 bg-neutral-900/50">
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

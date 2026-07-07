"use client"
import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MermaidDiagram from "./MermaidDiagram"
import DemoEmbed from "./DemoEmbed"
import { projects } from "../lib/projects"

export function Card({ children }) {
  return (
    <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-opacity-10 backdrop-filter backdrop-blur-lg border border-neutral-300 dark:border-neutral-700">
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
  video,
  githubLink,
  problem,
  solution,
  diagram,
  status,
  children,
}: {
  title: string
  year?: string
  description: string
  subtitle?: string
  techStack: { type: string; name: string }[]
  skills?: string
  link?: string
  image?: string
  video?: string
  githubLink?: string
  problem?: string
  solution?: string
  diagram?: string
  status?: "live" | "in progress" | "archived"
  children?: ReactNode
}) {
  const [descOpen, setDescOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const statusConfig = status ? statusStyles[status] : null

  const pathname = usePathname()
  const currentProject = projects.find((p) => p.href === pathname)
  const relatedProjects = currentProject
    ? projects
        .filter(
          (p) => p.category === currentProject.category && p.href !== pathname,
        )
        .slice(0, 3)
    : []

  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-50 bg-white dark:bg-neutral-950 overflow-y-auto px-8 py-8"
          : "max-w-7xl mx-auto text-neutral-900 dark:text-white py-6 px-4 sm:px-6"
      }>
      {/* Back link + fullscreen toggle */}
      <div className="flex justify-between items-center mb-2">
        <Link
          href="/"
          className="text-xs text-neutral-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
          ← Portfolio
        </Link>
        <button
          onClick={() => setFullscreen(!fullscreen)}
          className="text-xs text-neutral-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors flex items-center gap-1">
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
          <h1 className="text-4xl text-pink-600 dark:text-pink-200">{title}</h1>
          {statusConfig && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs text-neutral-600 dark:text-neutral-300 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} animate-pulse`}
              />
              {statusConfig.label}
            </span>
          )}
        </div>
        {subtitle && <p className="text-base text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
        <div className="flex items-center justify-center gap-3 mt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 text-sm hover:underline">
              Project Link ↗
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 text-sm hover:underline">
              Github ↗
            </a>
          )}
          {year && <span className="text-neutral-500 text-sm">{year}</span>}
        </div>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* LEFT — sticky demo */}
        {(link || image) && (
          <div className="w-full lg:w-[45%] lg:sticky lg:top-10 flex flex-col">
            <DemoEmbed url={link} fallbackImage={image} fallbackVideo={video} alt={title} />
          </div>
        )}

        {/* RIGHT — info */}
        <div className="w-full lg:w-[55%] flex flex-col gap-8">
          {problem && (
            <div>
              <h2 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                The Problem
              </h2>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
                {problem}
              </p>
            </div>
          )}

          {solution && (
            <div>
              <h2 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                The Solution
              </h2>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
                {solution}
              </p>
            </div>
          )}

          {/* Tech chips — always visible */}
          {techStack?.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Tools
              </h2>
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
            <div className="border border-neutral-300 dark:border-neutral-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setDescOpen(!descOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700/80 transition-colors text-sm text-neutral-700 dark:text-neutral-300">
                <span className="font-medium">Full Description</span>
                <span className="text-neutral-500 text-base leading-none">
                  {descOpen ? "−" : "+"}
                </span>
              </button>
              {descOpen && (
                <div className="px-4 py-4 bg-neutral-50 dark:bg-neutral-900/50">
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {children && <div className="mt-12">{children}</div>}

      {/* Full-width diagram at bottom */}
      {diagram && (
        <div className="mt-12">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            Architecture / Flow
          </h2>
          <div className="relative rounded-2xl overflow-hidden border border-pink-500/30 bg-neutral-50 dark:bg-neutral-950/80 p-6">
            {/* subtle gradient glow behind the diagram */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
            <MermaidDiagram chart={diagram} large />
          </div>
        </div>
      )}

      {/* Related projects — internal links for discovery + SEO */}
      {relatedProjects.length > 0 && !fullscreen && (
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            More {currentProject?.category} Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProjects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block text-center px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm hover:border-pink-500/40 hover:text-pink-500 dark:hover:text-pink-300 transition-all">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

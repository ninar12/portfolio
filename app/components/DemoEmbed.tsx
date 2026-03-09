"use client"
import { useState, useEffect } from "react"
import PixelatedImage from "./PixelatedImage"

export default function DemoEmbed({
  url,
  fallbackImage,
}: {
  url: string
  fallbackImage?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  // Auto-fallback if iframe hasn't loaded after 4s (catches X-Frame-Options blocks)
  useEffect(() => {
    if (!url) return
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [loaded, url])

  if (!url && !fallbackImage) return null

  if (!url) {
    return fallbackImage ? (
      <div className="rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 p-6">
        <PixelatedImage src={fallbackImage} className="w-full rounded-xl" />
      </div>
    ) : null
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/50 h-full flex flex-col">
      {/* Browser chrome */}
      <div className="bg-neutral-800 px-4 py-2.5 flex items-center gap-3 border-b border-neutral-700">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-neutral-900 rounded-md px-3 py-1 text-xs text-neutral-400 truncate min-w-0">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs text-neutral-400 hover:text-pink-400 transition-colors">
          ↗ open
        </a>
      </div>

      {failed ? (
        fallbackImage ? (
          <div className="bg-neutral-950 p-6">
            <PixelatedImage src={fallbackImage} className="w-full rounded-xl" />
            <div className="mt-4 flex justify-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors">
                View Live Demo ↗
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-950 h-48 flex flex-col items-center justify-center gap-4">
            <p className="text-neutral-500 text-sm">This site can't be embedded.</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors">
              View Live Demo ↗
            </a>
          </div>
        )
      ) : (
        <div className="relative bg-neutral-950 flex-1 min-h-[300px]">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-neutral-600 text-sm animate-pulse">Loading demo…</span>
            </div>
          )}
          <iframe
            src={url}
            className="w-full h-full"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      )}
    </div>
  )
}

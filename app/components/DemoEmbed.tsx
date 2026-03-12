"use client"
import { useState } from "react"
import PixelatedImage from "./PixelatedImage"

export default function DemoEmbed({
  url,
  fallbackImage,
}: {
  url?: string
  fallbackImage?: string
}) {
  const [failed, setFailed] = useState(false)

  if (!url && !fallbackImage) return null

  const browserChrome = url ? (
    <div className="bg-neutral-800 px-4 py-2.5 flex items-center gap-3 border-b border-neutral-700 shrink-0">
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
  ) : null

  const imageFallback = fallbackImage ? (
    <div className="bg-neutral-950 p-6 flex flex-col gap-4">
      <PixelatedImage src={fallbackImage} className="w-full rounded-xl" />
      {url && (
        <div className="flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors">
            View Live Demo ↗
          </a>
        </div>
      )}
    </div>
  ) : (
    <div className="bg-neutral-950 h-48 flex flex-col items-center justify-center gap-4">
      <p className="text-neutral-500 text-sm">This site can&apos;t be embedded.</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors">
        View Live Demo ↗
      </a>
    </div>
  )

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/50 flex flex-col h-full">
      {browserChrome}
      {!url || failed ? (
        imageFallback
      ) : (
        <div className="relative bg-neutral-950 flex-1 min-h-[400px]">
          <iframe
            src={url}
            className="absolute inset-0 w-full h-full"
            onError={() => setFailed(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      )}
    </div>
  )
}

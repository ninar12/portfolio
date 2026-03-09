"use client"
import React, { useState, useEffect, useRef } from "react"
import NextImage from "next/image"

interface PixelatedImageProps {
  src: string
  alt?: string
  className?: string
  priority?: boolean
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt = "",
  className = "",
  priority = false,
}) => {
  const normalizedSrc = src.startsWith("/") || src.startsWith("http") ? src : `/${src}`

  const [isLoaded, setIsLoaded] = useState(false)
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const startLoad = () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d")
      if (!canvas || !ctx) return

      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = src
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        setDimensions({ width: img.width, height: img.height })

        const drawPixelated = (pixelSize: number) => {
          ctx.drawImage(img, 0, 0, pixelSize, pixelSize)
          ctx.imageSmoothingEnabled = false
          ctx.drawImage(canvas, 0, 0, pixelSize, pixelSize, 0, 0, canvas.width, canvas.height)
        }

        const pixelSizes = [10, 20, 40, 80]
        const interval = 2000 / pixelSizes.length

        pixelSizes.forEach((size, index) => {
          setTimeout(() => drawPixelated(size), index * interval)
        })

        setTimeout(() => setIsLoaded(true), 2000)
      }

      imageRef.current = img
    }

    if (priority) {
      startLoad()
      return () => {
        if (imageRef.current) imageRef.current.onload = null
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        startLoad()
      },
      { rootMargin: "200px" }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      if (imageRef.current) imageRef.current.onload = null
    }
  }, [src, priority])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full transition-opacity duration-500"
        style={{ opacity: isLoaded ? 0 : 1 }}
      />
      {dimensions && (
        <NextImage
          src={normalizedSrc}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full absolute inset-0 transition-opacity duration-500"
          style={{ opacity: isLoaded ? 1 : 0 }}
          priority={priority}
        />
      )}
    </div>
  )
}

export default PixelatedImage

"use client"
import React, { useState, useEffect, useRef } from "react"

interface PixelatedImageProps {
  src: string
  alt?: string
  className?: string
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt = "",
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const img = new Image()
    img.src = src
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width
      canvas.height = img.height

      // Function to draw pixelated version
      const drawPixelated = (pixelSize: number) => {
        ctx.drawImage(img, 0, 0, pixelSize, pixelSize)
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(
          canvas,
          0,
          0,
          pixelSize,
          pixelSize,
          0,
          0,
          canvas.width,
          canvas.height
        )
      }

      // Progressive pixelation
      const pixelSizes = [10, 20, 40, 80]
      const interval = 2000 / pixelSizes.length // 2000ms total duration

      pixelSizes.forEach((size, index) => {
        setTimeout(() => {
          drawPixelated(size)
        }, index * interval)
      })

      // After all pixelation steps, show original image
      setTimeout(() => {
        setIsLoaded(true)
      }, 2000)
    }

    imageRef.current = img

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null
      }
    }
  }, [src])

  return (
    <div className={`relative ${className}`}>
      {!isLoaded ? (
        <canvas ref={canvasRef} className="w-full h-full" />
      ) : (
        <img src={src} alt={alt} className="w-full h-full" />
      )}
    </div>
  )
}

export default PixelatedImage

import React from "react"
import Link from "next/link"
import PixelatedImage from "../components/PixelatedImage"

export default function HomePage() {
  return (
    <div className="home-page mt-16 text-white">
      <h1 className="text-3xl text-center pb-5 text-white font-normal">
        WORK GALLERY
      </h1>
      <div className="grid grid-cols-2 text-xs text-rose-400 gap-5 md:grid-cols-4">
        <div className="gallery-item hover:bg-purple-600 text-center">
          <Link href="/dbt-chatbot">
            <PixelatedImage src="/cozebot.png" alt="DBT Chatbot" />
            <p>DBT Chatbot</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-lime-600 text-center">
          <Link href="/stable">
            <PixelatedImage
              src="/stablediffusion.png"
              alt="Stable Diffusion Recipe"
            />
            <p>Stable Diffusion Recipe</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-neutral-600 text-center">
          <Link href="/bc">
            <PixelatedImage src="/bc.png" alt="BC Central America" />
            <p>BC Central America</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-amber-200 text-center">
          <Link href="/hilary">
            <PixelatedImage src="/hilary.png" alt="Hilary" />
            <p>Hilary</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-violet-400 text-center">
          <Link href="/in-out">
            <PixelatedImage src="/inout.png" alt="In & Out" />
            <p>In & Out</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-rose-200 text-center">
          <Link href="/pomodoro">
            <PixelatedImage src="/pomodoro.png" alt="Pomodoro" />
            <p>Pomodoro</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-amber-400 text-center">
          <Link href="/jonathan">
            <PixelatedImage src="/jonathan.png" alt="Jonathan" />
            <p>Jonathan</p>
          </Link>
        </div>
        <div className="gallery-item hover:bg-emerald-200 text-center">
          <Link href="/lora">
            <PixelatedImage src="/lora.png" alt="Black Male Hair Style Lora" />
            <p>Black Male Hair Style Lora</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

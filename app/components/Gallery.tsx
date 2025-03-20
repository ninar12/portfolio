"use client"
import React, { useEffect, useState } from "react"
import GalleryItem from "./GalleryItem" // Assuming you have a GalleryItem component
import OpenAI from "openai"

declare global {
  interface Window {
    CozeWebSDK: any
  }
}

const Gallery = ({ title, date, description, tools, link }) => {
  const [galleryItems, setGalleryItems] = useState<
    { image: string | undefined }[]
  >([])
  useEffect(() => {
    // Load the Coze Web Chat Client script
    const script = document.createElement("script")
    script.src =
      "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/oversea/index.js"
    script.async = true
    script.onload = () => {
      // Initialize the Coze Web Chat Client
      if (window.CozeWebSDK) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: "7359282529574060037",
          },
          componentProps: {
            title: "Coze",
          },
        })
      }
    }
    document.body.appendChild(script)

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="text-white bg-green-900 width-[100%] h-full px-20 p-10">
      <div>
        <ul className="width-[50%] grid grid-cols-2 mb-4">
          <h1 className="">{title}</h1>

          <a href={link} className="text-white">
            link
          </a>
        </ul>
        <video
          src="/assets/cozebot.mp4"
          className="my-4 w-[100%] p-4"
          autoPlay
          loop
          muted
          controls
        />
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2  mb-5">
          <p className="opacity-50">Description</p>
          <p>
            {description}
            {/* DBT Skills Chatbot I created a chatbot to help users brainstorm and
            apply Dialectical Behavior Therapy (DBT) skills, focusing on
            mindfulness, emotional regulation, and interpersonal effectiveness.
            It offers tailored suggestions, affirmations, mental health
            diagrams, and PubMed article search. While not a substitute for
            professional care, it’s designed to make DBT strategies more
            accessible for everyday challenges. */}
          </p>
        </div>
        <div className="grid gap-2">
          <p className="opacity-50">Tools used</p>
          <p>
            <p>{tools}</p>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Gallery

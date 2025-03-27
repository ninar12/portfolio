import React from "react"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-lg text-neutral-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <ContactForm />
        <div className="mt-12 text-center text-neutral-400">
          <p>You can also reach me directly at:</p>
          <a
            href="mailto:ninajr11@icloud.com"
            className="text-blue-400 hover:text-blue-300">
            ninajr11@icloud.com
          </a>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"

const placeholders = [
  "I have an idea for... a cool website",
  "I want to fix... my business's website",
  "I need help with... a creative project",
  "I need help with... a personal ai bot",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length
      setCurrentPlaceholder(placeholders[index])
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send message. Try again later.")
      }
    } catch (error) {
      setStatus("Something went wrong. Try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen  text-white">
      <section className="mx-auto bg-neutral-800 w-xl rounded-xl p-8">
        <h1 className="text-3xl text-center text-white mb-6">CONTACT ME</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-white ">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder={currentPlaceholder}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-500 cursor-pointer text-white rounded-lg px-4 py-2 hover:bg-pink-700  transition">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-sm ${
              status.startsWith("Message") ? "text-green-500" : "text-red-500"
            }`}>
            {status}
          </p>
        )}
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import ContactForm from "../components/ContactForm"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Contact — Start a Project Conversation",
  description:
    "Tell Nina Rhone what you are building, what is not working, or where AI could help. Get a clear recommendation for your next AI product or web project.",
  path: "/contact",
})

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Start a Project Conversation</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Tell me what you are building, what is not working, or where you
            think AI could help. I&apos;ll follow up with a clear recommendation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm">
            <a
              href="mailto:ninajr11@icloud.com"
              className="text-pink-600 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium">
              ninajr11@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/nina-rhone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              LinkedIn
            </a>
            <a
              href="https://github.com/ninar12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

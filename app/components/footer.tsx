import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm justify-center space-x-6">
          <a
            href="https://linkedin.com/in/ninarhone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a
            href="https://twitter.com/ninarhone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors">
            Twitter
          </a>
          <a
            href="https://github.com/ninar12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400  transition-colors">
            GitHub
          </a>
          <a
            href="mailto:ninajr11@icloud.com"
            className="hover:text-blue-400 transition-colors">
            Email
          </a>
        </div>
        <p className="text-center text-neutral-400 text-sm">
          © 2025 NJR Solutions
        </p>
      </div>
    </footer>
  )
}

export default Footer

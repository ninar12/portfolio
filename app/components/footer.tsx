import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-sm text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/nina-rhone-8535081bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors">
            linkedin
          </a>

          <a
            href="https://github.com/ninar12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors">
            github
          </a>
          <a
            href="mailto:ninajr11@icloud.com"
            className="hover:text-pink-400 transition-colors">
            email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

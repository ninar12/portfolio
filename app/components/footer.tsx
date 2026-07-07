import React from "react"

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white py-4" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex items-center text-sm justify-center space-x-6" },
        React.createElement(
          "a",
          {
            href: "https://www.linkedin.com/in/nina-rhone/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          },
          "LinkedIn",
        ),
        React.createElement(
          "a",
          {
            href: "https://twitter.com/ninar2424",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          },
          "Twitter",
        ),
        React.createElement(
          "a",
          {
            href: "https://github.com/ninar12",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          },
          "GitHub",
        ),
        React.createElement(
          "a",
          {
            href: "https://huggingface.co/ninar12",
            className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          },
          "Huggingface",
        ),
      ),
      React.createElement(
        "p",
        { className: "text-center text-neutral-500 dark:text-neutral-400 text-sm" },
        "© 2026 NJR Solutions",
      ),
    ),
  )
}

export default Footer

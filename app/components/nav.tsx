"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = {
  "/": {
    name: "HOME",
  },
  "/services": {
    name: "SERVICES",
  },
  "/about": {
    name: "ABOUT",
  },
  "/resume": {
    name: "RESUME",
  },
  "/contact": {
    name: "CONTACT",
  },
}

export function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <aside className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 pb-0.5 p-0.5 z-20 tracking-tight print:hidden">
      <div className="lg:sticky xl:top-20">
        <nav
          className="flex text-xs flex-row items-center justify-between font-semibold relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-xs hover:text-pink-500 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2">
                  {name}
                </Link>
              )
            })}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="text-xs border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-pink-500 dark:hover:border-pink-400 px-3 py-1 rounded font-semibold transition-colors shrink-0 mx-2">
            {isDark ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </aside>
  )
}

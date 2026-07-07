"use client"
import { useEffect, useRef } from "react"

const darkVars = {
  primaryColor: "#1a1a1a",
  primaryTextColor: "#e5e5e5",
  primaryBorderColor: "#ec489950",
  lineColor: "#a855f7",
  secondaryColor: "#171717",
  tertiaryColor: "#111",
  background: "#0a0a0a",
  mainBkg: "#1a1a1a",
  nodeBorder: "#ec489960",
  edgeLabelBackground: "#111",
  fontFamily: "inherit",
}

const lightVars = {
  primaryColor: "#f5f5f5",
  primaryTextColor: "#171717",
  primaryBorderColor: "#ec489970",
  lineColor: "#a855f7",
  secondaryColor: "#fafafa",
  tertiaryColor: "#f5f5f5",
  background: "#ffffff",
  mainBkg: "#f5f5f5",
  nodeBorder: "#ec489980",
  edgeLabelBackground: "#ffffff",
  fontFamily: "inherit",
}

export default function MermaidDiagram({ chart, large }: { chart: string; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      const m = await import("mermaid")
      const isDark = document.documentElement.classList.contains("dark")
      m.default.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "base",
        themeVariables: {
          ...(isDark ? darkVars : lightVars),
          fontSize: large ? "16px" : "13px",
        },
      })

      if (cancelled || !ref.current) return
      ref.current.innerHTML = ""
      const id = `mermaid-${Math.random().toString(36).slice(2)}`
      const { svg } = await m.default.render(id, chart)
      if (!cancelled && ref.current) ref.current.innerHTML = svg
    }

    render()

    const observer = new MutationObserver(() => render())
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [chart, large])

  return <div ref={ref} className={large ? "w-full [&_svg]:w-full [&_svg]:max-w-none [&_svg]:h-auto" : "w-full"} />
}

"use client"
import { useEffect, useRef } from "react"

export default function MermaidDiagram({ chart, large }: { chart: string; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("mermaid").then((m) => {
      m.default.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
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
          fontSize: large ? "16px" : "13px",
        },
      })

      if (ref.current) {
        ref.current.innerHTML = ""
        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        m.default.render(id, chart).then(({ svg }) => {
          if (ref.current) ref.current.innerHTML = svg
        })
      }
    })
  }, [chart])

  return <div ref={ref} className={large ? "w-full [&_svg]:w-full [&_svg]:max-w-none [&_svg]:h-auto" : "w-full"} />
}

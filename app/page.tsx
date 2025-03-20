"use client"
import { useState, useEffect } from "react"
import StyleConveyorBelt from "./components/styleconveyorbelt"
import Resume from "./components/resume"
function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}
const work = [
  { name: "STABLE DIFFUSION GENERATOR", link: "/pb" },
  {
    name: "BLACK HAIRSTYLE LORA",
    link: "/lora",
  },
  { name: "WELCOME SITE FOR BC GROUP", link: "/bc" },
  {
    name: "PERSONAL WEBSITE FOR HILARY",
    link: "/hilary",
  },
  {
    name: "PERSONAL WEBSITE FOR JONATHAN",
    link: "/jonathan",
  },
]
const personal = [
  { name: "DBT CHATBOT", link: "/dbt" },
  { name: "IN & OUT GENERATOR", link: "/in-out" },
  { name: "POMODORO TIMER", link: "/pomodoro" },
]
export default function Page() {
  const [mouseY, setMouseY] = useState(0)
  const [highlightD, setHighlightD] = useState(false)
  const [highlightF, setHighlightF] = useState(false)
  const [highlightA, setHighlightA] = useState(false)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  function onClick(e: MouseEvent) {
    e.preventDefault()
    console.log("clicked")
  }

  return <section className="max-w-72 text-lg"></section>
}

import React, { useState, useRef, useEffect } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}>
      {props.children}
    </div>
  )
}

export default FadeInSection

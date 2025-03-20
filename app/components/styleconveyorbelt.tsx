import React from "react"

const skills = [
  "🔧 git",
  "🔧 node",
  "🔧 typescript",
  "🔧 vercel",
  "🔧 next.js",
  "🔧 css",
  "🔧 tailwind",
  "🔧 wordpress",
  "🔧 ui/ux",
  "🔧 HTML",
  "🔧 squarespace",
  "🔧 adobe photoshop",
  "🔧 react",
  "🔧 react native",
  "🔧 tensorflow",
  "🔧 scikit-learn",
  "🔧 SQL",
  "🔧 figma",
  "✏️ fullstack eng",
  "✏️ drawing",
  "✏️ data analysis",
  "✏️ data visualization",
  "✏️ machine learning",
  "✏️ drawing",
  "✏️ ui/ux design",
  "🥛 talking",
]

const StyleConveyorBelt = () => {
  return (
    <div className="overflow-scroll max-h-32">
      {skills.map((skill, index) => (
        <p key={index} className={`index-${index}`}>
          {skill}
        </p>
      ))}
    </div>
  )
}

export default StyleConveyorBelt

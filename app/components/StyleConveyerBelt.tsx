"use client"
import { motion } from "framer-motion"

const tools = [
  { name: "html", link: "https://www.w3schools.com/html/" },
  { name: "css", link: "https://www.w3schools.com/css/" },
  { name: "javaScript", link: "https://www.w3schools.com/js/" },
  { name: "typeScript", link: "https://www.typescriptlang.org/" },
  { name: "react", link: "https://react.dev/" },
  { name: "next.js", link: "https://nextjs.org/" },
  { name: "node.js", link: "https://nodejs.org/" },
  { name: "python", link: "https://www.python.org/" },
  { name: "sql", link: "https://www.sql.org/" },
  { name: "git", link: "https://git-scm.com/" },
  { name: "figma", link: "https://www.figma.com/" },
  { name: "wordpress", link: "https://wordpress.org/" },
  { name: "wix", link: "https://www.wix.com/" },
  { name: "sqaurespace", link: "https://www.squarespace.com/" },
  { name: "vercel", link: "https://vercel.com/" },
  { name: "pandas", link: "https://pandas.pydata.org/" },
  { name: "numpy", link: "https://numpy.org/" },
  { name: "plotly", link: "https://plotly.com/" },
  { name: "huggingface", link: "https://huggingface.co/" },
  { name: "replicate", link: "https://replicate.com/" },
  { name: "fal.ai", link: "https://fal.ai/" },
  { name: "openai", link: "https://openai.com/" },
  { name: "midjourney", link: "https://midjourney.com/" },
  { name: "prisma", link: "https://www.prisma.io/" },
  { name: "vscode", link: "https://code.visualstudio.com/" },
]

export function StyleConveyorBelt() {
  return (
    <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 md:grid-cols-3 gap-1 p-1">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          onClick={() => window.open(tool.link, "_blank")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center text-[9px] text-neutral-300 hover:text-pink-400 transition-colors border border-pink-500/10 hover:border-pink-500/30">
          {tool.name}
        </motion.div>
      ))}
    </div>
  )
}

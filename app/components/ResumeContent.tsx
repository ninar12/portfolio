import { experiences } from "../lib/experience"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "SQL",
  "Pandas",
  "Vector Search",
  "RAG Systems",
  "LLM Integration",
  "Prompt Engineering",
  "Model Fine-Tuning",
  "Git",
  "Figma",
]

export default function ResumeContent() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Nina Rhone
        </h1>
        <p className="text-pink-600 dark:text-pink-300 mt-1">
          AI Solutions Architect
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          <span>Los Angeles, CA</span>
          <a href="mailto:ninajr11@icloud.com" className="hover:text-pink-500 dark:hover:text-pink-400">
            ninajr11@icloud.com
          </a>
          <a
            href="https://www.linkedin.com/in/nina-rhone/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 dark:hover:text-pink-400">
            linkedin.com/in/nina-rhone
          </a>
          <a
            href="https://github.com/ninar12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 dark:hover:text-pink-400">
            github.com/ninar12
          </a>
        </div>
      </div>

      <p className="leading-relaxed mb-10 text-neutral-700 dark:text-neutral-300">
        MIT graduate in Computation & Cognition and AI Solutions Architect at
        GUESS Inc., where I architect AI systems across enterprise retail
        workflows. I build production AI systems including vector search,
        recommendation engines, and LLM-powered products.
      </p>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-widest mb-4 border-b pb-2 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800">
          Experience
        </h2>
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div key={i} className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 dark:hover:text-pink-400">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.role}
                </p>
              </div>
              <div className="text-right text-xs shrink-0 text-neutral-500 dark:text-neutral-500">
                <p>{exp.location}</p>
                <p>{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-2">
        <h2 className="text-xs uppercase tracking-widest mb-4 border-b pb-2 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

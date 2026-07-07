import React from "react"
import "./style_conv.css"
import { experiences } from "../lib/experience"

const Resume = () => {
  return (
    <div className="resume-container relative p-1">
      <ul className="max-h-52 text-neutral-900 dark:text-white max-w-72 overflow-scroll bg-blend-overlay">
        {experiences.map((experience, index) => (
          <li
            key={index}
            className="mb-1 experience-item border rounded text-sm text-neutral-500 border-pink-300 dark:border-pink-200">
            <div className="grid grid-cols-4 text-neutral-900 dark:text-white p-2">
              <span className="border-r-pink-200 dark:border-r-pink-100 mr-1 col-span-3 border-r">
                {"link" in experience ? (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h3>{experience.company}</h3>
                  </a>
                ) : (
                  <h3>{experience.company}</h3>
                )}
                <p className="small-p text-neutral-600 dark:text-neutral-200">{experience.role}</p>
              </span>
              <span className="grid justify-items-end">
                <p className="text-neutral-600 dark:text-neutral-200 small-p">
                  📍 {experience.location}
                </p>
                <p className="text-neutral-500 dark:text-neutral-300 hidden md:block small-p">
                  {experience.date}
                </p>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full  rounded-lg h-16 bg-gradient-to-t pointer-events-none"></div>
    </div>
  )
}

export default Resume

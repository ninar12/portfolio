import React from "react"
import "./style_conv.css"

function LinkSvg() {
  return (
    <svg
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
    </svg>
  )
}
const experiences = {
  DataAnalyst: {
    company: "CURRENT: GUESS, INC.",
    role: "DATA ANALYST",
    location: "LA, CA",
    date: "2024-CURR",
    description: "",
    link: "https://www.guess.com/us/en/home/",
  },
  PatternBreak: {
    company: "PATTERNBREAK",
    role: "FULLSTACK ENG",
    location: "LA, CA",
    date: "2023-24",
    description: "",
    link: "https://www.patternbreak.com",
  },
  Cashear: {
    company: "CASHEAR",
    role: "FULLSTACK ENG",
    location: "REMOTE",
    date: "2024",
    description: "",
    link: "https://www.cashear.com",
  },
  Copenhagen: {
    company: "COPENHAGEN UNI: AI4XRAY",
    role: "PROD DESIGN/DEV",
    location: "CPH, DK",
    date: "2023",
    description: "",
  },
  Akello: {
    company: "AKELLO HEALTH",
    role: "FULLSTACK ENG",
    location: "SF, CA",
    date: "2022",
    description: "",
    link: "",
  },
  Conservation: {
    company: "CONSERVATION X LABS",
    role: "FULLSTACK ENG",
    location: "SF, CA",
    date: "2022",
    description: "",
    link: "https://www.conservationxlabs.com",
  },
  Help: {
    company: "HELPGUIDE",
    role: "DATA VIS",
    location: "REMOTE",
    date: "2021",
    description: "https://www.helpguide.org/",
  },
  rivet: {
    company: "RIVET",
    role: "FRONTEND ENG",
    location: "REMOTE",
    date: "2021",
    description: "",
  },
  Mitmedia: {
    company: "MIT MEDIA LAB",
    role: "RESEARCH ASSIST",
    location: "REMOTE",
    date: "2021",
    description: "",
  },
  Agelab: {
    company: "AGELAB",
    role: "RESEARCH ASSIST",
    location: "MA",
    date: "2021",
    description: "",
  },
}

const Resume = () => {
  return (
    <div className="resume-container relative p-1">
      <ul className="max-h-52 text-white max-w-72 overflow-scroll bg-blend-overlay">
        {Object.values(experiences).map((experience, index) => (
          <li
            key={index}
            className="mb-1 experience-item border rounded text-sm text-neutral-500 border-pink-200">
            <div className="grid grid-cols-4 text-white p-2">
              <span className="border-r-pink-100 mr-1 col-span-3 border-r">
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
                <p className="small-p text-neutral-200">{experience.role}</p>
              </span>
              <span className="grid justify-items-end">
                <p className="text-neutral-200 small-p">
                  📍 {experience.location}
                </p>
                <p className="text-neutral-300 hidden md:block small-p">
                  {experience.date}
                </p>
              </span>
            </div>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full  rounded-lg h-16 bg-gradient-to-t pointer-events-none"></div>
    </div>
  )
}

export default Resume

import PixelatedImage from "./PixelatedImage"

export function Card({ children }) {
  return (
    <div className="overflow-hidden bg-neutral-900  rounded-2xl shadow-lg hover:shadow-xl transition-all  bg-opacity-10 backdrop-filter backdrop-blur-lg border border-neutral-700">
      {children}
    </div>
  )
}

export function CardContent({ children }) {
  return <div className="p-4 flex flex-col gap-3">{children}</div>
}

export default function ProjectCard({
  title,
  year,
  description,
  subtitle,
  techStack,
  skills,
  link,
  image,
  githubLink,
}) {
  const chipBackgrounds = {
    framework: "bg-pink-400 border border-pink-500",
    language: "bg-pink-600 border border-pink-700",
    library: "bg-pink-200 border border-pink-300",
    skill: "bg-fuchsia-300 border border-fuchsia-400",
    tool: "bg-purple-300 border  border-purple-400",
    other: "bg-purple-500 border border-purple-600",
    API: "bg-purple-300 border border-purple-400",
    hosting: "bg-pink-500 border border-pink-600",
  }
  return (
    <div className="lg:max-w-6xl">
      <p className="text-xs p-2 text-left"></p>
      <Card>
        <CardContent>
          <div className="flex text-white justify-between mb-4">
            <div className="flex gap-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 text-sm  hover:underline">
                Project Link ↗
              </a>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 text-sm hover:underline">
                  Github ↗
                </a>
              )}
            </div>
            <span className="min-w-4 rounded-3xl">
              {year && <span className="text-gray-400">{year}</span>}
            </span>
          </div>
          <div className="p-2 md:p-4 text-white">
            <div className="mb-8 text-center">
              <h3 className="text-2xl">{title}</h3>
              <h6 className="text-md text-neutral-300">{subtitle}</h6>
            </div>

            <p className="text-left text-neutral-400">Description</p>
            <p className=" text-left  text-white mb-4 text-md">{description}</p>
            <p className="text-left text-neutral-400">
              Overview of contributions
            </p>
            <p className=" text-left  text-white mb-4 text-md">{skills}</p>
            <p className="text-left text-gray-400">Tools</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`${
                    chipBackgrounds[tech.type] || "bg-fuchsia-300"
                  } text-gray-800 text-sm font-medium px-2 py-1  rounded-lg`}>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* <hr className="text-gray-300"></hr> */}
            <div className="flex flex-row justify-center p-4 bg-neutral-950 mt-8 rounded-3xl ">
              {image && (
                <div className="p-6  ">
                  <PixelatedImage
                    src={image}
                    className="w-full shadow-md border border-neutral-700 rounded-xl rounded-b-xl object-fill"
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

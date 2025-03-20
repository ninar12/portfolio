export function Card({ children }) {
  return (
    <div className="overflow-hidden  min-w-96 mt-10 mr-20 ml-20 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200">
      {children}
    </div>
  )
}

export function CardContent({ children }) {
  return <div className="p-5 flex flex-col gap-3">{children}</div>
}

export default function ProjectCard({
  title,
  year,
  description,
  subtitle,
  techStack,
  link,
  image,
  githubLink,
}) {
  return (
    <div className="">
      <p className="text-xs p-2 text-left"></p>
      <Card>
        <CardContent>
          <div className="mb-4 text-center">
            <h3 className="text-3xl">{title}</h3>
            <h6>{subtitle}</h6>
          </div>
          <p className="text-left text-gray-400">Description</p>
          <p className="text-gray-900 text-left  mb-4 text-md">{description}</p>
          <p className="text-left text-gray-400">Tools</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-pink-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <hr className="text-gray-300 mt-4"></hr>

          <div className="flex mt-2 justify-between">
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

          {/* <hr className="text-gray-300"></hr> */}

          {image && (
            <div className="mr-16 mb-4 ml-16">
              <video
                src={image}
                loop={true}
                muted={true}
                autoPlay={true}
                controls={true}
                className="w-full shadow-md mt-4 border border-neutral-200 rounded-xl rounded-b-xl object-fill"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

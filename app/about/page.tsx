export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm Nina Rhone, a full-stack engineer and creative technologist. I
          specialize in building sleek, user-friendly web applications and
          combining code with art to create engaging digital experiences. I
          generally love to solve problems and want to help the world with my
          skills and knowledge.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Next.js, React, Tailwind</li>
              <li>Prisma, Vercel, WordPress</li>
              <li>Creative coding & UX</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>BC Group Website</li>
              <li>Mutual Aid Platform</li>
              <li>Smart Food Planning App</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

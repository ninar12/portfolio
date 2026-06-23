import Link from "next/link"

const navItems = {
  "/": {
    name: "HOME",
  },
  "/services": {
    name: "SERVICES",
  },
  "/about": {
    name: "ABOUT",
  },
  "/contact": {
    name: "CONTACT",
  },
}

export function Navbar() {
  return (
    <aside className="bg-neutral-800 text-neutral-200 pb-0.5 p-0.5 z-20 tracking-tight">
      <div className="lg:sticky xl:top-20">
        <nav
          className="flex text-xs flex-row items-center justify-between font-semibold relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-xs hover:text-neutral-400 flex align-middle relative py-1 px-2">
                  {name}
                </Link>
              )
            })}
          </div>
          {/* UPDATE: replace with your actual Calendly link */}
          <a
            href="https://calendly.com/ninajr11/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded font-semibold transition-colors shrink-0 mx-2">
            Book a 30-min Call
          </a>
        </nav>
      </div>
    </aside>
  )
}

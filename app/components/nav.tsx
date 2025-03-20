import Link from "next/link"

const navItems = {
  "/home": {
    name: "HOME",
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
    <aside className="bg-neutral-800 text-neutral-200 pb-0.5 p-0.5  tracking-tight">
      <div className="lg:sticky xl:top-20">
        <nav
          className="flex text-xs flex-row items-start font-semibold relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {/* <img height="9" width="22" src="/portfolio.png" /> */}
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-xs hover:text-neutral-800 dark:hover:text-white flex align-middle relative py-1 px-2 ">
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

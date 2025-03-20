function ArrowIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bottom-0 bg-none absolute text-xs">
      <ul className="font-sm flex pb-1.5 float-right flex-row space-x-0 text-neutral-800 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <p className="text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} NJR Solutions, LLC
          </p>
        </li>
        <li>
          <a
            className="flex items-center align-middle justify-center justify-items-center transition-all text-neutral-400 hover:text-neutral-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nina-rhone-8535081bb/">
            <p className="ml-2 ">linkedin</p>
          </a>
        </li>
        {/* <li>
          {/* <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/ninar2424">
            <p className="ml-2">twitter</p>
          </a> 
        </li>*/}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-500 text-neutral-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ninar12">
            <p className="ml-2">github</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}

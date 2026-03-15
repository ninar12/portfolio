# Nina Rhone — Portfolio

Personal portfolio site for Nina Rhone, Creative Technologist and AI Solutions Architect at GUESS Inc. (MIT 2023).

Showcases commission and personal projects spanning AI/ML, web development, and creative technology.

## Architecture

```mermaid
graph TD
    layout["app/layout.tsx (Root Layout)"]
    sidebar["Sidebar — project nav — resume — tools + skills"]
    navbar["Navbar"]
    footer["Footer"]
    main["Main Content Area"]

    layout --> navbar
    layout --> sidebar
    layout --> main
    layout --> footer

    main --> home["app/page.tsx Gallery Grid"]
    main --> project["app/[project]/page.tsx Project Page"]
    main --> about["app/about/page.tsx"]
    main --> contact["app/contact/page.tsx"]

    project --> card["ProjectCard (components/Card.tsx)"]
    home --> piximg["PixelatedImage (components/PixelatedImage.tsx)"]
    card --> piximg

    layout --> vercel["Vercel (hosting · analytics · speed insights)"]
```

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Geist font
- Vercel (hosting, analytics, speed insights)

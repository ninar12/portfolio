# Nina Rhone — Portfolio

Personal portfolio site for Nina Rhone, Creative Technologist and AI Solutions Architect at GUESS Inc. (MIT 2023).

Showcases commission and personal projects spanning AI/ML, web development, and creative technology.

## Architecture

```mermaid
graph TD
    layout["app/layout.tsx\n(Root Layout)"]
    sidebar["Sidebar\n— project nav\n— resume\n— tools + skills"]
    navbar["Navbar"]
    footer["Footer"]
    main["Main Content Area"]

    layout --> navbar
    layout --> sidebar
    layout --> main
    layout --> footer

    main --> home["app/page.tsx\nGallery Grid"]
    main --> project["app/[project]/page.tsx\nProject Page"]
    main --> about["app/about/page.tsx"]
    main --> contact["app/contact/page.tsx"]

    project --> card["ProjectCard\n(components/Card.tsx)"]
    home --> piximg["PixelatedImage\n(components/PixelatedImage.tsx)"]
    card --> piximg

    layout --> vercel["Vercel\n(hosting · analytics · speed insights)"]
```

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Geist font
- Vercel (hosting, analytics, speed insights)

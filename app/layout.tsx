import type { Metadata } from "next"
import "./global.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import ClientLayout from "./components/ClientLayout"
import JsonLd from "./components/JsonLd"
import { BASE_URL } from "./lib/config"

const cx = (...classes: any) => classes.filter(Boolean).join(" ")

export const metadata: Metadata = {
  title: "Nina Rhone — AI Solutions Architect | Los Angeles",
  description:
    "Nina Rhone is an AI Solutions Architect based in Los Angeles. I build production AI systems including vector search, recommendation engines, and LLM-powered products.",
  openGraph: {
    title: "Nina Rhone — AI Solutions Architect | Los Angeles",
    description:
      "Nina Rhone is an AI Solutions Architect based in Los Angeles. I build production AI systems including vector search, recommendation engines, and LLM-powered products.",
    url: BASE_URL,
    siteName: "Nina Rhone",
    images: [
      {
        url: `${BASE_URL}/portfolio_.webp`,
        width: 400,
        height: 400,
        alt: "Nina Rhone — AI Solutions Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nina Rhone — AI Solutions Architect | Los Angeles",
    description:
      "Nina Rhone is an AI Solutions Architect based in Los Angeles. I build production AI systems including vector search, recommendation engines, and LLM-powered products.",
    images: [`${BASE_URL}/portfolio_.webp`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx("text-xs", GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}",
          }}
        />
      </head>
      <body className="antialiased h-full">
        <JsonLd />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

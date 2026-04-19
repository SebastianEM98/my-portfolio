import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "./lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const TITLE = "Sebastian Echeverri | Full Stack Engineer Portfolio";
const DESCRIPTION = "Sebastian Echeverri is a Full Stack Engineer building scalable web applications with React, Next.js, Node.js, and TypeScript. Explore projects, experience, and contact information.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Full Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    ".NET",
    "TypeScript",
    "JavaScript",
    "C#",
    "Sebastian Echeverri",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
  ],
  authors: [{ name: "Sebastian Echeverri Mejia", url: SITE_URL }],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Sebastian Echeverri Mejia",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Sebastian Echeverri Mejia — Full Stack Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
    creator: "@sebastianEM98",
  },

  appleWebApp: {
    title: "Sebastian Echeverri",
    capable: true,
    statusBarStyle: "black-translucent",
  },

  manifest: "/manifest.json",

  verification: {
    google: "o3OBqFZAPd7S6DGvb9eNLx9jdiej21JGpy7ZDX_6W20"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sebastian Echeverri Mejia",
  jobTitle: "Full Stack Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/SebastianEM98",
    "https://www.linkedin.com/in/sebastianem98/",
  ],
  knowsAbout: ["React", "Next.js", "Node.js", "Express", ".NET", "TypeScript", "JavaScript", "C#", "PostgreSQL", "SQL Server", "MongoDB","Full Stack Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans antialiased dark ${inter.variable} ${jetBrainsMono.variable}`} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

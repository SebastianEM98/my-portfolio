import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian Echeverri Mejia | Full Stack Engineer",
  description: "Full Stack Engineer building scalable, production-ready web applications. React, Next.js, Node.js, .NET, TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans antialiased dark ${inter.variable} ${jetBrainsMono.variable} `}>
      <body>{children}</body>
    </html>
  );
}

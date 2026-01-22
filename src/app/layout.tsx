import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import "./globals.css";

// Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freeda - Construction Risk Analysis",
  description: "You build. We double-check. AI-powered construction risk analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=freeda-dev"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

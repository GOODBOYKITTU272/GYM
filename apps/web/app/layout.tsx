import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { METADATA } from "@/lib/landing-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Needed to turn the generated OG image into an absolute URL. Vercel sets
  // VERCEL_PROJECT_PRODUCTION_URL on deployments; localhost is the dev default.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: METADATA.title,
  description: METADATA.description,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    type: "website",
    siteName: "NowWise",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-nw-cream text-nw-ink">
        {children}
      </body>
    </html>
  );
}

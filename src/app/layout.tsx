import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display font — Bold, geometric, distinctive
const cabinetGrotesk = Space_Grotesk({
  variable: "--font-cabinet",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body font — Clean, modern, readable
const satoshi = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Monospace font — Developer-focused
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "v0 Enterprise Adoption Playbook | 90-Day Sponsor Activation Framework",
  description:
    "A comprehensive guide for enterprise sponsors to drive v0 adoption using the ABC Framework. Transform your organization's development workflow with AI-powered code generation.",
  keywords: [
    "v0",
    "enterprise",
    "adoption",
    "AI",
    "code generation",
    "Vercel",
    "developer tools",
  ],
  authors: [{ name: "v0 Team" }],
  openGraph: {
    title: "v0 Enterprise Adoption Playbook",
    description:
      "90-Day Sponsor Activation Framework for Enterprise v0 Adoption",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cabinetGrotesk.variable} ${satoshi.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

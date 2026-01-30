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
  title: "v0 Enterprise Adoption Playbook | 10-20-70 Sponsor Activation Framework",
  description:
    "A comprehensive guide for enterprise sponsors to drive v0 adoption using the 10-20-70 Framework. 10% technology, 20% process and training, 70% change management — systematizing the people side of adoption.",
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
      "10-20-70 Sponsor Activation Framework for Enterprise v0 Adoption",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "v0 Enterprise Adoption Playbook",
    description:
      "10-20-70 Sponsor Activation Framework for Enterprise v0 Adoption",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body
        className={`${cabinetGrotesk.variable} ${satoshi.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-black`}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

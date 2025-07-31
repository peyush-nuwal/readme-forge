import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReadmeForge — Build Beautiful GitHub READMEs in Minutes",
  description:
    "ReadmeForge is a powerful online tool to visually craft high-quality GitHub README files. Use drag-and-drop sections, live previews, and export-ready Markdown — no coding required. Built by Peyush Nuwal.",
  keywords: [
    "GitHub README Generator",
    "README Builder Tool",
    "Create README.md",
    "Markdown Generator for GitHub",
    "Professional README Templates",
    "GitHub Profile Optimization",
    "Portfolio README Generator",
    "ReadmeForge.io",
    "Peyush Nuwal Portfolio",
    "Frontend Developer Tools",
    "Markdown Editor Online",
    "Drag and Drop README Builder",
    "Open Source Readme Tool",
    "No Code README Editor",
    "Visual GitHub Readme",
    "README Creator App",
  ],
  authors: [
    { name: "Peyush Nuwal", url: "https://peyush-nuwal-portfolio.vercel.app" },
  ],
  creator: "Peyush Nuwal",
  publisher: "ReadmeForge.io",
  metadataBase: new URL("https://readme-forge.vercel.app"),
  category: "Developer Tools",
  themeColor: "#0f172a", // dark slate style
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      
    },
  },
  openGraph: {
    title: "ReadmeForge — Build Beautiful GitHub READMEs in Minutes",
    description:
      "Generate clean, professional, and visually appealing GitHub README files without writing a line of code. Try ReadmeForge today!",
    url: "https://readme-forge.vercel.app",
    siteName: "ReadmeForge",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://readme-forge.vercel.app/dashboard.png",
        width: 1200,
        height: 630,
        alt: "ReadmeForge App Dashboard - GitHub Readme Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadmeForge — Build Beautiful GitHub READMEs in Minutes",
    description:
      "Visually design and export high-quality GitHub README.md files. Drag & drop blocks, live preview, and instant Markdown export. Built for developers.",
    creator: "@Nuwal_Peyush",
    images: ["https://readme-forge.vercel.app/dashboard.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#121212"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ReadmeForge",
              url: "https://readme-forge.vercel.app",
              applicationCategory: "DeveloperTool",
              operatingSystem: "All",
              creator: {
                "@type": "Person",
                name: "Peyush Nuwal",
                url: "https://peyush-nuwal-portfolio.vercel.app",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              description:
                "Visual GitHub README builder with drag-and-drop sections, Markdown export, and live preview.",
              image: "https://readme-forge.vercel.app/dashboard.png",
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable}  antialiased `}
      >
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

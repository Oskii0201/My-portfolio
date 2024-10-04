import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Oskar Dybas | Portfolio",
  description: "Frontend developer portfolio showcasing projects and skills.",
  keywords: [
    "Frontend Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Oskar Dybas",
  ],
  authors: [{ name: "Oskar Dybas", url: "https://www.oskardybas.com" }],
  openGraph: {
    title: "Oskar Dybas | Portfolio",
    description: "Frontend developer portfolio showcasing projects and skills.",
    url: "https://www.oskardybas.com",
    siteName: "Oskar Dybas Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Oskar Dybas Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskar Dybas Portfolio",
    description: "Frontend developer portfolio showcasing projects and skills.",
    images: ["/images/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-global scroll-smooth">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

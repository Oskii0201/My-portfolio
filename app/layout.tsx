import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Oskar Dybas Portfolio",
  description: "Frontend developer portfolio",
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

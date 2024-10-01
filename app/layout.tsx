import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";

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
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

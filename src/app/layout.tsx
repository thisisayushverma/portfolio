import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-2 w-full min-h-screen flex flex-col items-center bg-[#09090b]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


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
      <head>
        <title>
          Ayush Verma - Full Stack Developer
        </title>
      </head>
      <body className="p-2 min-h-screen flex flex-col items-center bg-[#09090b]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


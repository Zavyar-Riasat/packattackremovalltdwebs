// app/layout.tsx
import { NavbarWrapper } from "../components/NavbarWrapper";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./sections/footer"));

const geist = Geist({subsets:['latin'], variable:'--font-sans'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* REMOVED OSM preconnect - it was blocking rendering */}
        {/* Preload only critical images */}
        <link rel="preload" as="image" href="/images/logo.png" />
      </head>
      <body>
        <NavbarWrapper/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
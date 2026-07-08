// app/layout.tsx
import { NavbarWrapper } from "../components/NavbarWrapper";
import "./globals.css"; // 👈 Crucial line to link your Tailwind styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <NavbarWrapper/>
        {children}</body>
    </html>
  );
}
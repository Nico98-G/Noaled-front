"use client"; // IMPORTANTE

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavApp from "./components/NavApp";
import FooterApp from "./components/FooterApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const mostrarLayout = pathname !== "/"; // ocultar en la página de bienvenida "/"

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {mostrarLayout && <NavApp />}
        <main>{children}</main>
        {mostrarLayout && <FooterApp />}
      </body>
    </html>
  );
}

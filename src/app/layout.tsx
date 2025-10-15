"use client";

import { usePathname } from "next/navigation";
import { Roboto, Orbitron } from "next/font/google";
import "./globals.css";

import NavApp from "./components/NavApp";
import FooterApp from "./components/FooterApp";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const mostrarLayout = pathname !== "/";

  return (
    <html lang="es">
      <head>
        <title>Grupo Noaled</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={`${roboto.variable} ${orbitron.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        {mostrarLayout && <NavApp />}
        
        {/* 👇 Esto ocupa todo el espacio libre */}
        <main className="flex-grow flex flex-col w-full">{children}</main>
        
        {mostrarLayout && <FooterApp />}
      </body>
    </html>
  );
}

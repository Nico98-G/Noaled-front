"use client";

import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import "./globals.css";

import NavApp from "./components/NavApp";
import FooterApp from "./components/FooterApp";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${roboto.variable} antialiased`}>
        {mostrarLayout && <NavApp />}
        <main>{children}</main>
        {mostrarLayout && <FooterApp />}
      </body>
    </html>
  );
}

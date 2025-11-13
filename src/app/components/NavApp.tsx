"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";



const NavApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const irASobreNosotros = () => {
    if (pathname === "/home") {
      const section = document.getElementById("main");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/home#main");
    }
  };

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-3 sm:px-6 py-2 w-full max-w-full relative">
      {/* Logo */}
      <Link
      href="/home">
        <div className="flex items-center gap-2">

          <Image
            src={"/logo.png"}
            alt="logo"
            width={75}
            height={75}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex-shrink-0"
          />

          <h1 className="logo-font sm:text-[15px] md:text-[30px]">Grupo Noaled</h1>
        </div>
      </Link>


      {/* Botón Hamburguesa (solo en móviles) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              menuOpen
                ? "M6 18L18 6M6 6l12 12" // X cuando está abierto
                : "M4 6h16M4 12h16M4 18h16" // 3 líneas cuando está cerrado
            }
          />
        </svg>
      </button>

      {/* Botón presupuesto (solo en pantallas grandes) */}
      <div className="hidden md:block">
        <a
              href="https://wa.me/5493814146771"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
        <button
          type="button"
          className="rounded-md bg-blue-400 px-3 py-1 text-lg border border-transparent hover:border-white hover:border-2 transition-all cursor-pointer"
        >
          
          Solicita tu presupuesto
        </button>

            </a>
      </div>

      {/* Menú Desktop (solo md y más grande) */}
      <nav className="hidden md:flex items-center gap-6 mr-10">
        <button
          onClick={irASobreNosotros}
          className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
        >
          Sobre nosotros
        </button>
        <Link
          href="/productos"
          className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
        >
          Productos
        </Link>
        <Link
          href="/contacto"
          className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
        >
          Contacto
        </Link>
      </nav>

      {/* Menú Mobile (con botón + links) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-4 md:hidden z-50">
          <a
            href="https://wa.me/5493814146771"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <button
              type="button"
              className="mb-3 rounded-md bg-blue-400 px-3 py-1 text-lg border border-transparent hover:border-white hover:border-2 transition-all cursor-pointer"
            >
              Solicita tu presupuesto
            </button>

          </a>
          
          <Link
            href="/home"
            className="py-2 hover:text-blue-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Sobre nosotros
          </Link>
          <Link
            href="/productos"
            className="py-2 hover:text-blue-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="py-2 hover:text-blue-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavApp;

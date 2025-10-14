"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Bienvenida() {
  const router = useRouter();
  const [mostrar, setMostrar] = useState(false);
  const [girando, setGirando] = useState(false);

  const irAPrincipal = () => {
    setGirando(true);
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrar(true);
    }, 1000); // simulamos carga

    return () => clearTimeout(timeout);
  }, []);

  return (
  <div className="flex justify-center items-center h-screen text-center leading-loose relative">
    {/* 🔄 Loader encima */}
    {!mostrar && (
      <div className="absolute flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    )}

    {/* ✅ Contenido con transición */}
    <div
      className={`transition-opacity duration-2000 ${
        mostrar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <Image
          src="/bienvenidaFondo.jpeg"
          alt="imagen"
          width={1920}
          height={1080}
          className="w-[60vw] h-screen object-cover mask-linear-100 mask-linear-from-40% mask-linear-to-55% hidden sm:block"
        />
      </div>

      <div className="flex flex-col items-center">

        <Image 
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="shadow-xl/30 bg-transparent rounded-[21px]"
        />
        <h1 className="text-[40px]">Bienvenido a grupo Noaled</h1>
        <p className="text-[20px]">Tu próximo gran proyecto</p>
        <button
          onClick={irAPrincipal}
          disabled={girando}
          className="mt-4 w-[100px] min-h-[32px] rounded-md bg-blue-700 px-8 font-semibold text-white flex items-center justify-center gap-2"
        >
          {girando ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Entrar"
          )}
        </button>
      </div>
    </div>
  </div>
);
}

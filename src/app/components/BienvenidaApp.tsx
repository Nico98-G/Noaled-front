"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Bienvenida() {
  const router = useRouter();
  const [mostrar, setMostrar] = useState(false);

  const irAPrincipal = () => {
    router.push("/home");
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

      {/* ✅ Contenido siempre renderizado con transición */}
      <div
        className={`transition-opacity duration-2000 ${
          mostrar ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-[40px]">Bienvenido al grupo Noaled</h1>
        <p className="text-[20px]">Tu próximo gran proyecto</p>
        <button onClick={irAPrincipal} className="mt-4 underline">
          Entrar
        </button>
      </div>
    </div>
  );
}


"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Bienvenida() {
  const router = useRouter();

  const irAPrincipal = () => {
    router.push("/home");
  };

  return (
    <div className="">
      <h1>Bienvenido a mi sitio</h1>
      <p>Gracias por visitarnos</p>
      <button onClick={irAPrincipal} className="">
        Entrar
      </button>
    </div>
  );
}

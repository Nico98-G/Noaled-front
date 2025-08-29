"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import Imagenes from '../data/ImgCarrusel'

const CarruselApp = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [fade, setFade] = useState (true)

  useEffect(()=>{
    const intervalo = setInterval(()=>{
      setFade(false)

      setTimeout(() => {
        setIndiceActual((prevIndex) => (prevIndex + 1) % Imagenes.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <Image
        src={Imagenes[indiceActual]}
        alt={`Imagen ${indiceActual}`}
        width={1920}       
        height={450}        
        style={{ objectFit: "cover" }}
        className={`w-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}

export default CarruselApp
"use client"

import React, { useEffect, useState } from 'react'
import Imagenes from '../data/ImgCarrusel'

const CarruselApp = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(()=>{
    const intervalo = setInterval(()=>{
      setIndiceActual((prevIndex) => (prevIndex + 1) % Imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className='w-full flex justify-center items-center'>
      <img
        src={Imagenes[indiceActual]}
        alt={`Imagen ${indiceActual}`}
        className='w-full max-h-75 object-contain'
      />
    </div>
  )
}

export default CarruselApp
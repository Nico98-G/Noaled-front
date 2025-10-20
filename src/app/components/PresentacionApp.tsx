"use client";
import React, { useState, useEffect } from "react";

export default function PresentacionApp () {
  const [mostrarVideo, setMostrarVideo] = useState(true);

  // Evita que se pueda hacer scroll mientras el video está visible
  useEffect(() => {
    if (mostrarVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mostrarVideo]);

  return (
    <>
      {mostrarVideo && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video">
            {/* Botón para cerrar */}
            <button
              onClick={() => setMostrarVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-400"
            >
              ✕
            </button>

            {/* Video de YouTube */}
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/yy3waT7sxNI?rel=0&modestbranding=1&showinfo=0&controls=1"
              title="Video de presentación"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

        
          </div>
        </div>
      )}
    </>
  );
}

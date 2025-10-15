
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const FooterApp = () => {
  return (
    <footer className="bg-gray-400 text-white grid grid-cols-1 md:grid-cols-3 items-center px-6 py-6 gap-6 md:gap-0 text-center md:text-left">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/noa-led-removebg-preview.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6">
        <a
          href="https://www.facebook.com/NOALEDTUCUMAN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={28} className="md: w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/noaledtucuman/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} className="md: w-10 h-10" />
        </a>
        <a
          href="https://www.tiktok.com/@noaled.srl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok size={28} className="md: w-10 h-10" />
        </a>
      </div>

      {/* Direcciones */}
      <div className="text-center md:text-right">
        <div className="text-lg font-semibold">Locales</div>
        <div className="text-sm">
          <h5>San Juan 1171, SMT</h5>
          <h5>Marco Avellaneda 413, SMT</h5>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;

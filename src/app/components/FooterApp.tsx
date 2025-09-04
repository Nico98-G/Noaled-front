import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';




const FooterApp = () => {
  return (
    <footer className="bg-gray-400 text-white grid grid-cols-3 items-center px-10 py-2">
      
      <div className="flex justify-start">
        <Image
          src="/noa-led-removebg-preview.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      <div className="flex justify-center gap-10">
        <a
          href="https://www.facebook.com/NOALEDTUCUMAN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://www.instagram.com/noaledtucuman/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.tiktok.com/@noaled.srl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok size={40} />
        </a>
      </div>

      <div className="text-right">
        <div className="text-[18px] font-semibold">Locales</div>
        <div>
          <h5>San Juan 1171, SMT</h5>
          <h5>Marco Avellaneda 413, SMT</h5>
        </div>
      </div>
    </footer>

  )
}

export default FooterApp
import React from 'react'
import Image from 'next/image'
import { Montserrat } from "next/font/google";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});



const FooterApp = () => {
  return (
    <footer className='bg-gray-400 text-white flex justify-between items-center px-10 py-2'>
        <div>
            <Image
            src={"/noa-led-removebg-preview.png"}
            alt="logo"
            width={80}
            height={80}
            />
            <div className='flex items-center gap-4 mt-1'>

                <a 
                  href="https://www.facebook.com/NOALEDTUCUMAN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook/>
                </a>

                <a 
                  href="https://www.instagram.com/noaledtucuman/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram/>
                </a>

                <a 
                  href="https://www.tiktok.com/@noaled.srl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTiktok/>
                </a>
            </div>
        </div>

        <div className='text-right'>
          <div className='text-[18px]'>
            Locales
          </div>
          <div>
            <h5>San Juan 1171, Tucumnán</h5>
            <h5>Marco Avellaneda 413, Tucumán</h5>
          </div>
        </div>
    </footer>
  )
}

export default FooterApp
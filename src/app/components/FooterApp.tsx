import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import  {SiX} from "react-icons/si"
import { BsTwitterX } from 'react-icons/bs';

const FooterApp = () => {
  return (
    <footer className='bg-gray-400 text-white flex items-center px-10'>
        <div>
            <Image
            src={"/noa-led-removebg-preview.png"}
            alt="logo"
            width={80}
            height={80}
            />
            <div className='flex items-center gap-4'>
                <FaFacebook/>
                <FaInstagram/>
                <BsTwitterX/>
            </div>
        </div>
        <div>Locales</div>
    </footer>
  )
}

export default FooterApp
import React from 'react'
import Image from 'next/image'

const FooterApp = () => {
  return (
    <div>
        <Image
        src={"/noa-led-removebg-preview.png"}
        alt="logo"
        width={80}
        height={80}
        />
        <div>Redes</div>
        <div>Locales</div>
    </div>
  )
}

export default FooterApp
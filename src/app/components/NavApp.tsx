import React from 'react'
import Image from 'next/image'

const NavApp = () => {
  return (
    <header className='bg-gray-800 text-white flex items-center justify-between pt-2 pb-2'>
        <Image
        src={"/logo.png"}
        alt="logo"
        width={75}
        height={75}
        className='ml-10'
        />

        <button
        type='button'
        className='rounded-md bg-blue-400 px-3 py-1 text-lg border border-transparent hover:border-white hover:border-2 transition-all cursor-pointer'>
            Solicita tu presupuesto
        </button>
        <nav className="navegador">
            <ul className='flex gap-6 text-md font-medium mr-20'>
                <li className='hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer'>Productos</li>
                <li className='hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer'>Sobre nosotros</li>
                <li className='hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer'>Contacto</li>
            </ul>
        </nav>
    </header>
  )
}

export default NavApp
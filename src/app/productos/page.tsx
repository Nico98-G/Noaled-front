import React from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const page = () => {
  return (
    <div className='px-[20px] flex flex-col items-center'>
        <section className='text-center'>
            <h2 className="text-2xl font-semibold text-center bg-blue-100 text-blue-900 p-4 rounded-md shadow-md max-w-[800px] mx-auto mt-8 mb-14">
                Descargá nuestros catálogos según tus necesidades
            </h2>

        </section>

        <section className={`${montserrat.className} -mt-10 mb-10 bg-gray-100 w-full py-10 rounded-md shadow-inner`}>
            <ul className='grid grid-cols-4 gap-5 justify-items-center'>
                <li className='bg-white rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://diariosanrafael.com.ar/wp-content/uploads/2022/07/cg-led-para-alumbrado-publico.jpg" 
                        alt="imagen" 
                        className="h-[80%] overflow-hidden rounded-sm"
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        ILUMINACIÓN
                        <br />
                        PÚBLICA/INSUTRIAL
                    </p>
                </li>

                <li className='bg-white rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://sledcolombia.org/wp-content/uploads/2015/02/luz-empotrada-para-la-cocina.jpg" 
                        alt="imagen" 
                        className='h-[80%] overflow-hidden rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        ILUMINACIÓN
                        HOGAR
                    </p>
                </li>

                <li className='bg-white rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="/materiales.png" 
                        alt="imagen" 
                        className='h-[80%] overflow-hidden object-cover rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        MATERIALES ELÉCTRICOS
                    </p>
                </li>

                <li className='bg-white rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://dcdn-us.mitiendanube.com/stores/005/900/662/products/d_757190-mla79589157545_092024-o-e7cdf74d108dca792117432417611564-1024-1024.webp" 
                        alt="imagen"
                        className='h-[80%] overflow-hidden rounded-sm' 
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        HERRAMIENTAS
                    </p>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default page
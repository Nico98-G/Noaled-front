import React from 'react'
import Image from 'next/image';
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
                <li className=' justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <a 
                    href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj8p7mA_LWPAxWkB7kGHVH-MicQFnoECCcQAQ&url=https%3A%2F%2Fimages.philips.com%2Fis%2Fcontent%2FPhilipsConsumer%2FPDFDownloads%2FArgentine%2FODLI20160715_001-UPD-es_AR-Cat%25C3%25A1logo-Outdoor-2016.pdf&usg=AOvVaw2yKlPUPyukCg5LcoYc93RD&opi=89978449"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    
                        <Image 
                            src="/productos/alumbrado.jpg" 
                            alt="imagen"
                            height={300}
                            width={250}
                            className="h-[80%] overflow-hidden rounded-sm"
                        />
                        <p className='mt-[10px] font-bold text-[18px]'>
                            ILUMINACIÓN
                            <br />
                            PÚBLICA/INDUSTRIAL
                        </p>
                    
                    </a>
                </li>

                <li className='justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <Image 
                        src="/productos/hogar.jpg" 
                        alt="imagen"
                        height={300}
                        width={250}
                        className='h-[80%] overflow-hidden rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        ILUMINACIÓN
                        HOGAR
                    </p>
                </li>

                <li className='justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <Image 
                        src="/productos/materiales.png" 
                        alt="imagen"
                        height={300}
                        width={250} 
                        className='h-[80%] overflow-hidden object-cover rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[18px]'>
                        MATERIALES ELÉCTRICOS
                    </p>
                </li>

                <li className='justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <a 
                    href="https://catalogo-jadever.netlify.app/catalogo-jadever-argentina.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image 
                            src="/productos/herramientas.webp" 
                            alt="imagen"
                            height={300}
                            width={250}
                            className='h-[80%] overflow-hidden rounded-sm' 
                        />
                        <p className='mt-[10px] font-bold text-[18px]'>
                            HERRAMIENTAS
                        </p>
                    
                    </a>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default page
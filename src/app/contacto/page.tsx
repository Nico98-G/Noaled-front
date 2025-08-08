import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const page = () => {
  return (
    <div className='px-20 flex justify-center content-center my-10'>
        <main className='flex flex-col text-[20px] w-1/2 mr-2'>
            <div>
                Envíanos un mensaje a nuestro
                <br />
                <button className='bg-green-500 text-white px-2 py-1 rounded-lg flex items-center'>
                    <FaWhatsapp/>
                    <a 
                    href="https://wa.me/5493814146771"
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        WhatsApp
                    </a>
                </button>
                o
                <br />
                <br />
            </div>

            <div className='flex flex-col'>
                <label>Email</label>
                <input
                type='mail'
                placeholder='ejemplo@mail.com'
                className='bg-gray-100 rounded '
                />

                <label>Nombre</label>
                <input 
                type="text" 
                className='bg-gray-100 rounded'
                />
                
                <label> Mensaje</label>
                <textarea
                name="mensaje"
                id="mensaje"
                className='bg-gray-100'>

                </textarea>
            </div>

        </main>

        <aside className='w-1/2 ml-2 items-center justify-items-center'>
            <h2>
                Puedes llegar a nuestro local para conocernos personalmente
            </h2>
            <div className='w-[100%] flex justify-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.524995515191!2d-65.21612889009641!3d-26.823249376603396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dafb6cf70f1%3A0x4ca9107135c4ec29!2sNOALED%20SRL!5e0!3m2!1ses!2sar!4v1753364653243!5m2!1ses!2sar"
                    className="w-[80%] h-[300px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </aside>
    </div>
  )
}

export default page
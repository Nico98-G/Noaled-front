import React from 'react'

const page = () => {
  return (
    <div className='px-[20px]'>
        <section>
            <ul className='grid grid-cols-4 gap-5 mt-20 justify-items-center'>
                <li className='bg-white border rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://diariosanrafael.com.ar/wp-content/uploads/2022/07/cg-led-para-alumbrado-publico.jpg" 
                        alt="imagen" 
                        className="h-[80%] overflow-hidden rounded-sm"
                    />
                    <p className='mt-[10px] font-bold text-[20px]'>
                        Ilumiación
                        <br />
                        pública/industrial
                    </p>
                </li>

                <li className='bg-white border rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://sledcolombia.org/wp-content/uploads/2015/02/luz-empotrada-para-la-cocina.jpg" 
                        alt="imagen" 
                        className='h-[80%] overflow-hidden rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[20px]'>
                        Iluminación
                        hogar
                    </p>
                </li>

                <li className='bg-white border rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://videos.openai.com/vg-assets/assets%2Ftask_01k0d2v8c4e9da6wwthn36js58%2F1752785975_img_0.webp?st=2025-07-17T19%3A17%3A28Z&se=2025-07-23T20%3A17%3A28Z&sks=b&skt=2025-07-17T19%3A17%3A28Z&ske=2025-07-23T20%3A17%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=IYU%2BPqhhRhzm7B1SPTaDMWLZAS34mMxMd1KK1mpyFm8%3D&az=oaivgprodscus" 
                        alt="imagen" 
                        className='h-[80%] overflow-hidden object-cover rounded-sm'
                    />
                    <p className='mt-[10px] font-bold text-[20px]'>
                        Materiales eléctricos
                    </p>
                </li>

                <li className='bg-white border rounded-md justify-items-center text-center p-[15px] h-[300px] max-w-[250px] transition duration-300 ease-in-out scale-100 hover:scale-110'>
                    <img 
                        src="https://dcdn-us.mitiendanube.com/stores/005/900/662/products/d_757190-mla79589157545_092024-o-e7cdf74d108dca792117432417611564-1024-1024.webp" 
                        alt="imagen"
                        className='h-[80%] overflow-hidden rounded-sm' 
                    />
                    <p className='mt-[10px] font-bold text-[20px]'>
                        Herramientas
                    </p>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default page
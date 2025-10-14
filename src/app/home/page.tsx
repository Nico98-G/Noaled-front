import Image from "next/image";
import CarruselApp from "../components/CarruselApp";
import { Montserrat } from "next/font/google";
import "./home.css";
import "../css/carrusel.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function page() {
  return (
    <>
      <CarruselApp />

      <div className="mt-6 flex justify-center">
        <div className="border-t-2 border-b-2 border-gray-300 px-4 py-2 w-fit">
          <div className="grid grid-cols-2 gap-6 items-center md:grid-cols-4 lg:flex lg:items-center lg:gap-6">
            <Image src="/logos/philips.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/macroled.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/chint.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/litex.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/jadever.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/strada.jpg" alt="imagen" width={100} height={50} />
            <Image src="/logos/richi.png" alt="imagen" width={100} height={50} />
            <Image src="/logos/teclastar.jpg" alt="imagen" width={100} height={50} />
          </div>
        </div>
      </div>


      
      <div className="flex flex-col mt-5 text-center justify-self-center items-center justify-center px-2">
        <p
          className={`${montserrat.className} 
            text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 
            text-sky-600 leading-snug`}
        >
          Llegamos a todo el país
          <br />
          Pedí tu cotización
        </p>

        <Image
          src="/envios.png"
          alt="envios"
          width={900}
          height={350}
          className="w-[250px] sm:w-[400px] md:w-[600px] lg:w-[900px] h-auto mt-4"
        />
      </div>



      <section className="text-justify main-text">
        
        <div className="flex flex-col pb-[10px] sm:pb-[0px] md:flex-row justify-center items-center px-6 md:px-20 bg-sky-100">
          <div className="relative w-full md:w-1/2 flex justify-center items-center overflow-hidden 
            before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] 
            before:bg-[url('/local.png')] before:bg-center before:blur-[1px] before:bg-cover before:rounded-xl">
            <h1 className="text-2xl md:text-[40px] text-black relative z-10 bg-white/80 px-4 md:px-6 rounded-full text-center">
              ¿Quiénes somos?
            </h1>
          </div>
          <p className="text-base md:text-[20px] w-full md:w-1/2 mt-4 md:mt-0 md:ml-5">
            Somos uno de los principales distribuidores mayoristas de insumos eléctricos e iluminación LED en la región del NOA. 
            Nos especializamos en brindar soluciones integrales tanto para instalaciones domiciliarias como para grandes obras y desarrollos industriales. 
            Contamos con un amplio catálogo de productos de alta calidad, seleccionados para responder a las exigencias del sector eléctrico moderno.
          </p>
        </div>

        
        <div className="shadow-sm inset-shadow-sm bg-orange-300">
          <div className="flex flex-col pb-[10px] sm:pb-[0px] sm:pb-[0px] md:flex-row justify-center items-center px-6 md:px-20">
            <div className="relative w-full md:w-1/2 flex justify-center items-center overflow-hidden 
              before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] 
              before:bg-[url('/atencion.png')] before:bg-center before:bg-cover before:blur-[2px] before:rounded-xl">
              <h1 className="text-2xl md:text-[40px] text-black relative z-10 bg-white/80 px-4 md:px-6 rounded-full text-center">
                ¿Qué ofrecemos?
              </h1>
            </div>
            <p className="text-base md:text-[20px] w-full md:w-1/2 mt-4 md:mt-0 md:ml-5">
              Nos destacamos por nuestro compromiso con la innovación, la eficiencia energética y la atención personalizada. 
              Nuestra misión es ofrecer un servicio confiable y ágil, acompañando a nuestros clientes en cada proyecto con asesoramiento técnico especializado y logística eficiente.
            </p>
          </div>
        </div>


        <div className="bg-white">
          <div className="flex flex-col pb-[10px] sm:pb-[0px] sm:pb-[0px] md:flex-row justify-center items-center px-4 sm:px-6 md:px-20">
            <div className="relative w-full md:w-1/2 flex justify-center items-center overflow-hidden 
              before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] 
              before:bg-[url('/philips.png')] before:bg-center before:blur-[2px] before:bg-cover before:rounded-xl">
              <h1 className="text-2xl md:text-[40px] text-black text-center relative z-10 bg-white/80 px-4 md:px-6 rounded-full">
                Distribuidor Philips
              </h1>
            </div>
            <p className="text-base md:text-[20px] w-full md:w-1/2 mt-4 md:mt-0 md:ml-5">
              Único distribuidor mayorista Philips en el NOA, garantizando a nuestros clientes productos originales y un servicio de primer nivel.
            </p>
          </div>
        </div>


        <div className="flex flex-col pb-[10px] sm:pb-[0px] md:flex-row justify-center items-center px-4 sm:px-6 md:px-20 bg-sky-100" id="jadever">
          <div className="relative w-full md:w-1/2 flex justify-center items-center overflow-hidden 
            before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] 
            before:bg-[url('/jadever.png')] before:bg-center before:blur-[1px] before:bg-cover before:rounded-xl">
            <h1 className="text-2xl md:text-[40px] text-black relative z-10 bg-white/80 px-4 md:px-6 rounded-full text-center">
              Jadever Point
            </h1>
          </div>
          <p className="text-base md:text-[20px] w-full md:w-1/2 mt-4 md:mt-0 md:ml-5">
            Somos el primer punto exclusivo de la marca Jadever en el país, ofreciendo productos con garantía oficial y respaldo internacional.
          </p>
        </div>
      </section>

    </>
  );
}

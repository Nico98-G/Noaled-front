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
        <div className="border-t-2 border-b-2 border-gray-300 flex items-center gap-6 px-4 py-2 w-fit marcas">
          <img
            src="https://images.seeklogo.com/logo-png/10/2/philips-logo-png_seeklogo-108446.png"
            alt=""
          />
          <img
            src="https://acdn-us.mitiendanube.com/stores/383/963/products/logo-macroled-1-0693060a1f383417c717153700811580-640-0.png"
            alt=""
          />
          <img
            src="https://promomejia.com/wp-content/uploads/2018/08/Logo-Chint-Mexico.png"
            alt=""
          />
          <img 
            src="/litex.png" 
            alt="" />
          <img 
            src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=600"
            alt="" />
          <img 
            src="https://strapi-pm.s3.us-east-1.amazonaws.com/strada_logo_positivo_tag_Agustin_Pistone_page_0001_1_5e3c1154e7.jpg" 
            alt="" />

          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdEunsFkC4skKtAURub8Eh1BtqIJehNw3Sg&s" 
            alt="" />
          <img 
            src="https://lummina.com.ar/wp-content/uploads/2022/03/D_695745-MLA32533818407_102019-F.jpg" 
            alt="" />
        </div>
      </div>

      
      <div className="flex flex-col mt-5 text-center justify-self-center items-center justify-center">
        <p className={`${montserrat.className} text-[40px] text-sky-600`}>
          Llegamos a todo el país
          <br /> 
          Pedí tu cotización 
        </p>
        <img src="/envios.png" alt="" className=""/>
      </div>


      <section className="text-justify main-text">

        <div className="flex justify-center items-center px-40 bg-sky-100">
          <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('/local.png')] before:bg-center before:blur-[1px] before:bg-cover  before:rounded-xl">
            <h1 className="text-[40px] text-black relative z-10 bg-white/80 px-6 rounded-full ">
              ¿Quiénes somos?
            </h1>
          </div>

          <p className="text-[20px] w-1/2 ml-5">
            Somos uno de los principales distribuidores
            mayoristas de insumos eléctricos e iluminación LED en la región del
            NOA. Nos especializamos en brindar soluciones integrales
            tanto para instalaciones domiciliarias como para grandes obras y
            desarrollos industriales. Contamos con un amplio catálogo de
            productos de alta calidad, seleccionados para responder a las
            exigencias del sector eléctrico moderno.
          </p>
        </div>

        <div className="shadow-sm inset-shadow-sm bg-orange-300">
          <div className="flex justify-center items-center px-40">
           <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('/atencion.png')] before:bg-center before:bg-cover before:blur-[2px] before:rounded-xl">g
            <h1 className="text-[40px] text-black relative z-10 bg-white/80 px-6 rounded-full ">
              ¿Que ofrecemos?
            </h1>
          </div>
            <p className="text-[20px] w-1/2 ml-5">
              Nos destacamos por nuestro compromiso con la innovación, la
              eficiencia energética y la atención personalizada. Nuestra misión
              es ofrecer un servicio confiable y ágil, acompañando a nuestros
              clientes en cada proyecto con asesoramiento técnico especializado
              y logística eficiente.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center px-40">
          <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('/philips.png')] before:bg-center before:blur-[2px] before:bg-cover  before:rounded-xl">
            <h1 className="text-[40px] text-black text-center relative z-10 bg-white/80 px-6 rounded-full">
              Distribuidor Philips
            </h1>
          </div>
          <p className="text-[20px] w-1/2 ml-5">
            Único distribuidor mayorista Philips en el NOA, garantizando a nuestros 
            clientes productos originales y un servicio de primer nivel.
          </p>
        </div>

        <div className="flex justify-center items-center px-40 bg-sky-100" id="jadever">
          <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('/local.png')] before:bg-center before:blur-[1px] before:bg-cover  before:rounded-xl">
            <h1 className="text-[40px] text-black relative z-10 bg-white/80 px-6 rounded-full ">
              Jadever Point
            </h1>
          </div>
          <p className="text-[20px] w-1/2 ml-5">
            Somos el primer punto exclusivo de la marca Jadever en el país, 
            ofreciendo productos con garantía oficial y respaldo internacional.
          </p>
        </div>
      </section>
    </>
  );
}

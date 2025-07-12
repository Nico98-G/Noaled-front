import Image from "next/image";
import CarruselApp from "../components/CarruselApp";
import "../css/home.css";
import "../css/carrusel.css";

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
          <img src="/litex.png" alt="" />
          <img src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=600" alt="" />
        </div>
      </div>

      <section className="text-justify main-text">
        <div className="flex justify-center items-center px-40">
          <h1 className="text-[40px] w-1/2"> Quienes somos?</h1>
          <p className="text-[20px] w-1/2">
            En Noaled S.R.L. somos uno de los principales distribuidores
            mayoristas de insumos eléctricos e iluminación LED en la región del
            NOA (Noroeste Argentino). Con una sólida trayectoria y presencia en
            el mercado, nos especializamos en brindar soluciones integrales
            tanto para instalaciones domiciliarias como para grandes obras y
            desarrollos industriales. Contamos con un amplio catálogo de
            productos de alta calidad, seleccionados para responder a las
            exigencias del sector eléctrico moderno: desde luminarias LED de
            última generación hasta materiales e insumos eléctricos esenciales
            para profesionales y empresas.
          </p>
        </div>

        <div className="shadow-sm inset-shadow-sm bg-sky-100">
          <div className="flex justify-center items-center px-40">
            <h1 className="text-[40px] w-1/2"> Que ofrecemos?</h1>
            <p className="text-[20px] w-1/2">
              Nos destacamos por nuestro compromiso con la innovación, la
              eficiencia energética y la atención personalizada. Nuestra misión
              es ofrecer un servicio confiable y ágil, acompañando a nuestros
              clientes en cada proyecto con asesoramiento técnico especializado
              y logística eficiente.
            </p>
          </div>
        </div>

        <div>
          <div></div>
          <p></p>
        </div>
      </section>
    </>
  );
}

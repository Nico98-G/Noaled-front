import Image from "next/image";
import CarruselApp from "../components/CarruselApp";
import "./home.css";
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

      <section className="text-justify main-text">

        <div className="flex justify-center items-center px-40 bg-orange-300">
          <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('https://videos.openai.com/vg-assets/assets%2Ftask_01k250rag2e1q8j488q9t8ax11%2F1754662850_img_0.webp?st=2025-08-08T13%3A04%3A09Z&se=2025-08-14T14%3A04%3A09Z&sks=b&skt=2025-08-08T13%3A04%3A09Z&ske=2025-08-14T14%3A04%3A09Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ETfsyr8exeSISJxkFkk2yoqarRM9%2Fr1xnbnCOH5AQGM%3D&az=oaivgprodscus')] before:bg-center before:bg-cover before:blur-[2px] before:rounded-xl">
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
            exigencias del sector eléctrico moderno: desde luminarias LED de
            última generación hasta materiales e insumos eléctricos esenciales
            para profesionales y empresas.
          </p>
        </div>

        <div className="shadow-sm inset-shadow-sm bg-sky-100">
          <div className="flex justify-center items-center px-40">
           <div className="relative w-1/2 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:left-0 before:top-[5%] before:w-full before:h-[90%] before:bg-[url('https://videos.openai.com/vg-assets/assets%2Ftask_01k2519634fka9cydr20t8q117%2F1754663353_img_0.webp?st=2025-08-08T13%3A00%3A58Z&se=2025-08-14T14%3A00%3A58Z&sks=b&skt=2025-08-08T13%3A00%3A58Z&ske=2025-08-14T14%3A00%3A58Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=gJ%2Byi8ARTvozKKG2s9IGkUW4uAjbUU0KqHliNijfrF4%3D&az=oaivgprodscus')] before:bg-center before:bg-cover before:blur-[2px] before:rounded-xl">g
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

        <div>
          <div></div>
          <p></p>
        </div>
      </section>
    </>
  );
}

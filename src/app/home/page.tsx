import Image from "next/image";
import CarruselApp from "../components/CarruselApp";
import "../css/home.css"
import "../css/carrusel.css"


export default function page() {

  

  return (
    <>
      <CarruselApp/>

      <div className="mt-6 flex justify-center">
        <div className="border-t-2 border-b-2 border-gray-300 flex items-center gap-6 px-4 py-2 w-fit marcas">
            <img src="https://images.seeklogo.com/logo-png/10/2/philips-logo-png_seeklogo-108446.png" alt="" />
            <img src="https://acdn-us.mitiendanube.com/stores/383/963/products/logo-macroled-1-0693060a1f383417c717153700811580-640-0.png" alt="" />
            <img src="/litex.png" alt="" />
            <img src="https://promomejia.com/wp-content/uploads/2018/08/Logo-Chint-Mexico.png" alt="" />
        </div>
        </div>
    </>
  );
}

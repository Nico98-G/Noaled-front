"use client";
import dynamic from "next/dynamic";
import { FaWhatsapp } from "react-icons/fa";

const RecaptchaClient = dynamic(() => import("../components/RecaptchaClient"), {
  ssr: false, // ⬅️ importante: no se renderiza en el servidor
});

export default function Page() {
  return (
    <div className="grid grid-cols-1 px-5 justify-center content-center my-10 lg:grid-cols-2 lg:px-20">
      <main className="flex flex-col text-[20px] mr-2">
        <div className="text-center">
          Envíanos un mensaje o pedi tu presupuesto a nuestro
          <br />
          <br />
          <button className="bg-green-500 text-white px-2 py-1 rounded-lg justify-self-center flex items-center">
            <FaWhatsapp />
            <a
              href="https://wa.me/5493814146771"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
              WhatsApp
            </a>
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">o</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>

        <form
          action="https://submit-form.com/T6LpxKEBC"
          method="POST"
          className="flex flex-col gap-2 mb-10 lg:mb-0"
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@mail.com"
            className="bg-gray-100 rounded p-2"
            required
          />

          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="bg-gray-100 rounded p-2"
            required
          />

          <label>Mensaje</label>
          <textarea
            name="mensaje"
            id="mensaje"
            className="bg-gray-100 rounded p-2"
            required
          />

          <RecaptchaClient />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Enviar
          </button>

          <input type="hidden" name="_redirect" value="http://www.gruponoaled.com/contacto/exito" />
        </form>
      </main>
      <aside className="items-center justify-items-center lg:ml-2"> 
        <h2>Puedes llegar a nuestro local para conocernos personalmente</h2> 
        <br />
        <div className="w-[100%] flex justify-center"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.524995515191!2d-65.21612889009641!3d-26.823249376603396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dafb6cf70f1%3A0x4ca9107135c4ec29!2sNOALED%20SRL!5e0!3m2!1ses!2sar!4v1753364653243!5m2!1ses!2sar" className="w-[80%] h-[300px] border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> 
        </div> 
       </aside>
    </div>
  );
}

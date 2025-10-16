export default function Page() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="text-center border-5 border-blue-200 px-10 py-6 rounded-sm">
        <h1 className="mb-4 roboto-font text-xl">
          Gracias por comunicarte con nosotros
        </h1>
        <a
          href="/contacto"
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition text-white"
        >
          Volver
        </a>
      </div>
    </div>
  );
}

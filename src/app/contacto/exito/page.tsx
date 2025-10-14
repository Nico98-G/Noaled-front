export default function Page() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="text-center border-5 border-blue-200 px-10 py-6 rounded-sm">
        <h1 className="mb-4 font-semibold text-xl">
          El correo se envió con éxito
        </h1>
        <a
          href="/contacto"
          className="border border-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Volver
        </a>
      </div>
    </div>
  );
}

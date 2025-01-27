import { useState } from "react";
import HeroImg from "../assets/images/woman-dentist.webp";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", {
      nombre,
      apellidos,
      telefono,
      mensaje,
    });
  };
  return (
    <>
      <div className="formulario w-full py-5 md:py-14" id="contacto">
        <div className="container-formulario md:grid md:grid-cols-2 md:max-w-7xl m-auto">
          <div className="item-formulario hidden md:block bg-blue-500 relative">
            <img
              src={HeroImg}
              alt=""
              className="absolute bottom-0 h-[500px] left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="item-formulario">
            <h2 className="text-sky-500 font-semibold text-3xl text-center px-8">
              Dejános un mensaje y hagamos crecer tu clínica
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto p-5 bg-white rounded-md shadow-md border-2 my-3 md:grid md:grid-cols-2 md:gap-2"
            >
              <div className="mb-4 md:col-span-2">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="apellidos"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Apellidos:
                </label>
                <input
                  type="text"
                  id="apellidos"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Teléfono:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Horario de contacto"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Horario de contacto:
                </label>
                <input
                  type="text"
                  id="horario-contacto"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4 md:col-span-2">
                <label
                  htmlFor="mensaje"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4 md:col-span-2">
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-6 rounded block m-auto "
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

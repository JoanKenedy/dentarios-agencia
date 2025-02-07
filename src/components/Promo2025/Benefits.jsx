import { useEffect, useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

export const Benefits = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = 768;
  const toggleDropdown = (index) => {
    // Si el mismo dropdown se hace clic, se cierra; si no, se abre el nuevo
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const fotosChanges = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", fotosChanges);

    return () => {
      window.removeEventListener("resize", fotosChanges);
    };
  });

  return (
    <section
      className="w-full flex flex-col items-center gap-4 max-w-7xl bg-blue-500 py-10 my-10"
      id="beneficios"
    >
      <h2 className=" text-xl text-center text-white md:px-10 md:pt-7 md:text-3xl font-semibold leading-9">
        Descubre los beneficios que te ofrece contratar nuestros servicios
      </h2>
      <h4 className=" text-sm text-center text-white md:px-10 md:pt-7 md:text-3xl font-semibold ">
        Da click para ver más
      </h4>
      <div className="w-full ">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 max-w-6xl m-auto pb-10">
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between px-6"
              onClick={() => toggleDropdown(1)}
            >
              <span className="flex gap-3 items-center text-base   text-white  ">
                1.- Mayor visibilidad para captar nuevos pacientes
              </span>
              <MdKeyboardArrowDown className="text-white text-xl hidden md:block" />
            </div>
            {openDropdown === 1 && (
              <p className="px-10 text-white text-sm ">
                El 77% de los consumidores en México realizan búsquedas en
                Google antes de tomar decisiones sobre servicios locales,
                incluidos dentales. Posicionar una clínica en los primeros
                resultados de búsqueda garantiza que más personas encuentren tu
                consultorio, especialmente en búsquedas como "dentista cerca de
                mí" o "clínica dental en [ciudad]". <br /> Dato relevante: El
                46% de las búsquedas en Google tienen intención local, lo que
                significa que los usuarios buscan servicios o negocios cercanos.
                (Fuente: Think with Google)
              </p>
            )}
          </li>
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between px-6 "
              onClick={() => toggleDropdown(2)}
            >
              <span className="flex gap-3 items-center text-base   text-white ">
                2.- Incremento de la credibilidad y confianza
              </span>
              <MdKeyboardArrowDown className="text-white text-xl hidden md:block" />
            </div>
            {openDropdown === 2 && (
              <p className="px-10 text-white text-sm ">
                Tener una buena posición en Google y contar con reseñas
                positivas mejora la percepción de tu clínica. Los pacientes
                suelen confiar más en los consultorios que aparecen en los
                primeros lugares y cuentan con reseñas verificadas. <br /> Dato
                relevante: El 88% de los consumidores confían en las reseñas en
                línea tanto como en recomendaciones personales. En México, los
                usuarios buscan reseñas antes de decidirse por un dentista.
                (Fuente: BrightLocal)
              </p>
            )}
          </li>
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between px-6 md:gap-6 "
              onClick={() => toggleDropdown(3)}
            >
              <span className="flex gap-3 items-center text-base  text-white   ">
                3.- Aumento en citas agendadas y conversiones
              </span>
              <MdKeyboardArrowDown className="text-white text-xl hidden md:block" />
            </div>
            {openDropdown === 3 && (
              <p className="px-10 text-white text-sm">
                Un sitio web optimizado para búsquedas locales en Google puede
                traducirse en más consultas agendadas. Tener tu clínica en
                Google Maps y destacarte con palabras clave específicas (por
                ejemplo, "blanqueamiento dental Monterrey") aumenta
                significativamente el tráfico y las conversiones. <br /> Dato
                relevante: Según Google, los listados locales bien optimizados
                generan hasta un 70% más de visitas a la ubicación física y el
                doble de llamadas telefónicas en comparación con aquellos que no
                están optimizados.
              </p>
            )}
          </li>
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between px-6"
              onClick={() => toggleDropdown(4)}
            >
              <span className="flex gap-3 items-center text-base   text-white ">
                4.- Segmentación precisa para llegar al público adecuado
              </span>
              <MdKeyboardArrowDown className="text-white  hidden md:block md:text-xl" />
            </div>
            {openDropdown === 4 && (
              <p className="px-10 text-white text-sm ">
                Facebook e Instagram permiten segmentar anuncios de manera muy
                específica, llegando a personas interesadas en servicios
                dentales según su ubicación, edad, intereses o incluso
                comportamiento en línea. Esto es ideal para odontólogos que
                desean atraer pacientes locales. <br /> Dato relevante: En
                México, el 81% de los usuarios de redes sociales acceden
                diariamente a Facebook e Instagram, siendo plataformas clave
                para alcanzar a más de 60 millones de personas activas en estas
                redes. (Fuente: We Are Social, 2023)
              </p>
            )}
          </li>
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between px-6"
              onClick={() => toggleDropdown(5)}
            >
              <span className="flex gap-3 items-center text-base text-white ">
                5.- Generación de confianza con contenido visual
              </span>
              <MdKeyboardArrowDown className="text-white text-xl hidden md:block" />
            </div>
            {openDropdown === 5 && (
              <p className="px-10 text-white text-sm ">
                Estas plataformas son altamente visuales, permitiendo mostrar
                resultados de tratamientos (como blanqueamientos o carillas) a
                través de fotos, videos o testimonios. Esto ayuda a construir
                confianza y atraer a pacientes al demostrar la calidad del
                trabajo. <br /> Dato relevante: Los anuncios con contenido
                visual generan un 40% más de interacción en Instagram y un 30%
                en Facebook. En el sector dental, imágenes de "antes y después"
                o videos explicativos generan un fuerte impacto. (Fuente:
                Hootsuite)
              </p>
            )}
          </li>
          <li className="text-justify ">
            <div
              className="button-benefits flex justify-between  px-6"
              onClick={() => toggleDropdown(6)}
            >
              <span className="flex gap-3 items-center text-base  text-white ">
                6.- Incremento en citas mediante estrategias de conversión
              </span>
              <MdKeyboardArrowDown className="text-white text-xl hidden md:block" />
            </div>
            {openDropdown === 6 && (
              <p className="px-10 text-white text-sm ">
                Con herramientas como botones de llamada directa, formularios de
                contacto o enlaces a WhatsApp, es posible convertir a usuarios
                interesados en pacientes reales de forma rápida y sencilla.{" "}
                <br /> Dato relevante: El 65% de los usuarios de Facebook e
                Instagram en México interactúan con un negocio local a través de
                la plataforma al menos una vez al mes. Las campañas optimizadas
                pueden aumentar hasta en un 70% el número de citas agendadas.
                (Fuente: Statista, Facebook Business)
              </p>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

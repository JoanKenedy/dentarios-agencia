import { ContactButton } from "../ContactButton";
import HeroImage from "../../assets/images/hero.webp";

export const Hero = () => {
  return (
    <section
      className="w-full max-w-7xl grid grid-cols-1 place-items-center gap-10 py-8  md:grid-cols-2"
      id="inicio"
    >
      <div className="absolute w-full max-w-[500px] md:max-w-[650px] h-[300px] rounded-full bg-gradient-to-br  from-[#5454D4]/90 to-[#5454D4]/80 blur-3xl top-20 left-0 md:-left-60 md:rotate-[5deg] -z-[2] md:top-36 md:h-[400px] lg:from-primaryBlue/30 lg:to-[#7835FD]/30 lg:max-w-[1200px] lg:h-[300px]"></div>
      <article className="flex flex-col gap-6">
        <h1 className="uppercase text-center mt-5 text-white md:text-blue-600  text-2xl font-semibold w-full leading-6 lg:text-4xl md:text-start lg:leading-[3rem] md:mt-11">
          ¡Despierta Tu Negocio al Éxito Digital con Nuestra Promoción
          Exclusiva! <br />
        </h1>

        <p className="text-[#13151a]/80">
          Impulsa tu presencia online con una solución completa: diseño de
          sitios web, campañas efectivas en Google Ads y estrategias en redes
          sociales. Aprovecha nuestra promoción exclusiva y lleva tu negocio al
          siguiente nivel con herramientas que realmente hacen la diferencia.
          ¡Es momento de destacar en el mundo digital!
        </p>
        <ContactButton
          bg="bg-green-500"
          classList="text-base w-[150px] md:w-[200px] py-3 text-center md:text-xl"
        />
        <div className="flex gap-6  relative md:flex-row md:justify-start">
          <div className="flex flex-col gap-1">
            <h2 className="text-blue-600  text-4xl font-semibold md:text-3xl lg:text-4xl">
              1.5M+
            </h2>
            <p className="text-sm text-[#13151a]/80">
              Clics <br /> Recibidos
            </p>
          </div>
          <div className="flex  flex-col gap-1">
            <h2 className="text-blue-600 text-4xl font-semibold md:text-3xl lg:text-4xl">
              36M+
            </h2>
            <p className="text-sm text-[#13151a]/80">
              Tráfico <br /> Generado
            </p>
          </div>
          <span className="text-xs absolute -bottom-4 left-4 text-[#13151a]/80 md:left-0">
            *Datos obtenidos del 2017 a 2024
          </span>
        </div>
      </article>

      <article className="w-full grid place-content-end md:place-content-start lg:place-content-end">
        <img
          src={HeroImage}
          width="1352"
          height="1352"
          alt="Hero Image"
          loading="eager"
          className="w-full max-w-[480px] rounded-b-full rounded-ss-[80rem] rounded-se-[80rem] shadow-xl "
        />
      </article>
    </section>
  );
};

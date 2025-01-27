import { useEffect, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";

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
      <div className="w-full ">
        {width < mobile ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-6xl m-auto pb-10">
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(1)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  1 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 1 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(2)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  2 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 2 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(3)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  3 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 3 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(4)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  4 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 4 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(5)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  5 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 5 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
            <li className="text-justify ">
              <div
                className="button-benefits flex justify-between px-5"
                onClick={() => toggleDropdown(6)}
              >
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  6 Beneficio
                </span>
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>
              {openDropdown === 6 && (
                <p className="px-10 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae quam numquam id deserunt ea, distinctio tempora
                  fuga, quaerat delectus autem excepturi harum? Sit repellat
                  facere possimus hic expedita laborum!
                </p>
              )}
            </li>
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-6xl m-auto pb-10">
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  1 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  2 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  3 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  4 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  5 Beneficio
                </span>{" "}
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
            <li className="text-justify ">
              <div className="button-benefits flex justify-between px-5">
                <span className="flex gap-3 items-center text-xl md:text-3xl font-extrabold text-white ">
                  6 Beneficio
                </span>
                <FaPlusCircle className="text-white font-bold text-xl" />
              </div>

              <p className="px-10 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quae quam numquam id deserunt ea, distinctio tempora
                fuga, quaerat delectus autem excepturi harum? Sit repellat
                facere possimus hic expedita laborum!
              </p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

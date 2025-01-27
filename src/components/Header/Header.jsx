import { useState } from "react";
import Logo from "../../assets/images/logo-white.png";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { ContactButton } from "../ContactButton";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const MENU = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },

    {
      id: 2,
      name: "Beneficios",
      link: "#beneficios",
    },
    {
      id: 3,
      name: "Academy",
      link: "#historia",
    },
    {
      id: 5,
      name: "Promocion",
      link: "/promocion-inicio-2025",
    },
    {
      id: 4,
      name: "Testimonios",
      link: "#testimonios",
    },
  ];
  return (
    <>
      <nav className="bg-white h-auto relative">
        <div className="container-nav flex flex-row justify-between w-11/12 max-w-7xl m-auto py-2 items-center md:py-5 ">
          <a className="logo-header" href="/">
            <img src={Logo} alt="" className="w-40 md:w-64" />
          </a>
          <div
            className={`${
              isOpenMenu ? "left-0" : "-left-full"
            } absolute top-0 bg-sky-950 w-full h-screen z-50 duration-700 md:left-auto md:bg-transparent md:h-auto md:w-auto md:relative  `}
          >
            <ul className="flex justify-center items-center flex-col md:flex-row">
              <RiCloseLargeLine
                className="absolute z-40 text-white top-5 right-5 text-xl md:hidden"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />

              {MENU.map((data, index) => (
                <li
                  className="pt-14 text-white text-lg md:text-slate-900 md:pt-2 md:mx-5"
                  key={index}
                >
                  <a
                    href={data.link}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    rel="noreferrer noopener"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <ContactButton bg="bg-blue-600 mt-14 md:mt-0" />
            </ul>
          </div>

          <div
            className="bar-menu md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <CgMenuRight className="h-12 w-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

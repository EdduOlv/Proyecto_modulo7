import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import UserContext from "../../contexts/users/UserContext";

export const Header = () => {
  const ctx = useContext(UserContext);
  const { logout, user } = ctx;
  const [click, setClick] = useState(false);
  console.log(ctx);
  
  const handleClick = () => {
    setClick(!click);
  };
  const hiddenMenu = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-1">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/">Inicio</Link>
          </li>
          {user?.username? (
            <>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link to="/perfil">Perfil</Link>
              </li>

              <li
                onClick={() => {
                  logout();
                }}
                className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              >
                <Link to="/">Cerrar sesión</Link>
              </li>
            </>
          ) : (
            <>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link to="/registro">Registro</Link>
              </li>

              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link to="/iniciar-sesion">Iniciar sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  

  return (
    <div>
      <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Libros</span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <Link to="/">Inicio</Link>
                </li>
                {user?.username? (
                  <>
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                      <Link to="/perfil">Perfil</Link>
                    </li>

                    <li
                      onClick={() => {
                        logout();
                      }}
                      className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
                    >
                      <Link to="/">Cerrar sesión</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                      <Link to="/registro">Registro</Link>
                    </li>

                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                      <Link to="/iniciar-sesion">Iniciar sesión</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div>
            <div>{click && hiddenMenu}</div>
          </div>
          <button onClick={handleClick} className="block sm:hidden transtion">
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </div>
  );
};

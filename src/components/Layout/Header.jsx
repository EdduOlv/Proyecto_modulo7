import React from "react";
import { Link } from "react-router-dom";
// import UserContext from "../../contexts/users/UserContext";

export const Header = () => {
//   const ctx = useContext(UserContext);

//   const { logout, user } = ctx;

return (
    <div>
        <h3>
            esto es el header
        </h3>
      <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/registro">Registro</Link>
        </li>
        <li>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
        </li>
        {/* {user?.username ? (
          <>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li
              onClick={() => {
                // logout();
                console.log("se cierra sesion");
                
              }}
            >
              <Link to="#">Cerrar sesión</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
            <li>
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </li>
          </>
        )} */}
      </ul>
    </div>
  );
}

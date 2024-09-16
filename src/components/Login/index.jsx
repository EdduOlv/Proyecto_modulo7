import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/users/UserContext";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const userCtx = useContext(UserContext);

  const { loginUser, authStatus, verifyingToken } = userCtx;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    verifyingToken();

    if (authStatus) {
      props.history.push("/perfil");
    }
  }, [authStatus]);

  if (authStatus) return null;

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    loginUser(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Iniciar Sesion
          </h1>
          <hr className="mt-3" />
          <form
            onSubmit={(e) => {
              sendData(e);
            }}
          >
            <div className="mt-3">
              <label for="username" className="block text-base mb-    2">
                Correo
              </label>
              <input
                id="email-address"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="email"
                type="text"
                autocomplete="email"
                required
                placeholder="Ingresa tu Correo..."
              />
            </div>
            <div className="mt-3">
              <label for="password" className="block text-base mb-2">
                Contraseña
              </label>
              <input
                id="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                autocomplete="current-password"
                required
                placeholder="Ingresa tu Contraseña..."
              />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div>
                <label>¿No posees una cuenta?</label>
              </div>
              <div>
                <a href="#" className="text-indigo-800 font-semibold">
                <Link to="/registro">Registrate</Link>
                </a>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              >
                <i class="fa-solid fa-right-to-bracket">
                </i>Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* <div>
        <div>
          <div>
            <h2>Iniciar sesión</h2>
          </div>
          <form
            onSubmit={(e) => {
              sendData(e);
            }}
          >
            <input type="hidden" name="remember" value="true" />
            <div>
              <div>
                <label for="email-address">Tu correo</label>
                <input
                  id="email-address"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="Tu correo"
                />
              </div>
              <div>
                <label for="password">Password</label>

                <input
                  id="password"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="password"
                  autocomplete="current-password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button type="submit">Comenzar</button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

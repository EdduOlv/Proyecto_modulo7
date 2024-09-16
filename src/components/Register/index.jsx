import React, { useState, useContext } from "react";

import UserContext from "../../contexts/users/UserContext";
import { Link } from "react-router-dom";

export const Register = () => {
  const userCtx = useContext(UserContext);

  const { registerUser } = userCtx;

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    registerUser(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Registrate
          </h1>
          <hr className="mt-3" />
          <form
            onSubmit={(e) => {
              sendData(e);
            }}
          >
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Tu Usuario..."
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Tu Correo..."
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Tu Contraseña..."
              />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div>
                <label>¿Posees una cuenta?</label>
              </div>
              <div>
                <a href="#" class="text-indigo-800 font-semibold">
                  <Link to="/iniciar-sesion">Iniciar sesión</Link>
                </a>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              >
                <i className="fa-solid fa-right-to-bracket"></i>Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* `
      <div>
        <div>
          <h2>Crear cuenta</h2>
        </div>

        <div>
          <div>
            <form
              onSubmit={(e) => {
                sendData(e);
              }}
            >
              <div>
                <label htmlFor="email">Nombre de usuario</label>
                <div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>

              <div>
                <button type="submit">Registrarme</button>
              </div>
            </form>
          </div>
        </div>
      </div>
       */}
    </>
  );
};

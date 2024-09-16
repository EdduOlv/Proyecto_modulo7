import React, { useContext } from "react";
import UserContext from "../../contexts/users/UserContext";
import UserIcon from "../../assets/user-icon.jpg"

export const Profile = () => {
  const ctx = useContext(UserContext);

  const { user } = ctx;

  return (
    <>
      <div className="flex justify-center items-start min-h-screen mt-8">
        <div className="w-full h-auto mx-8 border border-gray-300">
          <div className="grid grid-cols-1 sm:grid-cols-11 grid-rows-6 gap-5">
            <div className="col-span-1 sm:col-span-9 row-span-4 sm:col-start-2 row-start-2">
              <div className="grid grid-rows-3 sm:grid-rows-3 sm:grid-flow-col gap-4 px-4 py-4 leading-10">
                <div className="p-4 rounded-xl row-span-3 sm:row-span-3">
                   <img src={UserIcon} alt="" />
                </div>
                <div className="p-4 w-full rounded-xl col-span-1 sm:col-span-2">
                  <h2>

                  INFORMACION DE USUARIO &nbsp;
                  </h2>
                </div>
                <div className="p-4 w-full rounded-xl col-span-1 sm:col-span-2">
                  <h3>Nombre de Usuario</h3>
                  <span>{user.username}</span>
                  &nbsp;
                </div>
                <div className="p-4 w-full  rounded-xl col-span-1 sm:col-span-2">
                  Correo: {user.email}
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

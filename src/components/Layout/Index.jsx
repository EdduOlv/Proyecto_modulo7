import React from 'react'


import { Outlet } from 'react-router-dom';
import { Header } from './Header';


export const Layout = () => {
    return (
        <div>
          <div>
            <div className="bg-slate-900">
            <Header />
            </div>
            <main className="w-full h-full">
              <Outlet />
            </main>
          </div>
        </div>
      );
}

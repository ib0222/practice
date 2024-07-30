import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
     <header className="fixed top-0 w-full bg-slate-900 h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
            <NavLink to={"/"} className="text-white text-lg font-semibold px-4 py-2">
              Home
            </NavLink>
          <nav className="flex justify-between items-center gap-x-4 h-full ">
            <div className="space-x-10">
              <NavLink
                to={"/products"}
                className="text-white text-lg font-semibold px-4 py-2"
              >
                Products
              </NavLink>
              <NavLink
                to={"/contact"}
                className="text-white text-lg font-semibold px-4 py-2"
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div className="mt-20">
    <div>
    <Outlet/>
    </div>
      
    </div>
      
    </>
   
  );
};

export default ClientLayout;

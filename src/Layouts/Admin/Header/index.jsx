import React from 'react'
import { Outlet,NavLink,Link } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
     <header className="top-0 w-full bg-red-900 h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
            <Link to={"/admin"} className="text-white text-lg font-semibold px-4 py-2">
              Dashboard
            </Link>
          <nav className="flex justify-between items-center gap-x-4 h-full mx-4">
            <div className="space-x-10">
              <NavLink
                to={"/admin/products"}
                className="text-white text-lg font-semibold px-4 py-2"
              >
                Products
              </NavLink>
              <NavLink
                to={"/admin/addproducts"}
                className="text-white text-lg font-semibold px-4 py-2"
              >
                Add Product
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div>
      
    <Outlet/>
    </div>
    </>
  )
}

export default AdminLayout
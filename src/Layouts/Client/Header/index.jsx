import React from 'react'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
    <div>ClientLayout</div>
    <Outlet/>
    </>
  )
}

export default ClientLayout
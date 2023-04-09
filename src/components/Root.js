import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Navigation/Navbar'

const Root = (uname) => {
  return (
    <div>
      <Home name={uname.name} />
      <Outlet />
    </div>
  )
}

export default Root

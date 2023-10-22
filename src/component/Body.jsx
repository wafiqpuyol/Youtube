import React from 'react'
import Header from './Header'
import SidebarContainer from './SidebarContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
        <Header/>
        <div className='flex h-[calc(100%-80px)] bg-black/95 overflow-y-auto'>
          <SidebarContainer/>
          <Outlet/>
        </div>
    </>
  )
}

export default Body
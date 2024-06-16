// layout component for the app for all pages
import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
          <Header />
              <Outlet />
          <Footer />
    </>
  )
}

export default Layout

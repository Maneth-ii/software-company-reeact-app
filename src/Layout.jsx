import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({children}) {
  const [theme , setTheme] = useState("light");

  return (
    <main data-theme={theme}>
      <Navbar setTheme={setTheme} />  
      {children}
      <Footer />
    </main>
  )
}

export default Layout
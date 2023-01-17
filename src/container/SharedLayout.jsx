import React from 'react'
import Navbar  from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const SharedLayout = ({children}) => {
 
  return (
    <div>
      <Navbar />
      <div className="grid  container mx-auto justify-center md:grid-cols-2 gap-8 px-4 py-4 my-6  h-full">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default SharedLayout
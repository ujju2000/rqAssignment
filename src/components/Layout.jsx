
import React from 'react'
import Aside from './Aside'
import Main from './Main'
import Navbar from './navbar/Navbar'

export default function Layout() {
  return (
    <div className='w-full h-full  rounded-[30px] flex md:flex-row flex-col  '>
        <Navbar />
        <Aside />
        <Main />
    </div>
  )
}

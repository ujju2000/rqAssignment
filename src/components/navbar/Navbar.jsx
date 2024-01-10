
import React , {useState, useEffect} from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import { FaRegBell } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import classes from './style.module.css';

export default function Navbar() {
    const [isNavbarHidden , setIsNavbarHidden] = useState(false);

    useEffect(() => {
        const handleScroll= () => {
            const scrollY = window.scrollY;
            const screenThreshold = document.body.scrollHeight - window.innerHeight;

            setIsNavbarHidden(scrollY >= screenThreshold);
        }
            window.addEventListener('scroll' , handleScroll);
            return () => {
                window.removeEventListener('scroll' , handleScroll);
            }
    } , [])

  return (
    <div className={`z-10 md:z-0 fixed bottom-0 h-24 md:h-full w-full md:relative p-2 md:w-[70px] md:h-full bg-white flex md:flex-col justify-start items-center font-bold text-2xl text-slate-500 md:rounded-l-[30px] ${isNavbarHidden ? 'hidden' :  '' }`}
    
    >
        <div className = 'my-4 flex md:flex-col justify-around '>
            <img src="assets/logo.png" alt="" className='h-7 w-7 hidden md:block ' />
            <IoIosSearch className='mt-6 ' />
        </div>

        <div className = 'my-10 basis-[70%] flex md:flex-col justify-around  md:justify-start items-center '>
            <IoHomeOutline className = 'my-4 shadow-lg bg-blue-800 text-white ' />
            <FaRegNewspaper className = 'my-4' />
            <CiViewList className = 'my-4' />
            <FaRegUser className = 'my-4' />
        </div>

        <div className = 'grow flex md:flex-col justify-between  items-center '>
            <div className= {`${classes.notification} sticky top-0 right-0`}>
                <FaRegBell />
            </div>
            <IoExitOutline className = 'hidden md:block' />
        </div>
    </div>
  )
}

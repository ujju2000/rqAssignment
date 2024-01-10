
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Aside() {
  return (
    <div className='bg-slate-100 flex flex-col p-4 w-10/12 md:w-[23%] h-full justify-start items-start pl-10'>

        <div className='my-5 w-full md:w-10/12 flex items-center '>
            <img src="assets/avatar.png" alt="" className='h-[70px] w-[70px] rounded-full mr-5'/> 
            <div className  = 'text-xl '>
                <h4 className='font-bold text-2xl '>Hi Mike,</h4>
                <p className='text-grey-500 '>welcome back</p>
            </div>
        </div>

        <div className = 'basis-1/3 w-full flex flex-col justify-between '>
            <p className='font-bold '>Today</p> 
            <h1 className='font-extrabold text-2xl '>$19,892</h1>
            <span className='font-bold text-slate-400 text-[13px]'>Account Balance</span>
            <div className = ' flex justify-between items-center md:inline'>
                <div className = 'mt-4 '>
                    <h3 className='font-extrabold text-xl'>$4000</h3>
                    <span className='font-bold text-slate-400 text-[13px]' >Year-to-Date <span className = 'hidden md:inline'>Contribution</span>
                    </span>
                </div>
                <div className='mt-5 '>
                    <h3 className='font-extrabold text-xl'>$1,892</h3>
                    <span className='font-bold text-slate-400 text-[13px]' >Total Interest</span>
                </div>
            </div>

            <button className = 'my-10 w-10/12 md:w-[150px] h-[50px] mx-auto text-center p-4 bg-blue-700 text-white capitalize rounded-lg flex justify-center font-bold  items-center '>i want to
            <IoIosArrowDown />
                 </button>
        </div>

        <div className = 'basis-1/3 flex flex-col text-gray-500 capitalize font-semibold  '>
            <span className = 'my-2 text-gray-700 font-bold text-xl'>
                Recent transactions 
            </span>

            <div>
                <span className='font-bold text-slate-400 text-[13px]' >2020-08-07</span>
                <h3 className = 'font-bold text-gray-900 '>Withdrawl Transfer to Bank-XXX11</h3>
                <hr  className='h-1 bg-gray-300 my-5'/>
            </div> 

            <div>
                <span className='font-bold text-slate-400 text-[13px]' >2020-07-21</span>
                <h3 className = 'font-bold text-gray-900 '>Withdrawl Transfer to Bank-XXX11</h3>
                <hr  className='h-1 bg-gray-300 my-5'/>
                
            </div> 

            <div>
                <span className='font-bold text-slate-400 text-[13px]' >2020-07-16</span>
                <h3 className = 'font-bold text-gray-900 '>Withdrawl Transfer to Bank-XXX11</h3>
                <hr  className='h-1 bg-gray-300 my-5'/>
                
            </div> 
        </div> 



    </div>
  )
}

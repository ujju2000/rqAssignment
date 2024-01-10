import React, {useState} from 'react' 
import Chart from './chart/Chart'
import { IoIosArrowDown } from "react-icons/io";
import Pi from './Pi';
import { FaChevronRight } from "react-icons/fa";

export default function Main() {
  const [retirementAge , setRetirementAge] = useState(65);
  const [contribution, setContribution] = useState(30);

  const handleRetirement = (e) => {
    setRetirementAge(e.target.value);
  }
  const handleContribution = (e) => {
    setContribution(e.target.value);
  }

  return (
    <div className = 'grow flex md:flex-row flex-col bg-white p-7 rounded-md justify-around'>
      <div className='flex flex-col '>
          <h6 className = 'font-bold text-blue-600 '>Retirement Income</h6>

          <h4 className = 'font-bold text-2xl mb-6'>Starting year 2056</h4>

          <div className='md:flex justify-between items-start '>
              <div>
                <span className='font-bold text-slate-900 text-2xl my-2' >$300,000</span>
                <h3 className = 'font-bold text-gray-400 my-2'>My Goal</h3>
                <hr  className='w-full md:w-10/12 h-1 bg-blue-500 my-3'/>
              </div>
              {/* <div className = 'flex md:inline flex-row justify-between items-center mt-5 '> */}
                <div >
                  <span className='font-bold text-slate-900 text-2xl my-2 ' >59%</span>
                  <h3 className = 'font-bold text-gray-400 my-2'>Goal Acheived</h3>
                  <hr  className='w-full md:w-10/12 h-1 bg-blue-500 my-3'/>
                </div>

                <div >
                  <span className='font-bold text-slate-900 text-2xl my-2' >$300</span>
                  <h3 className = 'font-bold text-gray-400 my-2'>Est. Monthly Income</h3>
                  <hr  className='w-full md:w-10/12 h-1 bg-blue-500 my-5'/>
                </div>
              {/* </div> */}

          </div>

          <div>
            <h3 className='font-semibold '>Contribution Overtime</h3>
              <Chart />
             
          </div>

          <div>
            <h2 className='font-bold mt-7 capitalize text-xl '>How do i compare to my peers</h2>
            <span className = 'text-gray-400 font-semibold '>These numbers represent current goal achievements</span>

            <div className = 'flex md:flex-row flex-col md:justify-between md:items-center '>
              <div className = 'flex flex-col '>
                <h4 className = 'font-bold my-2 '>Age  : <span className = 'font-semibold text-gray-600 '>Under 30 <IoIosArrowDown className = 'inline-block' /> </span></h4>
                <hr className = 'h-[1px] bg-gray-400' />
 
                <h4 className = 'font-bold my-2 '>Salary  : <span className = 'font-semibold text-gray-600 '>K20 - K30  <IoIosArrowDown className = 'inline-block'/> </span></h4>
                <hr className = 'h-[1px] bg-gray-400' />

                <h4 className = 'font-bold my-2 '>Gender  : <span className = 'font-semibold text-gray-600 '>Male <IoIosArrowDown className = 'inline-block'/> </span></h4>
                <hr className = 'h-[1px] bg-gray-400'/>        
              </div>

              <div className = 'flex flex-row '>
                
                <div className='font-bold text-gray-700 text-center relative'>
                  <Pi angle = {273.6} />
                  <h2 className = 'absolute  left-[30%] '>Average</h2>
                </div>

                <div className='font-bold text-gray-700 text-center relative'>
                  <Pi angle = {342} />
                    <h2 className = 'absolute left-[30%] '>Top</h2>
                </div>

                <div className='font-bold text-gray-700 text-center relative'>
                  <Pi angle= {212.4} />
                  <h2 className = 'absolute left-[30%] '>Me</h2>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div>
      <div className = 'relative w-[95%] h-min bg-slate-50 p-4 mt-10 md:mt-0 rounded-lg flex flex-col justify-around '>
          <h1 className ='font-bold my-4 '>Retirement Strategy</h1>

          <div className = ''>
            <h3 className='font-semibold my-2 text-[15px]'>Employeement contribution </h3>
            <input type="range" name="" id="" 
              max = {30}
              min = {0}
              onChange = {handleContribution}
              className = 'shadow-lg bg-white border-blue-500 accent-blue-500 h-1 border-none outline-none '
            />
            <span className = 'bg-white ml-3 px-2 py-1 rounded-md '>{contribution}</span>
          </div>

          <div>
            
            <h3>Retirement Age</h3>
            <input type="range" name="" id="" 
              max = {80}
              min = {20}
              onChange= {handleRetirement}
              className = 'shadow-lg bg-white border-blue-500 accent-blue-500 h-1 border-none outline-none'
            />
            <span className='bg-white ml-3 px-2 py-1 rounded-md '>{retirementAge}</span>
          </div>

          <hr className='h-1 bg-gray-100 my-5 '/>

          <div className = 'font-bold text-gray-500 flex justify-between items-center text-[12px] my-3'>
            <h6>Employer Contribution</h6>
            <span>8.4%</span>
          </div>

          <div className = 'font-bold text-gray-500 flex justify-between items-center text-[12px] my-5 '> 
            <h6>Interest Rate</h6>
            <span>5%</span>
          </div>

          <button className = 'fixed md:static bottom-0 left-0 w-full md:w-10/12 bg-blue-700 md:rounded-md md:mx-auto px-5 py-2 text-white text-center '>Update</button>

          <div className = 'hidden md:flex items-center text-blue-500 font-semibold justify-center  my-10 '>
            View Help Docs  <FaChevronRight size = {10}/>
          </div>
      </div>
      <div className = 'md:block hidden w-full my-5 border-l-2 border-blue-700 p-2 '>
            <p className='text-gray-600 '>Are you considering a <br /><span className = 'text-gray-900 font-bold '>Housing Advance</span></p>
            <p className='text-gray-400 text-[15px]'>Limited time reduced interest</p>

            <button className='text-blue-500 flex items-center justify-around mt-5 '>Learn More <FaChevronRight /> </button>
          </div>
      </div>
    
    </div>

  )
}

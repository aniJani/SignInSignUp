import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div >
      <Header />
      <div className='flex flex-col w-full h-[auto]' >
        <div className='flex flex-row w-full h-[65vh]' >
            <div className='flex flex-col align-middle justify-center space-y-5 items-center w-full h-full bg-cover bg-no-repeat bg-center bg-[url("https://api.openverse.engineering/v1/images/40b4569a-fa8b-4846-a501-7315453660be/thumb/")]'>
              <div className= 'flex text-white font-extrabold tracking-widest font-serif'>
                  Company Name
              </div>
              <div className='flex text-white font-sans italic tracking-wider  items-center '>
                  A little discription
              </div> 
            </div>
        </div>
        <div className='flex flex-row w-full h-[40vh] '>
          <div className='flex flex-col align-top items-center w-full h-full pt-12 bg-slate-200 gap-2' >
            <div className= 'flex text-black font-extrabold tracking-widest font-serif'>
             WELCOME 
            </div>
            <hr className="w-[8rem] border-zinc-950" />  
            <div className= 'flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
              A brief description
            </div>  
          </div>
        </div>
        <div className='flex flex-row w-full h-[60vh] '>
          <div className='absolute flex flex-col align-top items-center w-full h-full pt-12 bg-slate-400 gap-2' >
            <div className= 'relative flex text-black font-extrabold tracking-widest font-serif'>
             Try Without Sign In
            </div>
            <hr className="w-[14rem] border-zinc-950" />  
            <div className= 'relative flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
              <button className=' hover:text-gray-900'>Guest</button>
            </div>  
            <div className= 'relative flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
                Guest Access Interface after design submitted by Janit
            </div> 
          </div>
          
        </div>
        <div className='relative flex flex-row w-full h-[40vh] '>
          <div className='flex flex-col align-top items-center w-full h-full pt-12 bg-gray-300 gap-1' >
            <div className= 'flex text-black font-extrabold tracking-widest font-serif'>
             About
            </div>
            <hr className="w-[6rem] border-zinc-950" />  
            <div className= 'flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
              A brief description
            </div>  
            <div className= 'flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
              Sign In and try for free!!
            </div> 
          </div>
        </div>
        <div className='relative flex flex-row w-full h-[40vh] '>
          <div className='flex justify-around align-middle w-full h-full pt-12 bg-gray-400 gap-1' >
            <div className= 'flex text-black font-extrabold tracking-widest font-serif'>
                a1
            </div>
            
            <div className= 'flex text-[#333333] font-bold tracking-wide font-serif'>
                a2
            </div>  
            
          </div>
        </div>

      </div>
    </div>
  )
}

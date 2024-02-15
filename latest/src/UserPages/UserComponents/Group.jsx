import React from 'react'
import Sidenav from "../HomePageComponents/Sidenav"
import { useState } from 'react';
import Modal from './Modal'
function Group() {
  

  const [buttonPopup, setButtonPopup] = useState(false);
  

  return (
    <div>
        <Sidenav />
        <div className='overflow-clip'>

        <div className='fixed w-full max-w-[100%] left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
            <div className='flex flex-row items-center w-[70%] justify-center'>
                Hi welcome to your Group
            </div>
            <div className='flex flex-row items-center '>
              <button onClick={() => setButtonPopup(true)} >
                Invite Friends
              </button>             
            </div>
        </div>

        <div className='fixed w-full items-center left-[12rem] flex flex-row h-[2rem] gap-4 top-[4rem] z-0 bg-[#a8acaa]'>
          
          <div className='flex w-[20%]  justify-center '>
                Members 
          </div>
          <div className='flex w-[60%] justify-center'>
                Assigned Task
          </div>

        </div>
        <div className='fixed w-full left-[12rem] flex flex-row h-full gap-4 top-[6rem] z-0 bg-[#9eeac2]'>
          
          <div className='flex w-[20%]  justify-center'>
               Janit
          </div>
          <div className='flex w-[60%]  justify-center '>
                DishWashing
          </div>
            <Modal trigger = {buttonPopup} setTrigger={setButtonPopup}>
            
                  <div className='relative top-[-16px] left-[6px]'>
                        Invite Friends
                  </div>
                  <div className='relative flex flex-col items-center justify-between mt-6'>
                  <input
                    className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                    type="text"
                    placeholder='Enter an email address'
                  />
                  <button className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={() => setButtonPopup(false)}>Send</button>
                  </div>
                  
          </Modal>

        </div>
        </div>
    </div>
  )
}

export default Group
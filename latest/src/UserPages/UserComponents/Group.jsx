import React, { useState } from 'react';
import Sidenav from "../HomePageComponents/Sidenav";
import Modal from './Modal';

function Group() {
  const [showNamePopup, setShowNamePopup] = useState(true);
  const [userName, setUserName] = useState('');
  const [roommateInputs, setRoommateInputs] = useState([]);
  const [showRoommateInputs, setShowRoommateInputs] = useState(false);
  const [taskInputs, setTaskInputs] = useState([]);
  const [showTaskInputs, setShowTaskInputs] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setShowNamePopup(false);
    setShowTaskInputs(true);
  };

  const handleRoommateChange = (e, index) => {
    const newRoommateInputs = [...roommateInputs];
    newRoommateInputs[index] = e.target.value;
    setRoommateInputs(newRoommateInputs);
  };

  const addRoommate = () => {
    setShowRoommateInputs(true);
    setRoommateInputs([...roommateInputs, '']);
  };

  const handleTaskChange = (e, index) => {
    const newTaskInputs = [...taskInputs];
    newTaskInputs[index] = e.target.value;
    setTaskInputs(newTaskInputs);
  };

  const addTask = () => {
    setTaskInputs([...taskInputs, '']);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setShowNamePopup(false);
  };

  return (
    <div>
      <Sidenav />
      <div className='fixed w-full max-w-[100%] left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
      </div>
      <div className='fixed w-full left-[12rem] flex flex-row h-full gap-4 top-[4rem] z-0 bg-[#9eeac2]'>
      </div>

      <div className='overflow-clip'>
        {showNamePopup ? (
          <Modal trigger={true} setTrigger={setShowNamePopup}>
            <div className='relative top-[-16px] left-[6px]'>
              Enter Your Name
            </div>
            <div className='relative flex flex-col items-center justify-between mt-6'>
              <input
                className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                type="text"
                placeholder='Enter your name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div>
                {showRoommateInputs && roommateInputs.map((input, index) => (
                  <div key={index}>
                    <input
                      className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                      type="text"
                      placeholder={`Enter roommate ${index + 1}'s name`}
                      value={input}
                      onChange={(e) => handleRoommateChange(e, index)}
                    />
                  </div>
                ))}
              </div>
              <div className='flex flex-row gap-6'>
              
              <button className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={() => { setShowRoommateInputs(true); addRoommate(); }}>Add Teammate</button>
              <button className='w-24 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={handleNameSubmit}>Next</button>
              </div>
             
            </div>
          </Modal>
        ) : (
          <>
            
            <div className='fixed w-full max-w-[100%] left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
              <div className='flex flex-row items-center w-[70%] justify-center'>
                Hi {userName}, welcome to your Group
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
              <Modal trigger={true} setTrigger={setShowNamePopup}>
                <div className='relative top-[-16px] left-[6px]'>
                  Enter Task
                </div>
                <div className='relative flex flex-col items-center justify-between mt-6'>
                  {showTaskInputs && taskInputs.map((input, index) => (
                    <div key={index}>
                      <input
                        className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                        type="text"
                        placeholder={`Enter task ${index + 1}`}
                        value={input}
                        onChange={(e) => handleTaskChange(e, index)}
                      />
                    </div>
                  ))}
                  <div className='flex flex-row gap-6'>
                    <button className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={addTask}>Add Task</button>
                    <button className='w-24 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={handleTaskSubmit}>Submit</button>
                  </div>
                  
                </div>
              </Modal>
            </div>

           
          </>
        )}
      </div>
    </div>
  );
}

export default Group;

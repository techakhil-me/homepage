import React from 'react'

function Sponsors() {
  return (
    <div className='w-full flex flex-col justify-center my-12  items-center '>
      <p className='text-4xl text-[#CDCDCD] font-bold p-8 pb-1 font-chakrapetch'>SPONSORS</p>
      <p className='text-[#CDCDCD] pb-10 font-chakrapetch'>Join us on a dynamic journey, embracing emerging </p>
       <div className='w-1/2 flex flex-row justify-around items-center text-[#CDCDCD]'>
        <div className=' p-10 border border-solid border-[#CDCDCD] bg-[#ffffff1a]'>
          <p className='text-[#CDCDCD]'>Sponsor 1</p>
        </div>
        <div className='p-10 border border-solid border-[#CDCDCD] bg-[#ffffff1a]'>
          <p className='text-[#CDCDCD]'>Sponsor 1</p>
        </div>
        <div className='p-10 border border-solid border-[#CDCDCD] bg-[#ffffff1a]'>
          <p className='text-[#CDCDCD]'>Sponsor 1</p>
        </div>
       </div>
    </div>
  )
}

export default Sponsors

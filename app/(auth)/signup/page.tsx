import Auth from '@/components/auth/Auth'
import React from 'react'

function Signup() {
  
  return (
    <main className=' w-fit lg:w-[65%] md:max-lg:w-[75%] max-md:w-[80%]'>
         <h5 className='self-start max-lg:text-2xl  mb-2 text-3xl'>Hello,There👋<p className='underline decoration-green-300 decoration-4 rounded-sm '>Welcome to Hermes🦅</p> </h5>
        <Auth path={"signup"}/>
    </main>
    

  )
}

export default Signup
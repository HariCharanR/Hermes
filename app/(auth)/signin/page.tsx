import Auth from '@/components/auth/Auth'
import Link from 'next/link'
import React from 'react'

function Signin() {
  return (
    <main className=' w-fit lg:w-[65%] md:max-lg:w-[75%] max-md:w-[80%]'>
         <h5 className='self-start max-lg:text-2xl  mb-3 text-3xl'>Hello,There👋<p className='underline decoration-green-300 decoration-4 rounded-sm '>Enter your Credentials🔑</p> </h5>
        <Auth path={"signin"}/>
    </main>
    

  )
}

export default Signin
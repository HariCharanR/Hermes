'use client'


import Link from 'next/link'
import React from 'react'

function Auth({path} : {path : string}) {
  return (
    <div className='  w-full h-fit shadow-lg bg-gray-50 rounded-lg py-8 px-8 flex flex-col'>
    <div className=" flex flex-col ">
       <label className='mb-1 font-medium text-2xl'>
           Username
       </label>
       <input type='email' className='outline-none shadow-sm rounded-md p-3 mb-3 bg-gray-100' />
   </div>
   <div className=" flex flex-col ">
       <label className='mb-1 font-medium text-2xl'>
           Email
       </label>
       <input type='email' className='outline-none shadow-sm rounded-md p-3 mb-3 bg-gray-100' />
   </div>
   <div className=" flex flex-col mb-4 mt-2 ">
       <label className='mb-1 font-medium text-2xl'>
           Password
       </label>
       <input type='email' className='outline-none shadow-sm rounded-md p-3 mb-3 bg-gray-100' />
   </div>
   {path == "signin" ? <button className='w-[30%] p-2 rounded-md text-white font-semibold hover:shadow-md transition-shadow self-end text-xl bg-green-500 '>Sign in</button> :<button className='w-[30%] p-2 rounded-md text-white font-semibold hover:shadow-md transition-shadow self-end text-xl bg-green-500 '>Sign up</button>}
   <p className={`${path == 'signin' ? 'text-xs font-semibold mt-4':'hidden'} `}>Don't have an account,<Link className='underline decoration-green-300 decoration-4 rounded-sm transition-colors' href={"./signup"}>Create an account</Link></p>
</div>
  )
}

export default Auth
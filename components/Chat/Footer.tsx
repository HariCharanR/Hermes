import { Paperclip, SendHorizontal, Smile } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div
    className='w-full h-[6%] bg-zinc-100 absolute bottom-0 drop-shadow-lg p-1 flex items-center'
    >
        <div className="w-[20%] xl:w-[10%] py-2 h-full flex items-center justify-evenly">
        <div className="hover:bg-white transition-all p-2 rounded-md mx-1 border-2 ">
            <Smile className='text-black w-7 h-7'/>
            </div>
            <div className="hover:bg-white transition-all p-2 rounded-md mx-1 border-2 ">
            <Paperclip className='text-black w-7 h-7'/>
            </div>
        </div>
        <div className="flex-1  -p-2 h-full">
            <input type="text" className='outline-none w-full h-full rounded-md bg-zinc-100  p-4' placeholder='Enter your Message' />
        </div>
        <div className="w-[10%] xl:w-[5%] justify-end p-2 h-full flex items-center">
        <div className="hover:bg-white transition-all p-2 rounded-md  border-2 ">
            <SendHorizontal className='text-black w-7 h-7'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
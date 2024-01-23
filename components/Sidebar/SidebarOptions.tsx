import { Archive, CircleDashed, MessageCircleMore, Settings, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SidebarOptions() {
  return (
    <div className='w-[15%] bg-gray-300 drop-shadow-lg p-2 flex flex-col justify-between'>
        <div className="mt-3  min-h-[15%] h-fit flex flex-col items-center">
            <div className="mb-2  hover:bg-white transition-all p-1 rounded-md">
        <MessageCircleMore className='text-black w-6 h-6' />
            </div>
            <div className="mb-2  hover:bg-white transition-all p-1 rounded-md">
        <CircleDashed  className='text-black w-6 h-6'/>
            </div>
        </div>
        <div className=" min-h-[25%] h-fit flex flex-col justify-end items-center">
        <div className="mb-2 hover:shadow-lg hover:bg-white transition-all p-1 rounded-md">
        
        <Star className='text-black w-6 h-6' />
            </div>
            <div className="mb-2  hover:bg-white transition-all p-1 rounded-md">
        <Archive  className='text-black w-6 h-6'/>
            </div>  
            <div className="mb-2  hover:bg-white transition-all p-1 rounded-md">
        <Settings className='text-black w-6 h-6' />
            </div>
            <div className="mb-2  hover:bg-white transition-all p-1 rounded-full ">
                <Image alt="profile" width={30} height={30} className='aspect-square rounded-full object-contain' src={"/assets/profile_photo.jpg"}/>
            </div>
        </div>
    </div>
  )
}

export default SidebarOptions
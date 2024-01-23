import { Phone, Search, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='h-fit min-h-[5rem] w-full z-50 absolute bg-zinc-100 drop-shadow-md flex items-center'>
            <div className="w-[70%] lg:w-[75%] xl:w-[80%]  p-2 ml-2 flex">
            <Image
            alt="Chat Profile"
            width={60}
            height={30}
            className="aspect-square rounded-full"
            src={"/assets/profile_photo.jpg"}
          />
          <div className="w-fit ml-3">
                <h5 className='font-medium text-lg mb-1'>Chat Name</h5>
                <p className="text-gray-400">active now</p>
          </div>
            </div>
            <div className="flex-1 flex items-center justify-end  p-2">
            <div className="hover:bg-white transition-all p-2 rounded-md ml-2 border-2 ">
            <Search className='text-black w-7 h-7'/>
            </div>
            <div className="  hover:bg-white transition-all p-2 rounded-md  mr-2 border-2 ">
            <Video className='text-black w-7 h-7'/>
            </div>
            <div className="  hover:bg-white transition-all p-1 rounded-md mx-2">
            <Phone className='text-black w-7 h-7'/>
            </div>
            </div> 
        </header>
  )
}

export default Header
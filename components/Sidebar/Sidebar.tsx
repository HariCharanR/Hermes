import React from 'react'
import SidebarOptions from './SidebarOptions'
import SidebarChats from './SidebarChats'

function Sidebar() {
  return (
    <div className=' flex w-[35%] lg:max-xl:w-[30%] h-fit min-h-screen xl:w-[22%] max-sm:hidden'>
        <SidebarOptions/>
        <SidebarChats/>
        
    </div>
  )
}

export default Sidebar
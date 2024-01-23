import Footer from '@/components/Chat/Footer'
import Header from '@/components/Chat/Header'
import { Phone, Search, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className='flex-1 h-screen relative flex flex-col justify-between'> 
        <Header />
        <section className='-z-10 w-full h-full absolute '>
          <Image alt="chat background" src={"/assets/chat_back.png"} fill className=''/>
        </section>
        <Footer />
     </div>
  )
}

export default Home
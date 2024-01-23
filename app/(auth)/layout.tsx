import '@/app/globals.css'
import { Inter, Roboto_Mono } from "next/font/google"
import Image from 'next/image'
const inter = Inter({ subsets: ["latin"] }) 
const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className={`${inter.className} bg-dark-1 `}>
        <main className={`${roboto.className} flex h-screen`}>
        <section className='w-[55%] bg-gray-100 shadow-lg  h-screen flex flex-col  items-center justify-center max-md:w-full '>
        
        {children}
        </section>
        <section className='w-[45%]  relative -z-10 max-md:hidden'>
          <Image fill className=' object-contain' src="/assets/login_page.jpg" alt="Login Page" />
        </section>
        </main>
        
        </body>
    </html>
  )
}

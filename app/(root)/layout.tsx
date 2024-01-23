import '@/app/globals.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from "next/font/google"

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads clone using Next.js',
  }

  const roboto = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
  })

export default function RootLayout({
    children
} : {
    children : React.ReactNode
}) 
{

    return (
        <html lang='en'>
            <body className={`${roboto.className} bg-dark-1`}>
                <main className='flex  w-full  h-screen'>
                    <Sidebar />        
                {children}
                </main>


            </body>
        </html>
    )
}
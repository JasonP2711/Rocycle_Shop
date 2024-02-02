import Image from 'next/image'
import { Inter } from 'next/font/google'
import Img1 from '../image/Untitled design.png'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-t from-slate-50 to-slate-300 h-screen">
      {/* <Image
            src={Img1}
            alt="My Image"
            width={1500}
            height={300}
            className='w-/12 ml-52'
          /> */}
      </main>
    </>
  )
}

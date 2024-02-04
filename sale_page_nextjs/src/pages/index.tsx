import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider2 from '@/components/slider2'
import Img1 from '../image/slides/pexels-anastasia-shuraeva-8926948.jpg'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-t from-slate-50 to-slate-300 h-auto">
        <div>
         <div className='z-0'>
              <Slider2/>
          </div>
        </div>
          <div className=' h-auto '>
            <p className='flex items-center justify-center text-3xl'>Categories</p>
            <div>
              <ul className='md:mt-15 md:flex md:items-center md:justify-center md:flex-wrap  '>
                <li className='mr-20 mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center  text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
                <li className='mr-20 mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
                <li className=' mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
                <li className='mr-20 mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
                <li className='mr-20 mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
                <li className=' mt-10 w-80 h-60 border-2 border-neutral-900 hover:shadow-2xl'>
                  <p className='flex items-center justify-center text-xl font-bold'>Name</p>
                  <div className="pt-3 pl-8">
                <Image
                src={Img1}
                alt="My Image"
                width={250}
                height={250}
                className='transform hover:scale-110 transition duration-300'
                 />
            </div>

                </li>
              </ul>
            </div>
          </div>
        
      </main>
    </>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider2 from '@/components/slider2'
import Categories from '@/components/cycle_categoris'
import Service from '@/components/service'
import Img1 from '../image/slides/pexels-anastasia-shuraeva-8926948.jpg'




export default function Home() {
  return (
    <>
      <main className="bg-white h-auto">
        <div>
         <div className='z-0'>
              <Slider2/>
          </div>
        </div>
          <div>
            <Categories/>
          </div>
          <div className=''>
            <Service/>
          </div>
      </main>
    </>
  )
}

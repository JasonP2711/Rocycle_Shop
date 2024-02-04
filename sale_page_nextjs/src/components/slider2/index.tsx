import { useState } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Pagination, Autoplay,EffectFlip } from 'swiper/modules';
import Img1 from '../../image/slides/pexels-pavel-danilyuk-5807535.jpg'
import Img2 from '../../image/slides/pexels-pixabay-163491.jpg'
import Img3 from '../../image/slides/pexels-anastasia-shuraeva-8926948.jpg'
import Img4 from '../../image/slides/pexels-mike-1174103.jpg'
import Style from './style.module.css';


function Slider2(prop:{}){
    return(
        <>
            <main className={` ${Style.container}`}>
                <div className=" opacity-95">
                    <Swiper spaceBetween={10}
                    slidesPerView={1} 
                    pagination={true} 
                    modules={[Pagination, Autoplay, EffectFlip]}
                    autoplay={{ delay: 5000 }}
                    // className="mySwiper"
                    >
                    <SwiperSlide>
                            <Image
                                src={Img1}
                                alt="My Image"
                                width={1400}
                                height={1400}
                                className='brightness-50'
                            /> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Img2}
                                alt="My Image"
                                width={1400}
                                height={1400}
                                className='brightness-50'
                            /> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Img3}
                                alt="My Image"
                                width={1400}
                                height={1400}
                                className='brightness-50'
                            /> 
                        </SwiperSlide>     
                        <SwiperSlide>
                            <Image
                                src={Img4}
                                alt="My Image"
                                width={1400}
                                height={1400}
                                className='brightness-50'
                            /> 
                        </SwiperSlide>   
                    </Swiper>
                </div>
            
                <div className={`flex items-center justify-center`}>
                    <div className={`text-center ${Style.slogan}`}>
                        <p className="w-62 text-white font-semibold">Movement of adventure</p>
                        <button className=" border p-2 rounded-full text-base text-white bg-zinc-600 hover:bg-zinc-400	">Our product</button>
                    </div>
                </div>


            </main>
        </>
    )
}
export default Slider2
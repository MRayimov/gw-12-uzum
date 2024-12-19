import { Carousel } from '@material-tailwind/react'
import React from 'react'

const CarouselComponent = () => {
  return (
    <Carousel
    className=' w-[86%] h-[70%] rounded-[15px]'
    transition={{duration: 1 }}
    autoplay={true}
    loop={true}
    autoplayDelay={3000}
    >
        <img 
          src="https://images.uzum.uz/ct02ne34nkdilc6c52q0/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe70/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/ct03mgtpq3ggq63empd0/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/csu96ltpq3ggq63e69o0/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/ct3ekatpq3gujfcfidug/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/ct2ue9c5j42b32f3m4c0/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/csu46ubvgbkpg1nn41bg/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/ct2au1jvgbkpg1nobsr0/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
        <img 
          src="https://images.uzum.uz/ct2attbvgbkpg1nobsmg/main_page_banner.jpg" 
          alt="rasm 1"
          className='w-full h-full object-cover'  
        />
    </Carousel>
  )
}

export default CarouselComponent 
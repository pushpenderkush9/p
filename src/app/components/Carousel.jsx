'use client';
import React, { useState,useEffect } from 'react'
const slides=[
    {id:1,url:"/Carousel/pic-1.jpg",alt:"pic-1"},
    {id:2,url:"/Carousel/pic-2.jpg",alt:"pic-2"},
    {id:3,url:"/Carousel/pic-3.jpg",alt:"pic-3"},
    {id:4,url:"/Carousel/pic-4.jpg",alt:"pic-4"},
    {id:5,url:"/Carousel/pic-5.jpg",alt:"pic-5"},
]


export default function Carousel() {
    const[current,setCurrent]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 4000); // Change slide every 4 seconds
    
        return () => clearInterval(interval); // Clean up on unmount
      }, []);
    const nextSlide =()=>setCurrent((prev)=>(prev+1)%slides.length);
    const prevSlide =()=>setCurrent((prev)=>(prev-1 + slides.length)%slides.length);
  return (
    <div className='relative w-full   mx-auto overflow-hidden rounded-xl'>
        <div className='flex transition-transform duration-100'
        style={{transform:`translateX(-${current *100 }% )`}}>
            {slides.map((slide)=>(
                <div key={slide.id} className='w-full flex-shrink-0  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
                    <img
                    src={slide.url}
                    alt={slide.alt}
                    className='w-full h-full object-cover'
                    />
                    </div>
            ))}
            
        </div>
        <button
        onClick={prevSlide}
        className='absolute  left-2 top-1/2 transform -translate-y-1/2 text-white  px-3 py-1 rounded-full'
        >
            ◀
        </button>
        <button
        onClick={nextSlide}
        className='absolute  right-2 top-1/2 transform -translate-y-1/2 text-white  px-3 py-1 rounded-full'
        >
            ▶
        </button>

    </div>
  )
}

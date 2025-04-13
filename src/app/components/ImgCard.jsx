import React from 'react'
const data = [
    {
        id:1,
        img:"/FeaturedPic/foot-1.jpg",
        text:"Get a Best powered ai based scan ",
    },
    {
        id:2,
        img:"/FeaturedPic/foot-2.jpg",
        text:"Get a Best powered ai based scan ",
    },
    {
        id:3,
        img:"/FeaturedPic/foot-3.jpg",
        text:"Get a Best powered ai based scan ",
    },
    {
        id:4,
        img:"/FeaturedPic/foot-4.jpg",
        text:"Get a Best powered ai based scan ",
    },
]
export default function ImgCard() {
  return (
    <div className=' bg-green-50 min-h-screen flex flex-col items-center py-10 px-4'>
        {data.map((it ,index)=>(
            <div key={it.id}
            className='flex justify-center items-start gap-10 sm:gap-15 mb-10 w-full max-w-4xl'>
                <div className='-mt-6 flex-shrink-0'>
                    <img src={it.img}
                    alt={`it${it.id}`}
                    className='w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-xl shadow-[18px_12px_0_rgba(0,0,0,0.75)]' />
                </div>
                <div className='flex items-center w-full max-w-md h-44 sm:h-52 md:h-56 bg-[#FFECDB]  text-lg sm:text-xl font-bold rounded-xl shadow-[28px_22px_0_rgba(0,0,0,0.75)] p-6'>
                    {it.text}
                </div>
            </div>
        ))}

    </div>
  )
}

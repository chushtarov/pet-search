import React from 'react'
import left from '../../../public/search-now_left.png'
import right from '../../../public/search-now_right.png'
import { NavLink } from 'react-router-dom'

const AboutSerch = () => {


  return (
    <div className="w-[1200px] m-auto h-[286px] bg-slate-100 my-12 px-[40px] py-[15px]">
        <h1 className='text-[56px] text-center'>Попробуйте прямо сейчас</h1>
        <div className='flex justify-between'>
            <img src={left} alt="" />
            <button className="mt-10 w-[173px] uppercase h-[50px] text-white bg-[#f9961e] rounded-full text-sm hover:bg-[#fff] hover:text-[#f9961e] hover:border-orange-400 hover:border">Искать по фото</button>
            <button className="mt-10 w-[173px] uppercase h-[50px] text-[#f9961e] bg-[#fff] rounded-full text-sm hover:bg-[#f9961e] hover:text-white hover:border-orange-400 hover:border border border-orange-400"><NavLink to="/new">Создать объявление</NavLink></button>
            <img src={right} alt="" />
        </div>
    </div>
  )
}

export default AboutSerch
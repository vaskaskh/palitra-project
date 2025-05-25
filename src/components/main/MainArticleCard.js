import React from 'react'
import User from '../shared/User'


const MainArticleCard = ({...info}) => {
  return (
    <div className="max-w-[646px]">
        <header>
            <h2 className=" text-base md:text-lg font-semibold text-[#4E4E4E]">
                {info.title}
            </h2>
            <button className='hidden md:flex border py-[1.25px] px-2 mb-[20px] mt-[8px] text-[10.5px] rounded-md' >
                {info.type}
            </button>
        </header>
            <img src={info.image} className='w-full h-auto object-cover rounded-lg' alt="aaa"/>

        <footer>
            <h3 className=' text-[14px] md:text-base text-[#737373]'>{info.description}</h3>
            <User  { ...info } inlineUser/>
        </footer>

    </div>
  )
}

export default MainArticleCard
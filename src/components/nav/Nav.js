import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavTest = () => {

  const [width, setWindowWidth] = useState(window.innerWidth)

   useEffect(()=>{
  
      function handleWindowWidth(){
        setWindowWidth(window.innerWidth)
      }
  
  
      window.addEventListener("resize", handleWindowWidth )
    })
  

  return (
    <>
    {
        width <1321?(
          <>
      <div className="flex items-center justify-between px-4 py-2">
        <img
          src="../images/HeaderImg.png"
          alt="headerImg"
          className="w-8 h-12 bg-[#333] md:w-[72px] md:h-[76px] border-b-4 mb-auto object-cover"
        />

        <div className="flex items-center gap-2">
          <input
            placeholder="მოძებნე"
            className="border  max-w-[149px] h-6 px-2 rounded-xl"
          />
          <img src="../images/responsiveUser.png"  alt='' className="w-6 h-6" />
        </div>
      </div>

      <hr className="mt-[-8px] " />

      <div className="flex justify-center w-full gap-4 py-2 px-4 flex-wrap mb-[34px] text-[12px] md:text-base">
        <select className="border-none bg-transparent text-black focus:outline-none w-auto">
          <option value="">კატეგორიები</option>
        </select>
          <Link className="text-[#636363]">პოლიტიკა</Link>
          <Link className="text-[#636363]">მოდა</Link>
          <Link className="text-[#636363]">სპორტი</Link>
          <Link className="text-[#636363]">სპორტი</Link>
      </div>
    </>
        ):(
      <>
        <nav className="flex flex-wrap justify-around items-center px-4 py-2">            
          <img
           src="../images/HeaderImg.png"
           alt="headerImg"
           className="w-8 h-12 bg-[#333] md:w-[72px] md:h-[76px] border-b-4 object-cover"
          />

         <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex flex-wrap gap-2">
             <Link className="text-[#636363]">საზოგადოება</Link>
             <Link className="text-[#636363]">პოლიტიკა</Link>
             <Link className="text-[#636363]">ეკონომიკა</Link>
             <Link className="text-[#636363]">სპორტი</Link>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Link className="text-[#636363]">მეცნიერება</Link>
              <Link className="text-[#636363]">კულტურა</Link>
              <Link className="text-[#636363]">მოდა</Link>
              <Link className="text-[#636363]">ჯანმრთელობა</Link>
              <Link className="text-[#636363]">კულტურა</Link>
              <select className="border-none bg-transparent text-blackyy ">
               <option value="">მეტი</option>
              </select>
            </div>
        </div>

       
          <div className="flex items-center gap-4">
            
            <img src="../images/search.svg" alt="search" className="w-5 h-5" />  
            <img src="../images/Vector.svg" alt="usericon"className="w-[14px] h-[14px] mr-2"/>
              შესვლა
                
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md ">
              დაწერე სტატია
            </button>
          </div>
        </nav>

          <hr className="mt-[-12px] mb-[68px]" />
      </>
        )
    }
    </>
    
   
  )
}

export default NavTest
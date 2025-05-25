import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import news from "../../data/news.json";

const News = ({isTop}) => {
  
    const [width, setWindowWidth] = useState(window.innerWidth)

   useEffect(()=>{
  
      function handleWindowWidth(){
        setWindowWidth(window.innerWidth)
      }
  
  
      window.addEventListener("resize", handleWindowWidth )
    })
  

  return (
    <> 
    {isTop?(
      <main className="flex flex-col  p-4 mb-8">
      <div className="flex items-center mb-8">
        <span className="text-lg font-bold mr-3 whitespace-nowrap">სიახლეები</span>
        <span className="flex-grow h-px bg-gray-300"></span>
      </div>

      <div className="lg:hidden flex flex-col  gap-3" style={{alignItems:"center"}}>
        {news.slice(0, 3).map((card) => (
          <Card key={card.id} {...card} isSmallScreen/>
        ))}
      </div>

      <div className="hidden lg:flex flex-wrap justify-center align-middle gap-6">
        {news.map((card) => (
          <Card key={card.id} {...card}  />
        ))}
      </div>
    </main>
    ):(
      <>
       {
        width<768 ?(
           <main className="container mx-auto p-4">
        <div className="flex items-center  justify-centermb-8">
          <span className="text-lg font-bold mr-3 whitespace-nowrap">სიახლეები</span>
          <span className="flex-grow h-px bg-gray-300"></span>
        </div>

        <div className="  flex flex-col flex-wrap justify-center gap-6 mt-6" style={{alignItems:"center"}}>
          {news.slice(0,2).map((card) => (
            <Card key={card.id} {...card}  desc/>
          ))}
        </div>
      </main>
        ):(
          <main className="container mx-auto p-4">
        <div className="flex items-center mb-8">
          <span className="text-lg font-bold mr-3 whitespace-nowrap">სიახლეები</span>
          <span className="flex-grow h-px bg-gray-300"></span>
        </div>

        <div className="  flex flex-wrap justify-center gap-6">
          {news.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </main>
        )
       }
    </>
    )}
   </>
   
   
  );
};

export default News;

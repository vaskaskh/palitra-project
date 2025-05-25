import React from 'react'

const ReportiorInfo = () => {
  return (

 <div className='flex flex-col gap-4 relative max-w-[638px]'>
    <div className="p-4 flex flex-col gap-4">
    <img src="images/group-37.svg" alt="" className="h-24 w-11 absolute top-0 right-0" />

        <header >
            <p className='font-bold text-base md:text-2xl text-[#4E4E4E]'>გახდით რეპორტიორი Intermedia.ge-ს დახმარებით!</p>
        </header>
        <main className="text-[12px] md:text-base">
            <p>
                ყველაზე მასშტაბური და პოპულარული ქართული პლატფორმა სამოქალაქო ჟურნალისტიკისთვის
            </p>
            <ul className="flex flex-col gap-4 mt-4 " >
                <li className="flex gap-3">
                    <img src="images/check.svg" alt="" />
                    გახდი ავტორი
                </li>
                   <li className="flex gap-3">
                    <img src="images/check.svg" alt="" />
                    დაწერე სტატია
                </li>
                   <li className="flex gap-3">
                    <img src="images/check.svg" alt="" />
                    გამოიმუშავებ ფული
                </li>
            </ul>
        </main>
        <footer>
            <button className="border-2 border-[#2E2E2E] p-2 rounded-lg px-4 py-2">
                დაწერე სტატია
            </button>
        </footer>
        <div className='relative right-0 bottom-2.5' >
            <img className='ml-1 absolute right-2 bottom-[0.1rem]' src="images/rectangle-39.svg" alt="" />
            <img className='mt-2 absolute right-0 ' src="images/rectangle-38.svg" alt="" />
        </div>

    </div>
        
    </div>
   
  )
}

export default ReportiorInfo;
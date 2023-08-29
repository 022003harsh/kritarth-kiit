import React from 'react'
import commingsoonimg from "../../src/images/coming_soon.jpg"

const commingsoon = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-[1920px] flex flex-col mx-auto">
        <div className="relative w-full xl:w-[1162px] h-full flex items-center justify-center mx-auto bg-transparent md:mt-[40px]">
          <img src={commingsoonimg} alt="" className='lg:h-[80vh] h-full'/>
        </div>
        </div>
        
    </div>
    <div className="fixed top-0 -z-20 right-0 w-[100vw] h-[100vw] bg-black">
        </div>
    </div>
    
  )
}

export default commingsoon

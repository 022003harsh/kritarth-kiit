import React from 'react'
import { event } from '../Data'
import cursor from "../images/cursor1.png";

const Events = (props) => {
  let leads=props.leads;
  // let event = props.event;
  // let name = props.name;
  // let url = props.url;
  // let message1 = props.message1;
  // let message2 = props.message2;
  let foundUser = null;
  for (let key in event) {
    if (event[key].id === leads) {
      foundUser = event[key];
      break;
    }
  }
  return (

    <div className='w-[100vw] overflow-x-hidden'>
      <div className='max-w-[1920px] p-3 xl:p-0 flex flex-col mx-auto '>
        <div className='p-3 xl:p-0 w-full xl:w-[1162px] mx-auto md:mt-[40px]'>
          <div className='w-full object-cover h-full'>
            {/* <img src={} alt="" /> */}
          </div>
          <div className='flex flex-col lg:flex-row justify-center gap-8 items-center mt-8'>
            <div className='max-width-[505px] max-h-[505px] rounded-xl sm:rounded-3xl bg-black border-solid border-[0.92px] border-[#7F7F7F]'>
              <img src={foundUser.url} alt="" className='rounded-xl sm:rounded-3xl max-width-[500px] w-full max-h-[500px] h-full' />
            </div>
            <div className='flex flex-col justify-center items-center py-5 px-5 sm:py-10 sm:px-10 max-width-[500px] sm:h-[500px] sm:w-[500px] w-full rounded-xl sm:rounded-3xl  border-solid border-[0.92px] border-[#7F7F7F] blurbox'>
              <div className='text-white font-Mulish text-2xl font-bold md:leading-[37px] tracking-wide md:tracking-widest self-start'>{foundUser.name}</div>
              <div className='text-white font-Mulish text-lg sm:text-xl italic font-extrabold md:leading-[23px] tracking-normal md:tracking-widest mt-[5px] overflow-x-scroll'>{foundUser.message1}</div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

      </div>
    </div>
  )
}

export default Events
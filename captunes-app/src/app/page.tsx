import React from 'react'
import Image from 'next/image'
import {Itim} from 'next/font/google'

const itim = Itim({
  weight: '400',
  subsets:['latin'],
})
function page() {
  return (
        
    <div className='flex flex-col justify-between items-center justify-center w-full h-screen bg-[#584c54]'>
      {/* Top Navagation Bar */}
      <div className = 'flex flex-row bg-[#7A6A72] justify-between w-full h-1/5'>
        {/* Logo */}
        <div>
          <Image
          className = ''
          alt = 'Logo'
          src = '/Screen_Shot_2024-10-26_at_8.27.53_PM-removebg-preview.png'
          width = {400}
          height = {400}
          />
        </div>
      </div>

      {/* Captcha */}
      <div className='flex-col items-center justify-between bg-white h-2/3 w-1/4 px-10 py-10 border-2 border-red-500 h-200 rounded-lg space-y-4'>
        {/* Sound */}
        <div className='flex bg-[#E0DDCF] border-2 w-full h-1/5 rounded-lg px-10 py-7 gap-10'>
          {/* Playbutton */}
          {/* <div className='flex-col justify-center items-center border-2 border-yellow-600 py-5'> */}
            <Image 
              className='m-0'
              alt = 'Picture of the logo'
              src='/play-button-arrowhead.png'
              width={50}
              height={50}
            />
          {/* </div> */}
          {/* Text */}
          <div className='flex flex-col items-center w-full overflow-hidden'>
            <div className={`${itim.className} text-[#2D232E] font-sans`} >
              <div className='text-base'>
                Match the sound
              </div>
              <div className='text-xm'>
                Click the square to listen and select
              </div>
            </div>
          </div>


        </div>
        {/* Options */}
        <div className='flex flex-col items-center justify-center w-full h-3/5 rounded-lg gap-5 py-5'>
          {/* Frame 1 */}
          <div className='flex justify-center items-center w-full h-full gap-3 px-10'>
            {/* Option 1 */}
            <div className='flex justify-center items-center size-10 border-2 bg-[#D9D9D9] border-red-300 h-full w-full'>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />
            </div>
            {/* Option 2 */}
            <div className='flex justify-center items-center size-10 border-2 bg-[#D9D9D9] border-red-300 h-full w-full'>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />
            </div>
          </div>
          {/* Frame 2 */}
          <div className='flex justify-center items-center w-full h-full gap-3 px-10'>
            {/* Option 1 */}
            <div className='size-10 border-2 bg-[#D9D9D9] border-red-300 h-full w-full'>

            </div>
            {/* Option 2 */}
            <div className='size-10 border-2 bg-[#D9D9D9] border-red-300 h-full w-full'>

            </div>
          </div>


        </div>
        {/* Verify */}
        <div className='flex justify-between items-center w-full h-1/6 rounded-lg'>
          {/* Skip */}
          <div className='flex justify-center items-center bg-[#474448] h-1/2 w-1/6 rounded-lg'>
            <div className={`${itim.className} text-sm font-sans`}>Skip</div>
          </div>
          {/* Submit */}
          <div className='flex justify-center items-center bg-[#474448] h-1/2 w-1/6 rounded-lg'>
            <div className={`${itim.className} text-sm font-sans`}>Submit</div>
          </div>
        </div>
             
        
      </div>  
        
     
    
    </div>
    
    
  )
}

export default page
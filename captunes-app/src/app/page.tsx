import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex items-center justify-center border-2 border-purple-500 w-full h-screen bg-[#E0DDCF]'>
      <div className='flex-col items-center justify-between bg-white h-2/3 w-1/4 px-10 py-10 border-2 border-red-500 h-200 rounded-lg space-y-4 '>
        {/* Sound */}
        <div className='bg-[#E0DDCF] border-2 border-blue-400 w-full h-1/5 rounded-lg '>
          {/* Text */}
          <div>
            
          </div>
          {/* Play button */}
          <div>
          </div>
        </div>
        {/* Options */}
        <div className='bg-slate-500 size-32 w-full h-3/5 rounded-lg'>
          {/* Frame 1 */}
          <div>

          </div>
        </div>
        {/* Submit */}
        <div className='bg-slate-600 w-full h-1/6 rounded-lg'></div>
             
        
      </div>  
        
     
      
    </div>
    

  )
}

export default page
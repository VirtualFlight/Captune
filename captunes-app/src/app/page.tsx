'use client';
import React from 'react'
import Image from 'next/image'
import {Itim} from 'next/font/google'
import useSound from 'use-sound'
import { useState, useEffect } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'


const itim = Itim({
  weight: '400',
  subsets:['latin'],
})

function Random() {
  let count = 0;
  let randlist: number[] = [];

  while (count < 4) {
    let randomnum = Math.floor(Math.random() * 4);
    if (!randlist.includes(randomnum)) {
      count += 1;
      randlist.push(randomnum);
    }
  }

  return randlist;
}

function Songs(list){
  
}

function Page() {
  let [isOpen, setIsOpen] = useState(false)
  // const [guitarSound] = useSound('sounds/trumpet.mp3')
  const [randomlist, setRandomlist] = useState<number[]>([]);
  const [sound1, setSound1] = useState(0);
  const [sound2, setSound2] = useState(0);
  const [sound3, setSound3] = useState(0);
  const [sound4, setSound4] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);


  useEffect(() => {
    setRandomlist(Random());
    setSound1();
    setSound2();
    setSound3();
    setSound4();
  }, []);

  
  console.log(randomlist)



  // for (let i = 0; i < 4; i++) {
  //   let random = Math.floor(Math.random()*4)
  //   if (random in isThere){
  //       const [sound{i}] = useSound('')
  //   }

  // } 
  // Math.random()
  const [correctsound] = useSound('correctsounds/')
  
  
    const [sound1] = useSound('incorrectsounds1/trumpet.mp3');
    const [sound2] = useSound('incorrectsounds2/guitar.mp3');
    const [sound3] = useSound('incorrectsounds3/harp.mp3');
    const [sound4] = useSound('incorrectsounds4/trumpet.mp3');

  
  

  let currentSelection = -1 



  // let test_audio = new Audio('/sounds/guitar.mp3')
    

  function handleClick(){
    console.log('button clicked')
  }

  function handleSubmit(){
    const sendCurrentSelection = async (currentSelection: any) => {
      try {
        const response = await fetch('http://localhost:5000/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selection: currentSelection }), // Send currentSelection as JSON
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('Success:', data); // Handle success response
    
      } catch (error) {
        console.error('Error:', error); // Handle error
      }
    };
    sendCurrentSelection(currentSelection)
    console.log('submitted')
  }

  
  
  
  const handlePlay = () => {
    setPlaying(true)
    setPlaying1(false)
    setPlaying2(false)
    setPlaying3(false)
    currentSelection = 0
    sound();
  }
  
  const handlePlay1 = () => {
    setPlaying1(true)
    setPlaying2(false)
    setPlaying3(false)
    setPlaying(false)
    currentSelection = 1
    sound1();
  }

  const handlePlay2 = () => {
    setPlaying2(true)
    setPlaying3(false)
    setPlaying(false)
    setPlaying1(false)
    currentSelection = 2
    sound2();
  }

  const handlePlay3 = () => {
    setPlaying3(true)
    setPlaying(false)
    setPlaying1(false)
    setPlaying2(false)
    currentSelection = 3
    sound3();
  }

  function handleSkip(){
    
    console.log('skipped')
  }

  function playOriginalSound(){
    console.log('playing original sound')
  }

  function playSound(){
    console.log('playing sound')
  }



  
  return (
      
    <div className='flex flex-col items-center justify-between w-full h-screen bg-[#584c54] pb-20'>
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
      <div className='flex-col items-center justify-between bg-[#2D232E] h-2/3 w-1/4 px-10 py-10 border-2 border-red-500 h-200 rounded-lg space-y-4'>
        {/* Sound */}
        <div className='flex bg-[#E0DDCF] border-2 w-full h-1/5 rounded-lg px-10 py-7 gap-10'>
          {/* Playbutton */}
          <button onClick={playOriginalSound}>
            <Image 
              className='m-0'
              alt = 'Picture of the logo'
              src='/play-button-arrowhead.png'  
              width={50}
              height={50}
            />
          </button>
          
          {/* Text */}
          <div className='flex flex-col items-center w-full overflow-hidden'>
            <div className={`${itim.className} text-[#2D232E] font-sans`} >
              <div className='text-base'>
                Match the sound
              </div>
              <div className='text-sm'>
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
            <button onClick={handlePlay} className={`flex justify-center items-center size-10  bg-[#D9D9D9]  h-full w-full ${playing ? 'border-4 border-[#B6A349]':'border-4 border-transparent'} transition-all duration-300 ease-in-out`}>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />



            </button>
            {/* Option 2 */}
            <button onClick={handlePlay1} className={`flex justify-center items-center size-10  bg-[#D9D9D9]  h-full w-full ${playing1 ? 'border-4 border-[#B6A349]':'border-4 border-transparent'} transition-all duration-300 ease-in-out`}>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />
            </button>
          </div>
          {/* Frame 2 */}
          <div className='flex justify-center items-center w-full h-full gap-3 px-10'>
            {/* Option 1 */}
            <button onClick={handlePlay2} className={`flex justify-center items-center size-10  bg-[#D9D9D9]  h-full w-full ${playing2 ? 'border-4 border-[#B6A349]':'border-4 border-transparent'} transition-all duration-300 ease-in-out`}>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />
            </button>
            {/* Option 2 */}
            <button onClick={handlePlay3} className={`flex justify-center items-center size-10  bg-[#D9D9D9]  h-full w-full ${playing3 ? 'border-4 border-[#B6A349]':'border-4 border-transparent'} transition-all duration-300 ease-in-out`}>
              <Image
                alt='music symbols'
                src='/music-symbols.png'
                width = {75}
                height = {75}
              />
            </button>
          </div>


        </div>
        {/* Verify */}
        <div className='flex justify-between items-center w-full h-1/6 rounded-lg'>
          {/* Skip */}
          <button onClick={handleSkip}className='flex justify-center items-center bg-[#474448] h-1/2 w-1/6 rounded-lg'>
            <div className={`${itim.className} text-sm font-sans`}>Skip</div>
          </button>
          {/* Submit */}
          <button onClick={handleSubmit} className='flex justify-center items-center bg-[#474448] h-1/2 w-1/6 rounded-lg'>
            <div className={`${itim.className} text-sm font-sans`}>Submit</div>
          </button>
        </div>
             
        
      </div>  
        
     
    
    </div>
    
    
  )
}

export default Page
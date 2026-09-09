import React from 'react'
import { PlusCircle, Mic } from "@deemlol/next-icons"
function Hero() {
  return (
    <div>
<main className='flex flex-col justify-center items-center gap-4  min-h-screen bg-gray-100'>

<p className=' text-gray-500'>AI App Builder</p>
<h1  className='text-3xl font-bold text-center'>
  Ready to bring your ideas to life?
</h1>
 
 <div className='flex gap-4  flex-col  rounded-2xl p-5 w-150  shadow-md border-2 border-gray-300'>
<input  className=' outline-none ' type="text" name="" id=""  placeholder="Ask lovable to create a dashboard to...." />
<div className='flex justify-between items-center'>

<PlusCircle size={30} color="gray" strokeWidth={1.5} />
<div className='flex gap-4 justify-center items-center'>  
<select className='outline-none' name="" id="">
  <option   value="">build</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>

<Mic size={20} color="gray" strokeWidth={1} />
</div>
 </div>
</div>
</main>

        
    </div>
  )
}

export default Hero
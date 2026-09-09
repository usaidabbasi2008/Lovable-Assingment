import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from "@/app/Assets/logo.png"

function Navbar() {
  return (
    <div>
<nav  className='flex justify-between items-center p-2  bg-gray-100'>

<div> <Image src={logo} alt="Logo" width={200} />  </div>
    <div className='flex gap-4'>
<Link href="/navagition/Solution"> Solution </Link>
<Link href="/navagition/Resources"> Resources </Link>
<Link href="/navagition/Community"> Community </Link>
<Link href="/navagition/Enterprise"> Enterprise </Link>
<Link href="/navagition/Pricing"> Pricing </Link>
<Link href="/navagition/Security"> Security </Link>
</div>

<div className='flex gap-4'>
  <button className='bg-transparent border-2 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-2xl ' >  Login </button>
  <button className=' border-2 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl ' > Get Started </button> 
</div>
</nav>



    </div>
  )
}

export default Navbar
"use client"

import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter(); 

  return (
    <div> this is id  <Link href="/">Home</Link>         <button onClick={() => router.push("/")}>Click Me</button>
    </div>
  )
}

export default Page
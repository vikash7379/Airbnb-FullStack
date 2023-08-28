"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {

    const router = useRouter();

  return (
    <div>
        <Image
            alt='logo'
            height={100}
            width={100}
            className='hidden md:block cursor-pointer'
            src={'/images/logo.png'}
            priority
        />
    </div>
  )
}

export default Logo
"use client"
import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div>
        <Image
            className='rounded-full'
            height={30}
            width={30}
            alt='Avatar'
            src='/images/placeholder.jpg'
        />
    </div>
  )
}

export default Avatar
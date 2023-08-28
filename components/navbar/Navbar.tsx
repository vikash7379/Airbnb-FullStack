"use client"
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <main className='fixed w-full bg-white z-10 shadow-sm'>
        <section className='py-4 border-b-[1px]'>
           <Container>
            <div className='flex flex-row gap-3 md:gap-0 items-center justify-between'>
                <Logo/>
                <Search/>
                <UserMenu/>
            </div>
           </Container>
        </section>
    </main>
  )
}

export default Navbar
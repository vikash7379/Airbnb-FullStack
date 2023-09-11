"use client"
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import useRegistrationModal from '../../Hooks/useRegistraionModal'

const UserMenu = () => {
    const registerModal = useRegistrationModal();
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = useCallback(()=>{
        setIsOpen(!isOpen)
    },[isOpen])

  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div onClick={()=>{}}
                className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            >
                Airbnb your home
            </div>
            <div onClick={toggleOpen} className='py-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                <AiOutlineMenu/>
                <div className='hidden md:block'>
                    <Avatar/>
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <ul className='flex flex-col cursor-pointer'>
                        <li onClick={()=>{}} className='px-4 py-3 hover:bg-neutral-100  transition font-semibold'>
                            Login
                        </li>
                        <li onClick={registerModal.onOpen} className='px-4 py-3 hover:bg-neutral-100  transition font-semibold'>
                            Sign up
                        </li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default UserMenu
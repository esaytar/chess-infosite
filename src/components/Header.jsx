import React from 'react'
import { Link } from "react-router-dom"
import Logo from './Logo'

export default function Header() {
    return (
        <header className='w-full flex justify-between'>
            <Logo/>
            <div className='flex uppercase gap-5 2xl:gap-20 text-white font-medium'>
                <Link to="/figures" className='2xl:hover:text-[#B6B6B6] text-base'>figures</Link>
                <Link to="/contacts" className='2xl:hover:text-[#B6B6B6] text-base'>contacts</Link>
            </div>
        </header>
    )
}
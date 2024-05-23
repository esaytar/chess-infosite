import React from 'react'
import { Link } from "react-router-dom"
import chess from '../assets/chess-icon.svg'
import logo from '../assets/logo-icon.svg'

export default function Logo() {
    return (
        <Link to="/" className='flex gap-1 sm:gap-2.5'>
            <img src={logo} alt="logo" className='xl:w-4'/>
            <img src={chess} alt="chess" className='xl:w-[5.5rem]' />
        </Link>
    )
}

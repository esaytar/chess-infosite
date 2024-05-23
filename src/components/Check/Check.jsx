import React from 'react'
import './Check.css'
import kingDark from '../../assets/img/king-dark.svg'

import kingLight from '../../assets/img/king-light.svg'
import castleLight from '../../assets/img/castle-light.svg'
import bishopLight from '../../assets/img/bishop-light.svg'
import knightLight from '../../assets/img/knight-light.svg'
import knightDark from '../../assets/img/knight-dark.svg'

export default function Check() {
    return (
        <div className='main-cont h-full container relative flex flex-col items-center justify-center z-[2] 2xl:gap-[8rem]'>
            <div className='cont1 w-full relative h-[10%]'>
                <img className='chess-piece king-dark1' src={kingDark} alt="kingDark" />
                <img className='chess-piece knight-light' src={knightLight} alt="knightLight" />
                <img className='chess-piece bishop-light' src={bishopLight} alt="bishopLight" />
                <img className='chess-piece king-dark2' src={kingDark} alt="kingDark" />
            </div>
            <p className='uppercase font-bold text-6xl sm:text-[4.3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7.5rem] 2xl:text-[10rem] select-none'>check</p>
            <div className='cont2 w-full relative h-[10%]'>
                <img className='chess-piece king-dark3' src={kingDark} alt="kingDark" />
                <img className='chess-piece castle-light' src={castleLight} alt="castleLight" />
                <img className='chess-piece knight-dark' src={knightDark} alt="knightDark" />
                <img className='chess-piece king-light' src={kingLight} alt="kingLight" />
            </div>
        </div>
    )
}

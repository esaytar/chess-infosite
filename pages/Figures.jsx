import React, {useState} from 'react'
import Carousel from '../../src/components/Carousel/Carousel'
import Button from '../../src/components/Button'
import Socials from '../../src/components/Socials'

export default function Figures() {

    return (
        // xl:max-w-[1500px]
        <div className='flex flex-col justify-between items-center h-full xl:w-full'>
            <Carousel/>
            <div className='justify-between items-end w-full hidden xl:flex'>
                <Socials layout='flex-col items-center'></Socials>
                <Button classes='uppercase px-9 py-2.5 rounded-[.326rem] text-lg'>buy now</Button>
                <Socials layout='flex-col items-center opacity-0'></Socials>
            </div>
        </div>
    )
}

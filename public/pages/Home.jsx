import React from 'react'
import Socials from '../../src/components/Socials'
import Check from '../../src/components/Check/Check'

export default function Home() {
    return (
        <>
            <Check/>
            <Socials layout='flex-col self-start'/>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import Header from './components/Header'
import Home from './../public/pages/Home'
import Contacts from './../public/pages/Contacts'
import Figures from './../public/pages/Figures'

function App() {
    const location = useLocation()
    const [classes, setClasses] = useState('')
 
    useEffect(() => {
        if (location.pathname !== '/figures') {
            setClasses('h-screen')
            return
        }
        setClasses('h-full%')
    }, [location])

    return (
        <main className={`before:bg-[#1B1C21] before:w-full before:h-screen before:fixed before:z-[-1] before:top-0
            py-[1.38rem] px-[1.12rem] lg:p-20 flex gap-12 lg:justify-between items-center flex-col w-full text-xs ${classes}`}
        >
            <span className='size-[16.75rem] bg-white  rounded-full absolute left-[-3.5rem] top-[8.25rem] blur-[170px] z-[-1] sm:left-[11rem] lg:left-[18rem] xl:left-[20rem] xl:size-[20rem] xl:blur-[250px]'></span>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/figures" element={<Figures />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </main>
    )   
}

export default App
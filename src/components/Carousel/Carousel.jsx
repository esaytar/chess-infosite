import React, { Children, cloneElement, useEffect, useState } from 'react'
import Button from '../Button'
import arrow from '../../assets/arrow.svg'
import { chessItems } from '../../chessItems';
import './Carousel.css';

export default function Carousel() {
    const [offset, setOffset] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    const [items, setItems] = useState(chessItems)

    // useEffect(() => {
    //     setItems([
    //         chessItems[chessItems.length - 1],
    //         ...chessItems,
    //         chessItems[0]
    //     ])
    //     setOffset(-100)
    //     setActiveIndex(1)
    // }, [])

    const handleLeftArrowClick = () => {
        console.log('left')
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
            setOffset((current) => current + 100)
        }
        console.log(activeIndex)

        // if (activeIndex == 0) {
        //     console.log(chessItems[chessItems.length - 1])
        //     console.log('left 0')
            
        //     setItems([
        //         chessItems[items.length - 1],
        //         ...chessItems
        //     ])
        //     console.log(items)
        //     setActiveIndex(chessItems.length - 1)
        // }
    }

    const handleRightArrowClick = () => {
        console.log('right')
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1)
            setOffset((current) => current - 100)
        }

        // if (activeIndex === 5) {
        //     console.log('right 5')
        //     setItems([
        //         ...chessItems,
        //         chessItems[0]
        //     ])
        //     setActiveIndex(0)
        // }
    }

    return (
        <div className='flex w-full xl:h-full items-center justify-center gap-7 xl:gap-16 flex-col xl:flex-row'> 
            <Button classes='xl:-translate-y-[50%] rounded-full p-[0.84rem] items-center justify-center xl:flex hidden' onClick={handleLeftArrowClick}>
                <img src={arrow} alt="left arrow" className='xl:w-[1.5rem]' />
            </Button> 
            <div className='flex flex-col items-center gap-6 xl:w-full'>
                <div className='w-full xl:overflow-x-hidden xl:flex xl:justify-end'>
                    <div className='overflow-x-hidden xl:overflow-x-visible  w-full xl:w-[450px]'>
                        <div 
                            className='flex h-full items-end transition-transform duration-[400ms]'
                            style={{
                                transform: `translateX(${offset}%)`,
                            }}
                        >
                            {items.map((item, index) => (
                                <div
                                    className={`${index} item h-full min-w-full flex justify-center ${
                                    index === activeIndex ? "active" : ""} ${index === activeIndex - 1 ? "prev" : ""} ${index === activeIndex - 2 ? "prev-2" : ""}`
                                    }
                                    key={index}
                                >
                                    <img className='2xl:w-[18.75rem]' src={item.image} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className='flex gap-[1.67rem] xl:hidden'>
                    <Button classes='xl:absolute xl:-translate-y-[50%] xl:top-1/2 2xl:left-[5%] xl:left-[2%] rounded-full p-[0.84rem] flex items-center justify-center' onClick={handleLeftArrowClick}>
                        <img src={arrow} alt="left arrow" className='xl:w-[1.5rem]' />
                    </Button>
                    <Button classes='xl:hidden block rounded-[0.42rem] px-12 py-[0.84rem] uppercase text-[1.2rem] font-light'>buy now</Button>
                    <Button classes='xl:absolute xl:-translate-y-[50%] xl:top-1/2 2xl:right-[5%] xl:right-[2%] rounded-full p-[0.84rem] flex items-center justify-center' onClick={handleRightArrowClick}>
                        <img src={arrow} alt="right left" className='rotate-180 xl:w-[1.5rem]' />
                    </Button>
                </div>
            </div>
            
            <div className='bg-[#1C1C1C] rounded-[0.84rem] flex flex-col gap-2.5 p-5 xl:gap-[1.875rem] xl:px-10 xl:py-[1.875rem] xl:min-w-[463px] xl:max-w-[463px] shadow-main' >
                <span className='text-base uppercase font-medium xl:text-[1.375rem]'>
                    the
                    <p className='text-[1.34rem] xl:text-4xl'>{chessItems[activeIndex].name}</p>
                </span>
                <p className='font-medium text-base xl:text-lg'>{chessItems[activeIndex].text}</p>
                <div className='font-semibold flex flex-col gap-4'>
                    <p className='uppercase font-bold text-[1.34rem]'>dimension</p>
                    <div className='flex gap-10 text-base xl:'>
                        <p>H:{chessItems[activeIndex].H}</p>
                        <p>W:{chessItems[activeIndex].W}</p>
                        <p>D:{chessItems[activeIndex].D}</p>
                    </div>
                </div>
            </div>
            <Button classes=' xl:-translate-y-[50%] rounded-full p-[0.84rem] items-center justify-center xl:flex hidden' onClick={handleRightArrowClick}>
                <img src={arrow} alt="right left" className='rotate-180 xl:w-[1.5rem]' />
            </Button>
        </div>
    )
}

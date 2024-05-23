import React from 'react'
import Socials from '../../src/components/Socials'
import Input from '../../src/components/Input'

export default function Contacts() {
    return (
        <div className='container flex justify-between flex-col gap-6 items-center lg:flex-row h-full'>
            <div className='flex flex-col gap-[0.83rem] items-center justify-center w-full xl:w-auto lg:gap-[2rem]'>
                <p className='font-bold uppercase text-center text-[1.33rem] xl:text-[2.06rem] leading-normal max-w-[25rem] xl:max-w-[35rem]'>Contact us by filling out a simple form</p>
                <p className='text-center text-base xl:text-[1.125rem] leading-[normal] lg:max-w-[27rem]'>Thank you for visiting our chess website! If you have any questions, comments, or suggestions, please feel free to reach out to us. We value your feedback and are here to assist you in any way we can. </p>
                <Socials layout=''/>
            </div>
            <div className='rounded-[1.25rem] bg-[#26272c] flex flex-col gap-[1.67rem] xl:gap-10 p-6 min-w-[26rem] lg:px-16 lg:py-14 xl:px-20 xl:py-16 h-full'>
                <div className='flex flex-col gap-[0.42rem] xl:gap-4'>
                    <p className='uppercase text-[1.33rem] font-bold xl:font-medium'>completed form</p>
                    <p className='text-base text-[1.125rem]'>We will get back to you in 24 hours</p>
                </div>
                <form action='' className='flex flex-col gap-[0.84rem] h-full'>
                    <Input
                        type='text'
                        placeholder='First Name'
                    />
                    <Input
                        type='text'
                        placeholder='Last Name'
                    />
                    <div className='flex w-full gap-[1.2rem]'>
                        <Input
                            type='email'
                            placeholder='E-mail'
                        />
                        <Input
                            type='tel'
                            placeholder='Phone Number'
                        />
                    </div>
                    <textarea className='bg-[#1B1C21] rounded-[0.84rem] px-6 py-[1.17rem] text-base w-full resize-none h-full' placeholder='Message'></textarea>
                    <button className='uppercase bg-white/80 px-6 py-[1.17rem] rounded-[0.84rem] text-[#1B1C21] text-base 2xl:hover:bg-[#D4D4D4]/80'>get quote</button>
                </form>
            </div>
        </div>
    )
}

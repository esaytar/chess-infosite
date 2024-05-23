import React from 'react'

export default function Input(props) {
    return (
        <input type={props.type} placeholder={props.placeholder} className='bg-[#1B1C21] rounded-[0.84rem] px-6 py-[1.17rem] text-base w-full'/>
    )
}

import React from 'react'

export default function SocialLogo({ url, name }) {
    return (
        <img src={url} alt={name} className='cursor-pointer size-[0.83rem] sm:size-[1.25rem]'/>
    )
}

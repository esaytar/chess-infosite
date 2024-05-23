import React from 'react'
import SocialLogo from './SocialLogo'
import facebook from '../assets/facebook.svg'
import inst from '../assets/inst-icon.svg'
import x from '../assets/x-icon.svg'

export default function Socials(props) {
    const classes = 'flex gap-6 ' + props.layout 

    return (
        <div className={classes}>
            <SocialLogo url={facebook} name='facebook-logo'/>
            <SocialLogo url={x} name='x-logo'/>
            <SocialLogo url={inst} name='inst-logo'/>
        </div>
    )
}

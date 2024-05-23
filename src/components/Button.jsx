import React from 'react'

export default function Button(props) {
    const classes = 'bg-[#1B1C21] shadow-main 2xl:hover:bg-[#0E0F15] ' + props.classes

    return (
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    )
}

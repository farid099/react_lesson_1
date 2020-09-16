import React from 'react'

export default function Buttons(props) {
    return (
        <div>
            {props.colors.map(color=>(
                <button className={color}>{color}</button>
            ))}
        </div>
    )
}


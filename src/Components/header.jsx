import React from 'react'

const Header =(props)=> {
        return (
            <div className='header'>
                <h1>5 days ForeCast</h1>
                <h3>{props.city}</h3>
            </div>
        )
}
export default  Header;
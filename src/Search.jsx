import React from 'react'
import { useState } from 'react'
import Sresult from './Sresult'

const Search=()=>{
    const [img,setimage]=useState("")

    const inputEvent=(event)=>{
        const newval=event.target.value
        setimage(newval)
    }

    
    return(
        <>
        <div className='searchbar'>
            <input className='input' type="text" placeholder='Search Anything Here' value={img} onChange={inputEvent} />
        </div>
        <Sresult name={img}/>
        
        </>
    )
}

export default Search
import React from 'react';


const Sresult=(props)=>{
const img=`https://source.unsplash.com/800x800/?${props.name}`;
    return(<>


    <div className='image'>
        <img src={img} alt="search" />

    </div>
    
    
    </>)
}

export default Sresult
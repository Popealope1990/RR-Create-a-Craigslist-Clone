import React from 'react'

function Posting(props){
    return(
        <div className='posting'>
            <div>{props.data.price}</div>
            <img src={props.data.imageURL} alt={props.data.title}/>

        </div>
    )
}

export default Posting
import React, { useState } from 'react'
import './accordion.css'

const Accordion  = ({data}) => {
    let[openIndex,setOpenIndex]=useState(null);
    function handleClick(index){
        setOpenIndex(openIndex==index?null:index)
    }
  return (
    <div className='outerclass'>
      {
        data.map((item,index)=>{
            return <div key={index} className='innerclass'>
                <button className='btnclass' onClick={()=>handleClick(index)}>{item.title}
                </button>
               {openIndex==index && <div className='contentclass'>
                    {item.context}
                </div>}
                </div>
               

        })
      }
    </div>
  )
}

export default Accordion 

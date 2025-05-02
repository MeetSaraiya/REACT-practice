import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'

const StarRating = ({ noOfStars = 5 }) => {
    const [rating,setRating] = useState(4);
    const [hover,setHover] = useState(0);

    function changeRating(idx){
        setRating(idx);
    }

    function changeHover(idx){
        setHover(idx)
    }

    function handleMouseLeave(){
        setHover(rating)
    }


  return (
    <div className='flex flex-row bg-black  justify-center gap-4  '>{
        [...Array(noOfStars)].map((_,index)=>{
            // index++;
           return  <FaStar
           key={index}
           size={30}
           className={`transition-all duration-150 ease-in-out cursor-pointer ${
             // Highlight based on hover or rating state
             ((index < hover) || (index < rating) ? 'text-orange-800' : 'text-white')
           }`}
           onClick={() => changeRating(index+1 )} 
           onMouseEnter={() => changeHover(index +1)}
           onMouseLeave={handleMouseLeave} 
         />
        })
    }</div>
  )
}

export default StarRating
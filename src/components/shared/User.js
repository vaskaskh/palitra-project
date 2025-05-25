import React, { useEffect, useState } from 'react'
import "./user.css"

const User = ({ inlineUser,...card}) => {

  
  const [width, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{

    function handleWindowWidth(){
      setWindowWidth(window.innerWidth)
    }


    window.addEventListener("resize", handleWindowWidth )
  })


  return (
    <div className='card_footer'>
         <img src={card.user.userImage} alt='' className='card_footer_image'/>

    
              <div className={` ${ inlineUser? "card_footer_info_small" : width<768 && !inlineUser ? "card_footer_info_small" :'card_footer_info'}`}>
                <span>{card.user.userName}</span>
                <span className='card_footer_date'> {card.postDate}</span>
              </div>

    </div>
  )
}

export default User
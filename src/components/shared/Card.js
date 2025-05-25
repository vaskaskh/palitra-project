import React from "react";
import "./card.css";
import User from "./User";

const Card = ({ desc, isSmallScreen, screen, ...card }) => {

  return (
<>
    {
      desc?(

<div
    className={`cardWrapper-desc`}
    >
      <div>
        <div className="card_title ">{card.title}</div>
        
        <img
          src={card.image}
          alt=""
          className={`card_photo`}
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-sm md:text-base">
        <div className="mb-[10px] mt-2 text-[#737373] text-xs" >{card.description}</div>
        <User {...card}  />
      </div>
    </div>
      ):(
      <div
          className={`cardWrapper ${isSmallScreen ? "cardWrapper-small" : ""}`}
          >
            <div>
              <img
                src={card.image}
                alt=""
                className={`card_photo ${isSmallScreen ? "max-w-[87px] max-h-[88px] object-cover" : "w-full"}`}
              />
            </div>

            <div className="flex flex-col justify-center align-middle text-sm md:text-base">
              <h1 className="card_title">{card.title}</h1>
              <User {...card}  />
            </div>
          </div>
        )
   }



   
</>
  );
};

export default Card;

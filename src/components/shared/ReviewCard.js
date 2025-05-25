import { div } from "framer-motion/client";
import React from "react";

const ReviewCard = ({ image, title, stat, badge, badgeNum, hobby }) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 border rounded-md pl-3 pt-3  md:w-[314px] w-[160px] relative ">
      <div className="flex gap-3 md:flex-row flex-col ">
        <img className="w-[54px] h-[54px] m-auto md:m-0" src={image} alt="" />
        <div>
          <div>{title}</div>
          <div className="flex gap-1">
            <img src="../images/Overlay.svg" alt="" />
            {stat}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-2 ">
        {hobby?.map((hobbyItem, index) => (
          <div key={index}>
            <button className="border py-[1.25px] px-2 mb-[20px] mt-[8px] text-[10.5px] rounded-md flex">
              {hobbyItem}
            </button>
          </div>
        ))}
      </div>
      <img src={badge} alt="" className=" md:flex hidden absolute right-[10px] top-[0px]" />
      <p className="md:flex hidden absolute text- right-[13px] top-[0px] text-[12px] text-[#FFFFFF]">
        {badgeNum}
      </p>
    </div>
  );
};

export default ReviewCard;

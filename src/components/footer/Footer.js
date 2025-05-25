import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1441px] h-[224px] gap-8 text-center">
      <div className="flex justify-between gap-11 items-center">
        <div>
          <img src={`../images/Facebook.svg`} alt="Facebook" />
        </div>
        <div>
          <img src={`../images/Instagram.svg`} alt="Instagram" />
        </div>
        <div>
          <img src={`../images/Twitter.svg`} alt="Twitter" />
        </div>
      </div>

      <div className="text-sm flex flex-col items-center gap-4">
        <div>წესები და პირობები კოფიდენციალურობის პოლიტიკა</div>
        <div>&#169; 2025 ყველა უფლება დაცულია</div>
      </div>
    </div>
  );
};

export default Footer;

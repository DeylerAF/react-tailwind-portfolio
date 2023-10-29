import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <div className="w-full h-auto lgl:w-1/2 flex justify-center items-center relative">
            <img
                className="w-[100%] md:w-1/2 lgl:w-full h-[auto] z-10"
                src={bannerImg}
                alt="bannerImg"
            />
            <div className="absolute bottom-0 w-[240px] h-[150px] xs:w-[320px] xs:h-[200px] sm:w-[350px] sm:h-[250px] sml:w-[500px] sml:h-[300px] md:w-[400px] md:h-[200px] mdl:w-[400px] mdl:h-[250px] lgl:w-[450px] lgl:h-[300px] xl:w-[500px] xl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    );
}

export default RightBanner
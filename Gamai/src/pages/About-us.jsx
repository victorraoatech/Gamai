import React from "react";
import logo from "../assets/GamAi.webp";

const AboutUs = () => {
     return (
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                   <div className="flex-shrink-0 flex items-center mt-8">
                        <img src={logo} alt="GAMAI Logo" className="h-12 sm:h-16 w-auto object-contain"/>
                   </div>

              </div>

         </div>

     )
}
export default AboutUs;
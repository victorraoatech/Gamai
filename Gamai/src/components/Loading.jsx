import React from "react";

const Loading = () => {
     return (
         <div className="flex items-center justify-center h-screen bg-[#D2CCD9]">
              <div className="text-center p-10 rounded-2xl bg-white/30 backdrop-blur-lg shadow-xl border border-white/20">
                   {/* Spinner with glassy gradient border */}
                   <div className="mx-auto animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-transparent border-t-orange-500 border-b-yellow-400 shadow-lg mb-6"></div>

                   {/* Loading text with gradient */}
                   <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-md">
                        Loading...
                   </h2>

                   {/* Subtext for polish */}
                   <p className="mt-2 text-gray-700 italic">Please wait a moment</p>
              </div>
         </div>
     );
};

export default Loading;

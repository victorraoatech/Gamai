import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
     return (
         <div className="flex items-center justify-center h-screen bg-[#D2CCD9]">
              <div className="text-center p-10 rounded-2xl bg-white/30 backdrop-blur-lg shadow-xl border border-white/20 max-w-lg">
                   {/* Big 404 number with gradient */}
                   <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-md mb-4">
                        404
                   </h1>

                   {/* Title */}
                   <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Oops! Page Not Found
                   </h2>

                   {/* Subtext */}
                   <p className="text-gray-700 mb-8 italic">
                        The page you are looking for does not exist or has been moved.
                   </p>

                   {/* CTA button */}
                   <Link
                       to="/"
                       className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
                   >
                        Go Home
                   </Link>
              </div>
         </div>
     );
};

export default NotFoundPage;

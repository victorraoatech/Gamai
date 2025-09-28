import React from "react";

const Footer = () => {
     return (
         <footer className="bg-[#D2CCD9] text-black border-t border-gray-200 py-6 mt-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                   <p className="text-sm text-center">
                        © {new Date().getFullYear()} Powered by{" "}
                        <a
                            href="https://www.raoatech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 transition-colors duration-200 font-medium"
                        >
                             Raoatech
                        </a>
                        . All rights reserved.
                   </p>
              </div>
         </footer>
     );
};

export default Footer;

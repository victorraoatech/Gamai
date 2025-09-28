import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/GamAi.webp";
import { NavLink } from "react-router-dom";
import { navLinks, signUpLinks } from "../reusables/Data.js";

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
     const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
     const dropdownRef = useRef(null);

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsDesktopDropdownOpen(false);
               }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

     return (
         <header className="sticky top-0 z-50 w-full left-0 right-0 bg-white/5 backdrop-blur-md border-b border-white/10 relative">
              {/* centered content container */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex items-center justify-between h-16 py-3">
                        <div className="flex-shrink-0 flex items-center">
                             <img src={logo} alt="GAMAI Logo" className="h-12 sm:h-16 w-auto object-contain" />
                        </div>

                        <nav className="hidden md:flex items-center space-x-6">
                             {navLinks.map((link) => (
                                 <NavLink
                                     key={link.path}
                                     to={link.path}
                                     className="text-sm font-semibold text-gray-800 hover:text-purple-700 transition-colors duration-200"
                                     onClick={() => setIsMenuOpen(false)}
                                 >
                                      {link.label}
                                 </NavLink>
                             ))}

                             <div className="relative" ref={dropdownRef}>
                                  <button
                                      onClick={() => setIsDesktopDropdownOpen((p) => !p)}
                                      className="text-sm font-semibold text-gray-800 hover:text-purple-700 flex items-center gap-1"
                                      type="button"
                                  >
                                       Sign Up <span className="text-xs">▾</span>
                                  </button>

                                  {isDesktopDropdownOpen && (
                                      <div className="absolute right-0 mt-2 w-48 bg-[#D2CCD9] rounded-lg shadow-lg py-2">
                                           {signUpLinks.map((link) => (
                                               <NavLink
                                                   key={link.path}
                                                   to={link.path}
                                                   className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-purple-700"
                                                   onClick={() => setIsDesktopDropdownOpen(false)}
                                               >
                                                    {link.label}
                                               </NavLink>
                                           ))}
                                      </div>
                                  )}
                             </div>

                             <NavLink to="/login" className="text-sm font-semibold text-gray-800 hover:text-purple-700">
                                  Sign In
                             </NavLink>
                        </nav>

                        <button
                            onClick={() => setIsMenuOpen((p) => !p)}
                            className="md:hidden p-2 text-gray-800 hover:text-purple-700 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                             {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                   </div>
              </div>

              {/* mobile menu: full-bleed under the header */}
              {isMenuOpen && (
                  <div className="md:hidden absolute inset-x-0 top-full bg-white/5 backdrop-blur-md border-b border-white/10">
                       <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-sm font-semibold py-2 text-gray-800 hover:text-purple-700 transition-colors duration-200"
                                >
                                     {link.label}
                                </NavLink>
                            ))}

                            <div>
                                 <button
                                     onClick={() => setIsMobileDropdownOpen((p) => !p)}
                                     className="w-full text-left text-sm font-semibold text-gray-800 hover:text-purple-700 flex items-center justify-between py-2"
                                     type="button"
                                 >
                                      Sign Up <span>{isMobileDropdownOpen ? "▴" : "▾"}</span>
                                 </button>

                                 {isMobileDropdownOpen && (
                                     <div className="pl-4 mt-2 space-y-2">
                                          {signUpLinks.map((link) => (
                                              <NavLink
                                                  key={link.path}
                                                  to={link.path}
                                                  onClick={() => {
                                                       setIsMenuOpen(false);
                                                       setIsMobileDropdownOpen(false);
                                                  }}
                                                  className="block text-sm font-semibold text-gray-800 hover:text-purple-700"
                                              >
                                                   {link.label}
                                              </NavLink>
                                          ))}
                                     </div>
                                 )}
                            </div>

                            <NavLink
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-sm font-semibold text-gray-800 hover:text-purple-700"
                            >
                                 Sign In
                            </NavLink>
                       </nav>
                  </div>
              )}
         </header>
     );
};

export default Header;

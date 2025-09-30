import React from "react";

const IndividualSignup = () => {
     return (
         <form className="space-y-6">
              {/* Personal Info */}
              <div>
                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Personal Information
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="text" placeholder="Last Name" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="date" placeholder="Date of Birth" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <select required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none">
                             <option value="">Select Gender</option>
                             <option>Male</option>
                             <option>Female</option>
                             <option>Prefer not to say</option>
                        </select>
                        <input type="tel" placeholder="Phone Number" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="text" placeholder="Address" className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="text" placeholder="City" className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="text" placeholder="Country" className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                   </div>
              </div>

              {/* Account Info */}
              <div>
                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Information</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" placeholder="Email" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="password" placeholder="Password" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <input type="password" placeholder="Confirm Password" required className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
                        <select className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none">
                             <option value="">Occupation</option>
                             <option>Student</option>
                             <option>Professional</option>
                             <option>Entrepreneur</option>
                        </select>
                   </div>
              </div>

              <button type="submit" className="w-full py-3 mt-4 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:scale-105 transition-transform">
                   Sign Up
              </button>
         </form>

     );
};

export default IndividualSignup;

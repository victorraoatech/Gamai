import React from "react";

const OrganizationSignup = () => {
     return (
         <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center px-4 py-10">
              <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8 md:p-12">
                   {/* Header */}
                   <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                             Organization Signup
                        </h2>
                        <p className="text-gray-600 mt-2">
                             Create your organization account and manage everything in one place.
                        </p>
                   </div>

                   <form className="space-y-10">
                        {/* Organization Info */}
                        <div>
                             <h3 className="text-lg font-semibold text-orange-600 mb-4">
                                  🏢 Organization Details
                             </h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <input
                                      type="text"
                                      placeholder="Organization Name"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="text"
                                      placeholder="Industry / Sector"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="text"
                                      placeholder="Registration Number"
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="url"
                                      placeholder="Website (optional)"
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="number"
                                      placeholder="Number of Employees"
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="text"
                                      placeholder="Headquarters Location"
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                             </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                             <h3 className="text-lg font-semibold text-orange-600 mb-4">
                                  👤 Contact Person
                             </h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <input
                                      type="text"
                                      placeholder="Full Name"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="text"
                                      placeholder="Job Title"
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="tel"
                                      placeholder="Phone Number"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="email"
                                      placeholder="Email"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                             </div>
                        </div>

                        {/* Security */}
                        <div>
                             <h3 className="text-lg font-semibold text-orange-600 mb-4">
                                  🔒 Account Security
                             </h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <input
                                      type="password"
                                      placeholder="Password"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                                  <input
                                      type="password"
                                      placeholder="Confirm Password"
                                      required
                                      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                                  />
                             </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg hover:scale-105 transition-transform"
                        >
                             🚀 Sign Up
                        </button>
                   </form>
              </div>
         </div>
     );
};

export default OrganizationSignup;

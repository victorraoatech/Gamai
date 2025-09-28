import React from "react";

// Sample flexible data
const courses = [
     {
          id: 1,
          title:
              "ARTIFICIAL INTELLIGENCE RESEARCH AND DEVELOPMENT IN THE UNIVERSITY SYSTEM",
          promoPlaceholder: "Enter promo code",
          instructor: "Mr. Oludaro Olarewaju",
          instructorRole:
              "Founder/CEO, Facatech • AWS Community Builder • Former President, Association of Nigeria Software Texters",
          theme: "blue",
     },
     {
          id: 2,
          title: "CARBON DIOXIDE PRODUCTION",
          promoPlaceholder: "Enter promo code",
          instructor: "Ayomide Oladele-Olarewaju",
          instructorRole: "Instructor",
          theme: "indigo",
     },
];

const CourseCard = () => {
     return (
         <div className="min-h-screen bg-[#D2CCD9] py-16 px-6">
              <div className="max-w-6xl mx-auto">
                   {/* Section Header */}
                   <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Courses Gamai Offers
            </span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                             Explore our carefully designed programs that blend innovation,
                             research, and industry relevance. Each course is tailored to equip
                             you with cutting-edge knowledge and practical skills.
                        </p>
                   </div>

                   {/* Course Grid */}
                   <div className="grid md:grid-cols-2 gap-12">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-transform duration-300 p-8 flex flex-col"
                            >
                                 {/* Title */}
                                 <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                                      {course.title}
                                 </h3>

                                 {/* Instructor */}
                                 {course.instructor && (
                                     <div className="mb-6">
                                          <p className="text-center text-sm text-gray-700 mb-1">
                                               {course.instructor}
                                          </p>
                                          <p className="text-center text-xs text-gray-500">
                                               {course.instructorRole}
                                          </p>
                                     </div>
                                 )}

                                 {/* Promo Code */}
                                 <div className="mb-8">
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                           {course.promoPlaceholder}
                                      </label>
                                      <input
                                          type="text"
                                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                          placeholder={course.promoPlaceholder}
                                      />
                                 </div>

                                 {/* Actions */}
                                 <div className="flex justify-between items-center mt-auto">
                                      <button
                                          className={`font-medium transition-colors ${
                                              course.theme === "blue"
                                                  ? "text-blue-600 hover:text-blue-800"
                                                  : "text-indigo-600 hover:text-indigo-800"
                                          }`}
                                      >
                                           View Details →
                                      </button>
                                      <button
                                          className="px-6 py-2 rounded-lg font-medium text-white
                                                       bg-gradient-to-r from-orange-500 to-orange-600
                                                       hover:from-orange-600 hover:to-orange-700
                                                       shadow-md hover:shadow-lg transition"
                                      >
                                           Subscribe
                                      </button>
                                 </div>
                            </div>
                        ))}
                   </div>
              </div>
         </div>
     );
};

export default CourseCard;

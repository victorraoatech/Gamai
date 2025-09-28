import React, { useState, useEffect } from "react";
import {
     Eye,
     CreditCard,
     Clock,
     BookOpen,
     Award,
     ChevronLeft,
     ChevronRight,
     X,
} from "lucide-react";
import { courses } from "../reusables/Data.js";

const ContentsPage = () => {
     const [currentIndex, setCurrentIndex] = useState({});
     const [previewImage, setPreviewImage] = useState(null);

     useEffect(() => {
          const initialIndex = {};
          courses.forEach((course) => {
               initialIndex[course.id] = 0;
          });
          setCurrentIndex(initialIndex);
     }, []);

     const handlePrev = (courseId, length) => {
          setCurrentIndex((prev) => ({
               ...prev,
               [courseId]: prev[courseId] === 0 ? length - 1 : prev[courseId] - 1,
          }));
     };

     const handleNext = (courseId, length) => {
          setCurrentIndex((prev) => ({
               ...prev,
               [courseId]: prev[courseId] === length - 1 ? 0 : prev[courseId] + 1,
          }));
     };

     return (
         <div className="bg-[#D2CCD9] min-h-screen py-12 px-4">
              <div className="max-w-7xl mx-auto space-y-16">
                   {courses.map((course) => {
                        if (!currentIndex.hasOwnProperty(course.id)) return null;

                        const subCourse = course.subCourses[currentIndex[course.id]];
                        const hasMultiple = course.subCourses.length > 1;

                        return (
                            <div
                                key={course.id}
                                className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl flex flex-col lg:flex-row overflow-hidden hover:scale-[1.01] transition-transform duration-300"
                            >
                                 {/* Left Image */}
                                 <div
                                     className="w-full lg:w-96 h-64 lg:h-96 relative cursor-pointer"
                                     onClick={() => setPreviewImage(course.image)}
                                 >
                                      <img
                                          src={course.image}
                                          alt={course.title}
                                          className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent flex flex-col justify-end p-6 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                                           <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                                                {course.title}
                                           </h1>
                                           <p className="text-sm md:text-lg text-purple-200 mt-1">
                                                {course.subtitle}
                                           </p>
                                      </div>
                                 </div>

                                 {/* Right Content */}
                                 <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 relative">
                                      {hasMultiple && (
                                          <>
                                               <button
                                                   onClick={() =>
                                                       handlePrev(course.id, course.subCourses.length)
                                                   }
                                                   className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 transition z-10"
                                               >
                                                    <ChevronLeft className="w-5 h-5" />
                                               </button>
                                               <button
                                                   onClick={() =>
                                                       handleNext(course.id, course.subCourses.length)
                                                   }
                                                   className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 transition z-10"
                                               >
                                                    <ChevronRight className="w-5 h-5" />
                                               </button>
                                          </>
                                      )}

                                      <div className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md shadow-lg hover:shadow-xl transition p-4 md:p-6 flex flex-col gap-4">
                                           <div className="grid md:grid-cols-3 gap-4">
                                                <InfoCard
                                                    icon={
                                                         <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                                                    }
                                                    label="Description"
                                                    value={subCourse.description}
                                                />
                                                <InfoCard
                                                    icon={
                                                         <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                                                    }
                                                    label="Duration"
                                                    value={subCourse.duration}
                                                />
                                                <InfoCard
                                                    icon={
                                                         <Award className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                                                    }
                                                    label="Requirement"
                                                    value={subCourse.requirement || "None"}
                                                />
                                           </div>

                                           <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <ActionButtonOrange
                                                    icon={
                                                         <CreditCard className="w-4 md:w-5 h-4 md:h-5" />
                                                    }
                                                    text="Subscribe Now"
                                                />
                                                <ActionButtonYellow
                                                    icon={<Eye className="w-4 md:w-5 h-4 md:h-5" />}
                                                    text="View Curriculum"
                                                />
                                           </div>
                                      </div>
                                 </div>
                            </div>
                        );
                   })}
              </div>

              {/* Image Preview Modal */}
              {previewImage && (
                  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                       <div className="relative bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl">
                            <button
                                className="absolute top-3 right-3 p-2 rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 transition z-10"
                                onClick={() => setPreviewImage(null)}
                            >
                                 <X className="w-5 h-5" />
                            </button>
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-full h-full object-contain"
                            />
                       </div>
                  </div>
              )}
         </div>
     );
};

const InfoCard = ({ icon, label, value }) => (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-white/20 bg-white/30 backdrop-blur-md shadow hover:shadow-lg transition">
         {icon}
         <div>
              <p className="text-xs md:text-sm text-slate-600 font-medium">{label}</p>
              <p className="text-sm md:text-base text-slate-900 font-semibold mt-1">
                   {value}
              </p>
         </div>
    </div>
);

const ActionButtonOrange = ({ icon, text }) => (
    <button className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition text-sm md:text-base">
         {icon} {text}
    </button>
);

const ActionButtonYellow = ({ icon, text }) => (
    <button className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-md hover:shadow-lg transition text-sm md:text-base">
         {icon} {text}
    </button>
);

export default ContentsPage;

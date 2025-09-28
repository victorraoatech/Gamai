import React from "react";
import logo from "../assets/GamAi.webp";
import {services} from "../reusables/Data.js";

const ServicesPage = () => {
     return (
         <div className="min-h-screen bg-[#D2CCD9]">
              {/* Header */}
              <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
                   <div className="max-w-6xl mx-auto flex justify-center items-center py-4">
                        <img
                            src={logo}
                            alt="Gamai Logo"
                            className="h-10 md:h-12 object-contain"
                        />
                   </div>
              </header>

              {/* Main Content */}
              <div className="py-16 px-6 max-w-6xl mx-auto">
                   {/* Header Section */}
                   <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
              Gamai Services
            </span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                             Gamai is an advanced AI-driven Learning Management System, built
                             from over 30 years of combined experience by Raoatech’s team. It is
                             designed to solve learning and development challenges in{" "}
                             <span className="font-semibold">
              educational institutions, corporate organisations, and
              self-learning journeys
            </span>
                             .
                        </p>
                   </div>

                   {/* Services Grid */}
                   <div className="grid md:grid-cols-2 gap-10">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.01] p-8 flex flex-col"
                            >
                                 <div className="flex items-center gap-4 mb-6">
                                      {service.icon}
                                      <h3 className="text-xl font-bold text-gray-900">
                                           {service.title}
                                      </h3>
                                 </div>
                                 <p className="text-gray-700 mb-4">{service.description}</p>
                                 {service.extra && (
                                     <p className="text-sm text-gray-600 italic">{service.extra}</p>
                                 )}
                            </div>
                        ))}
                   </div>
              </div>
         </div>
     );
};

export default ServicesPage;

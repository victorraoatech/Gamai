import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { services } from "../reusables/Data.js";
import { ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const features = [
    "AI-powered learning recommendations",
    "Live instructor-led sessions",
    "One-on-one mentorship programs",
    "Interactive assessments and quizzes",
    "Progress tracking and analytics",
    "Mobile-friendly learning platform",
    "Certificate of completion",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen bg-[#D2CCD9] flex flex-col">
      <Header />
      
      <div className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                Transform Your Learning Journey
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              GAMAI is an advanced AI-driven Learning Management System, built from over 30 years 
              of combined experience by Raoatech's team. We connect passionate learners with expert 
              instructors and mentors to create meaningful educational experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
                Start Learning Today
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all">
                Become an Instructor
              </button>
            </div>
          </div>

          {/* Platform Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose GAMAI?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Services
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] p-8 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">{service.description}</p>
                  {service.extra && (
                    <p className="text-sm text-gray-600 italic mb-4">{service.extra}</p>
                  )}
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How GAMAI Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up & Explore</h3>
                <p className="text-gray-600">
                  Create your account and browse our extensive catalog of courses and mentorship programs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect & Learn</h3>
                <p className="text-gray-600">
                  Enroll in courses, connect with expert instructors, and participate in live sessions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Achieve & Grow</h3>
                <p className="text-gray-600">
                  Complete assessments, earn certificates, and advance your career with new skills.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600/20 to-orange-500/20 backdrop-blur-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already transforming their careers with GAMAI's 
              expert-led courses and personalized mentorship programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
                Browse Courses
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
                Find a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
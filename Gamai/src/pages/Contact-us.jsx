import React from "react";
import Footer from "../components/Footer.jsx";
import logo from "../assets/GamAi.webp";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactUs = () => {
     const navigate = useNavigate();

     return (
         <div className="bg-[#D2CCD9] min-h-screen flex flex-col">
              {/* Header */}
              <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/20">
                   <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                        <img
                            src={logo}
                            alt="GAMAI Logo"
                            className="h-12 sm:h-14 w-auto object-contain"
                        />

                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-1 px-4 py-2 text-sm bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                        >
                             ← Back
                        </button>
                   </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 max-w-6xl mx-auto py-12 px-6">
                   {/* Two-column layout */}
                   <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-white/20">
                        {/* Left Side - Contact Form */}
                        <div className="bg-white p-8">
                             <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                                  Get in Touch
                             </h2>
                             <p className="text-gray-600 mb-6">
                                  Have questions or want to learn more? We'd love to hear from you.
                             </p>

                             <form className="space-y-4">
                                  <div>
                                       <label className="block text-sm font-medium text-gray-700">
                                            Name
                                       </label>
                                       <input
                                           type="text"
                                           placeholder="Enter your name"
                                           required
                                           className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                       />
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-gray-700">
                                            Email
                                       </label>
                                       <input
                                           type="email"
                                           placeholder="Enter your email"
                                           required
                                           className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                       />
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                       </label>
                                       <input
                                           type="tel"
                                           placeholder="Enter your phone number"
                                           required
                                           className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                       />
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-gray-700">
                                            Message
                                       </label>
                                       <textarea
                                           placeholder="Write your message"
                                           required
                                           rows="4"
                                           className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                       />
                                  </div>

                                  <div className="flex items-center gap-2">
                                       <input type="checkbox" required />
                                       <span className="text-sm text-gray-600">
                                            I agree to the{" "}
                                            <a href="#" className="text-orange-600 underline">
                                                 Privacy Policy
                                            </a>
                                       </span>
                                  </div>

                                  <button
                                      type="submit"
                                      className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:scale-105 transition-transform"
                                  >
                                       Send Message
                                  </button>
                             </form>
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-8 flex flex-col justify-between">
                             <div>
                                  <h2 className="text-3xl font-extrabold mb-4">
                                       Contact Information
                                  </h2>
                                  <div className="space-y-4">
                                       <div>
                                            <h3 className="font-semibold">Office Addresses</h3>
                                            <p>
                                                 The Waterside, 5 Admiralty Rd, off Admiralty Way, Lekki Phase 1,
                                                 Lagos State, Nigeria.
                                            </p>
                                            <p className="mt-2">
                                                 1A, Huges Avenue, Alagomeji, Yaba, Lagos State Nigeria
                                            </p>
                                       </div>

                                       <div>
                                            <h3 className="font-semibold">Telephone</h3>
                                            <p>+234 809 722 7051</p>
                                       </div>

                                       <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p>gamai@raoatech.com</p>
                                       </div>
                                  </div>
                             </div>

                             {/* Social Links */}
                             <div className="mt-8">
                                  <h3 className="font-semibold mb-3">Follow Us</h3>
                                  <div className="flex gap-4">
                                       <a
                                           href="#"
                                           className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                                       >
                                            <Facebook className="w-5 h-5" />
                                       </a>
                                       <a
                                           href="#"
                                           className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                                       >
                                            <Instagram className="w-5 h-5" />
                                       </a>
                                       <a
                                           href="#"
                                           className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                                       >
                                            <Twitter className="w-5 h-5" />
                                       </a>
                                       <a
                                           href="#"
                                           className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                                       >
                                            <Linkedin className="w-5 h-5" />
                                       </a>
                                  </div>
                             </div>
                        </div>
                   </div>
              </main>

              <Footer />
         </div>
     );
};

export default ContactUs;

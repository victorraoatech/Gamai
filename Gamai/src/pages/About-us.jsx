import React from "react";
import logo from "../assets/GamAi.webp";
import { Linkedin, Mail } from "lucide-react"; // ✅ using Mail for email
import { useNavigate } from "react-router-dom";
import { leadershipTeam } from "../reusables/Data";
// For WhatsApp, use react-icons (better than lucide-react for now)
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer.jsx";

const AboutUs = () => {
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
              <main className="flex-grow max-w-6xl mx-auto px-6 py-16 space-y-24">
                   {/* Our Story */}
                   <section className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                             About Raoatech
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">
                             Leading ICT Solutions & Training Provider in Nigeria Since 2014
                        </h2>
                        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                             Founded in 2014, Raoatech has grown to become a leading ICT firm in
                             Nigeria, specializing in enterprise software solutions, tech
                             training, security systems, and ICT infrastructure. With over 50
                             dedicated professionals, we&apos;ve empowered more than 10,000
                             Nigerians with valuable IT skills.
                        </p>
                   </section>

                   {/* Services */}
                   <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                             Our Services
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-8 text-gray-700">
                             <li className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition">
              <span className="font-semibold text-gray-900">
                Enterprise Software Solutions:
              </span>{" "}
                                  Web & mobile app design and development
                             </li>
                             <li className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition">
              <span className="font-semibold text-gray-900">
                Tech-based Training:
              </span>{" "}
                                  Software Engineering, Testing/QA, Project Management, Data
                                  Analytics & more
                             </li>
                             <li className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition">
              <span className="font-semibold text-gray-900">
                Software Testing Services:
              </span>{" "}
                                  Comprehensive quality assurance & testing
                             </li>
                             <li className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition">
              <span className="font-semibold text-gray-900">
                Security Solutions:
              </span>{" "}
                                  CCTV, biometrics, alarms
                             </li>
                             <li className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition">
              <span className="font-semibold text-gray-900">
                ICT Equipment Supply:
              </span>{" "}
                                  Networking & computer systems
                             </li>
                        </ul>
                   </section>

                   {/* Stats */}
                   <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                             { value: "10+", label: "Years of Excellence" },
                             { value: "50+", label: "Team Members" },
                             { value: "10,000+", label: "Trained Professionals" },
                             { value: "100+", label: "Enterprise Clients" },
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition p-6"
                            >
                                 <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
                                 <p className="text-gray-700">{stat.label}</p>
                            </div>
                        ))}
                   </section>

                   {/* Training Impact */}
                   <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                             Training Impact
                        </h2>
                        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6">
                             In the last decade, Raoatech has successfully trained over 10,000
                             Nigerians within and outside the country, equipping them with
                             in-demand IT skills and transforming their careers.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2">
                             <li>Software Engineering – Front-end and Back-end</li>
                             <li>Software Testing – QA and Testing Methods</li>
                             <li>Project Management – Professional PM Skills</li>
                             <li>Data Analytics – Processing & Business Intelligence</li>
                        </ul>
                   </section>

                   {/* Leadership */}
                   <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                             Leadership Team
                        </h2>
                        <div className="space-y-12">
                             {leadershipTeam.map((leader, idx) => (
                                 <div
                                     key={idx}
                                     className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition p-6 flex flex-col md:flex-row gap-6 items-start"
                                 >
                                      <img
                                          src={leader.img}
                                          alt={leader.name}
                                          className="w-32 h-32 object-cover rounded-full shadow-md"
                                      />
                                      <div>
                                           <h3 className="text-xl font-semibold text-gray-800">
                                                {leader.name} — {leader.title}
                                           </h3>
                                           <p className="text-gray-700 mt-3">{leader.desc}</p>
                                           <div className="flex gap-4 mt-4 text-gray-600">
                                                <a
                                                    href={leader.socials.linkedin}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                     <Linkedin className="w-6 h-6 hover:text-orange-600" />
                                                </a>
                                                <a
                                                    href={leader.socials.whatsapp}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                     <FaWhatsapp className="w-6 h-6 hover:text-green-500" />
                                                </a>
                                                <a
                                                    href={leader.socials.email}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                     <Mail className="w-6 h-6 hover:text-red-500" />
                                                </a>
                                           </div>
                                      </div>
                                 </div>
                             ))}
                        </div>
                   </section>

                   {/* CTA */}
                   <section className="text-center py-20 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white shadow-2xl">
                        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
                             Ready to Transform Your Business or Career?
                        </h2>
                        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                             Join 10,000+ individuals and businesses who trust Raoatech for their
                             ICT needs.
                        </p>
                        <div className="flex justify-center gap-8">
                             <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:bg-orange-100 hover:scale-105 transform transition">
                                  Contact Us
                             </button>
                             <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl shadow-lg hover:bg-white/30 hover:scale-105 transform transition">
                                  Explore Training Programs
                             </button>
                        </div>
                   </section>
              </main>
              <Footer/>
         </div>
     );
};

export default AboutUs;

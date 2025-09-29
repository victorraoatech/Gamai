import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion for Learning",
      description: "We believe that learning should be engaging, accessible, and transformative for everyone."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community First",
      description: "Building strong connections between learners, instructors, and mentors is at the heart of what we do."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to personalize and enhance the learning experience."
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Excellence",
      description: "We maintain the highest standards in course quality, instructor expertise, and platform reliability."
    }
  ];

  const team = [
    {
      name: "Mr. Oludaro Olarewaju",
      role: "Founder & CEO",
      description: "AWS Community Builder • Former President, Association of Nigeria Software Testers",
      expertise: "AI Research & Development, Software Testing, Educational Technology"
    },
    {
      name: "Ayomide Oladele-Olarewaju",
      role: "Lead Instructor",
      description: "Expert in Data Analytics and Educational Content Development",
      expertise: "Data Science, Python, Educational Methodology"
    }
  ];

  const stats = [
    { number: "30+", label: "Years Combined Experience" },
    { number: "1000+", label: "Students Trained" },
    { number: "50+", label: "Expert Instructors" },
    { number: "25+", label: "Course Categories" }
  ];

  return (
    <div className="min-h-screen bg-[#D2CCD9] flex flex-col">
      <Header />
      
      <div className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
                About GAMAI
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Empowering learners across Nigeria and beyond through AI-driven education, 
              expert instruction, and personalized mentorship programs.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To democratize quality education by connecting passionate learners with expert 
                instructors and mentors, leveraging AI technology to create personalized, 
                engaging, and effective learning experiences that transform lives and careers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-10 h-10 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading AI-powered learning platform in Africa, fostering a 
                community where knowledge flows freely, skills are developed continuously, 
                and every learner has access to world-class education and mentorship.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  GAMAI was born from a simple yet powerful vision: to make quality education 
                  accessible to everyone, everywhere. Founded by the experienced team at Raoatech, 
                  our platform combines over 30 years of collective expertise in technology, 
                  education, and software development.
                </p>
                <p className="mb-6">
                  We recognized that traditional learning methods often fall short in today's 
                  fast-paced, digital world. Learners need personalized guidance, expert mentorship, 
                  and flexible learning paths that adapt to their unique needs and schedules.
                </p>
                <p>
                  That's why we created GAMAI - an AI-powered learning management system that 
                  bridges the gap between learners and expert instructors, providing a seamless, 
                  engaging, and effective educational experience that transforms lives and careers.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="rounded-3xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Powered by Raoatech */}
          <div className="text-center rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600/20 to-orange-500/20 backdrop-blur-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Raoatech
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              GAMAI is proudly developed and maintained by Raoatech, a leading technology 
              company with decades of experience in software development, AI research, 
              and educational technology solutions.
            </p>
            <a
              href="https://www.raoatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
            >
              Learn More About Raoatech
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
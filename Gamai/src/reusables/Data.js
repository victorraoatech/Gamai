import StemRobotics from "../assets/Stem&Robotics.jpg";
import STEMANDROBOTICS from "../assets/Stem&Robotics.jpg";
import PMP from "../assets/PMP.jpg";
import Softtesting from "../assets/SoftwareTesting.jpg";
import WebDesign from "../assets/WebDesign.jpg";
import Data from "../assets/Data.jpg";
import ProductDesign from "../assets/ProductDesign.jpg";
import {BarChart3, BookOpen, CreditCard, GraduationCap} from "lucide-react";
import OludareImg from "../assets/oludare.png";
import TemitopeImg from "../assets/temitope.png";
import React from "react";

export const courses = [
     {
          id: 1,
          title: "STEM AND ROBOTICS",
          subtitle: "Advanced Technology & Engineering",
          image: STEMANDROBOTICS,
          subCourses: [
               { id: 1, title: "CARBON DIOXIDE PRODUCTION", level: "CARBON101", description: "CARBON DIOXIDE PRODUCTION", duration: "30 hours", requirement: "No Requirement", cost: "₦0" },
               { id: 2, title: "ALGEBRA", level: "BINOMIAL THEOREM", description: "BINOMIAL THEOREM", duration: "45 hours", requirement: "No Requirement", cost: "₦0" },
               { id: 3, title: "SEQUENCE AND SERIES", level: "SEQUENCE AND SERIES", description: "SEQUENCE AND SERIES", duration: "45 hours", requirement: "No Requirement", cost: "₦0" },
          ],
     },
     {
          id: 2,
          title: "PROJECT MANAGEMENT PROFESSIONALS (PMP) BY PMI",
          subtitle: "PROJECT MANAGEMENT PROFESSIONALS",
          image: PMP,
          subCourses: [
               { id: 1, title: "PROJECT MANAGEMENT PROFESSIONALS (PMP) BY PMI", level: "BEGINNER/INTERMEDIATE", description: "PROJECT MANAGEMENT PROFESSIONALS", duration: "9 WEEKS", requirement: "No Requirement", cost: "₦300,000" },
          ],
     },
     {
          id: 3,
          title: "SOFTWARE TESTING",
          subtitle: "SOFTWARE TESTING",
          image: Softtesting,
          subCourses: [
               { id: 1, title: "SOFTWARE TESTING", level: "FOUNDATION", description: "SOFTWARE TESTING", duration: "16 HOURS", requirement: "No Requirement", cost: "₦120,000" },
          ],
     },
     {
          id: 4,
          title: "PRODUCT DESIGN",
          subtitle: "USER INTERFACE/USER EXPERIENCE",
          image: ProductDesign,
          subCourses: [
               { id: 1, title: "PRODUCT DESIGN", level: "BEGINNER/INTERMEDIATE", description: "Learn and apply UI/UX skills to design software solutions", duration: "2 MONTHS", requirement: "No Requirement", cost: "₦180,000" },
          ],
     },
     {
          id: 5,
          title: "WEB DESIGN FOR BEGINNERS",
          subtitle: "WEB DEVELOPMENT",
          image: WebDesign,
          subCourses: [
               { id: 1, title: "WEB DESIGN FOR BEGINNERS", level: "WEB DEVELOPMENT", description: "LEARN (HTML/CSS/JAVASCRIPT/REACT ETC)", duration: "3 MONTHS", requirement: "No Requirement", cost: "₦170,000" },
          ],
     },
     {
          id: 6,
          title: "DATA ANALYTICS WITH PYTHON OR EXCEL",
          subtitle: "DATA ANALYTICS WITH PYTHON OR EXCEL",
          image: Data,
          subCourses: [
               { id: 1, title: "DATA ANALYTICS WITH PYTHON OR EXCEL", level: "BEGINNER", description: "DATA ANALYTICS WITH PYTHON OR EXCEL", duration: "2 MONTHS", requirement: "No Requirement", cost: "₦160,000" },
          ],
     },
];

export const navLinks = [
     { path: "/about-us", label: "About Us" },
     { path: "/services", label: "Services" },
     { path: "/contact-us", label: "Contact Us" },
];
export const signUpLinks = [
     { path: "/signup/organisation", label: "Sign up as Organisation" },
     { path: "/signup/individual", label: "Sign up as Individual" },
     { path: "/signup/instructor", label: "Sign up as Instructor" }
];
export const services = [
     {
          id: 1,
          title: "Digital Contents Distribution",
          description:
              "Gamai enables individuals (trainers/coaches) and corporate organisations (professional bodies, companies, training institutes, schools, e.t.c) to provide high quality and secure digital contents for their learners at very affordable cost.",
          extra: "Content types include: Videos, Audios and Documents",
          icon: BookOpen,
     },
     {
          id: 2,
          title: "Assessment and Insightful Reports",
          description:
              "Gamai offers AI-driven assessment solutions (objective-based and theory-based). The platform also offers insightful reports about learners' performances in the assessments.",
          icon: BarChart3,
     },
     {
          id: 3,
          title: "Issuance of Custom E-Certificate",
          description:
              "The platform makes issuance of custom e-certificate seamless. Recognize achievements and provide verifiable credentials to your learners.",
          icon: GraduationCap,
     },
     {
          id: 4,
          title: "Billing System",
          description:
              "Gamai comes with a seamless billing system that enables individuals and organisations to monetise their digital contents. Learners can pay for the contents and gain access easily.",
          icon: CreditCard,
     },
];
export const leadershipTeam = [
     {
          img: OludareImg,
          name: "Oludare Olarewaju",
          title: "CEO & Founder",
          desc: "Oludare is a 3X tech founder with 15+ years in enterprise software, impacting multiple industries...",
          bio: `
      Oludare Olarewaju is a 3X tech founder with over 15 years’ experience in managing design and development of enterprise software solutions, impacting sectors like education, taxation, lotteries and gaming, aviation, and e-commerce. He has managed start-ups with over $1.5M revenues in the last few years.
      
      - Trained 10,000+ African youths on tech skills in the last 15 years  
      - Village Capital accelerator's Future of Work Africa 2022 program participant  
      - Design Thinking Coach for University of Lagos undergraduates (2017 & 2018)  
      - AWS Community Builder and speaker  
      - President of Association of Nigeria Software Testers with over 1000 members  

      **Education:** Graduate of Systems Engineering, University of Lagos  

      **Presentations & Publications:**  
      - Importance of Software Testing (NIPOST)  
      - Podcast on tech ecosystem and AI  
      - Publication
    `,
          socials: {
               linkedin: "https://www.linkedin.com/in/oludare-olarewaju-5426352b/",
               whatsapp: "https://wa.me/2348012345678", // replace with real number
               email: "mailto:oludare@example.com",
          },
     },
     {
          img: TemitopeImg,
          name: "Temitope Oladele-Olarewaju",
          title: "Director",
          desc: "Temitope is an ISTQB-certified QA Engineer with 15+ years across telecoms, banking, edtech, and oil & gas...",
          bio: `
      Temitope is an ISTQB-certified Quality Assurance Engineer/Software Tester with over 15 years of technical hands-on experience in manual testing, performance testing, and managing QA teams across multiple industries.  

      Her experience spans the telecoms industry (MTN, 9Mobile and others), banking (First Bank and others), edtech (Raoatech and others), oil and gas, gaming and lotteries.  

      **Education:** B.Sc Hons in Computer Science from Olabisi Onabanjo University, Nigeria
    `,
          socials: {
               linkedin: "https://linkedin.com/in/temitope",
               whatsapp: "https://wa.me/2348098765432", // replace with real number
               email: "mailto:temitope@example.com",
          },
     },
];


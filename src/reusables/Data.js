import StemRobotics from "../assets/Stem&Robotics.jpg";
import STEMANDROBOTICS from "../assets/Stem&Robotics.jpg";
import PMP from "../assets/PMP.jpg";
import Softtesting from "../assets/SoftwareTesting.jpg";
import WebDesign from "../assets/WebDesign.jpg";
import Data from "../assets/Data.jpg";
import ProductDesign from "../assets/ProductDesign.jpg";
import {BarChart3, BookOpen, CreditCard, GraduationCap} from "lucide-react";
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
     { path: "/contact", label: "Contact Us" },
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
          icon: <BookOpen className="w-10 h-10 text-orange-600" />,
     },
     {
          id: 2,
          title: "Assessment and Insightful Reports",
          description:
              "Gamai offers AI-driven assessment solutions (objective-based and theory-based). The platform also offers insightful reports about learners' performances in the assessments.",
          icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
     },
     {
          id: 3,
          title: "Issuance of Custom E-Certificate",
          description:
              "The platform makes issuance of custom e-certificate seamless. Recognize achievements and provide verifiable credentials to your learners.",
          icon: <GraduationCap className="w-10 h-10 text-orange-600" />,
     },
     {
          id: 4,
          title: "Billing System",
          description:
              "Gamai comes with a seamless billing system that enables individuals and organisations to monetise their digital contents. Learners can pay for the contents and gain access easily.",
          icon: <CreditCard className="w-10 h-10 text-orange-600" />,
     },
];
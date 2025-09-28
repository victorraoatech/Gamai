import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContentsPage from "../components/ContentsPage.jsx";
import CourseCard from "../components/CourseCard.jsx";

const HomePage = () => {
     return(
          <div className='bg-[#D2CCD9] '>
               <Header/>
               <ContentsPage/>
               <CourseCard/>
               <Footer/>
          </div>
     )
}
export default HomePage
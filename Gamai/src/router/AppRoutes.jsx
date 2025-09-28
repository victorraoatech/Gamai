import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from '../components/Loading';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../components/NotFound'));
const HomePage = lazy(() => import('../pages/HomePage'));
const SignupOrganisation = lazy(() => import('../pages/SignUp/OrganisationSignup.jsx'));
const SignupIndividual = lazy(() => import('../pages/SignUp/IndividualSignup.jsx'));
const SignupInstructor = lazy(() => import('../pages/SignUp/InstructorSignup.jsx'));
const AboutUsPage = lazy(() => import('../pages/About-us.jsx'));
const ServicesPage = lazy(() => import('../pages/ServicesPage.jsx'));

const withSuspense = (Component) => (
    <Suspense fallback={<LoadingPage />}>
         <Component />
    </Suspense>
);

export const router = createBrowserRouter([
     {
          path: "/",
          element: withSuspense(HomePage)
     },
     {
          path: '/dashboard',
          element: withSuspense(Dashboard),
     },
     {
          path: '/login',
          element: withSuspense(Login),
     },
     {
          path:"*",
          element: withSuspense(NotFound),
     },
     {
          path: "/signup/organisation",
          element: withSuspense(SignupOrganisation),
     },
     {
          path: "/signup/individual",
          element: withSuspense(SignupIndividual),
     },
     {
          path: "/signup/instructor",
          element: withSuspense(SignupInstructor),
     },
     {
          path:"/about-us",
          element: withSuspense(AboutUsPage),
     },
     {
          path:"/services",
          element: withSuspense(ServicesPage),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },
     {
          path:"",
          element: withSuspense(),
     },

])

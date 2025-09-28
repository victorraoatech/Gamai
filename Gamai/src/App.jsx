import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './router/AppRoutes';
import './App.css';

function App() {
     return (
         <>
              <ToastContainer position="bottom-right" autoClose={1000} />
              <RouterProvider router={router} />
         </>
     );
}

export default App;

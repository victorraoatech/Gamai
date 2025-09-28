import React, { useState } from "react";
import { validateOrganisation } from "../../reusables/validation";

const OrganisationSignup = () => {
     const [formData, setFormData] = useState({ name: "", email: "", password: "" });
     const [errors, setErrors] = useState({});

     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

     const handleSubmit = (e) => {
          e.preventDefault();
          const validationErrors = validateOrganisation(formData);
          if (Object.keys(validationErrors).length === 0) {
               console.log("Organisation signup data:", formData);
               // API call or navigation
          } else {
               setErrors(validationErrors);
          }
     };

     return (
         <div className="max-w-md mx-auto mt-12 p-6 bg-[#D2CCD9] rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-800">Sign Up as Organisation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                        <label className="block font-medium">Organisation Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                   </div>

                   <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                   </div>

                   <div>
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                   </div>

                   <button
                       type="submit"
                       className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
                   >
                        Sign Up
                   </button>
              </form>
         </div>
     );
};

export default OrganisationSignup;

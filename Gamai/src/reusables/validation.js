// reusables/validation.js

export const validateOrganisation = ({ name, email, password }) => {
     const errors = {};
     if (!name.trim()) errors.name = "Organisation name is required";
     if (!email.trim()) errors.email = "Email is required";
     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
     if (!password) errors.password = "Password is required";
     else if (password.length < 6) errors.password = "Password must be at least 6 characters";
     return errors;
};

export const validateIndividual = ({ name, email, password }) => {
     const errors = {};
     if (!name.trim()) errors.name = "Name is required";
     if (!email.trim()) errors.email = "Email is required";
     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
     if (!password) errors.password = "Password is required";
     else if (password.length < 6) errors.password = "Password must be at least 6 characters";
     return errors;
};

export const validateInstructor = ({ name, email, password }) => {
     const errors = {};
     if (!name.trim()) errors.name = "Name is required";
     if (!email.trim()) errors.email = "Email is required";
     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
     if (!password) errors.password = "Password is required";
     else if (password.length < 6) errors.password = "Password must be at least 6 characters";
     return errors;
};

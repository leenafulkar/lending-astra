import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState({
    loan_purpose: "",
    borrow: "",
    need: "",
    dob: "",
    residence: "",
    credit: "",
    employeeStatus: "",
    annualIncome: "",
    makingSure:"",
    zipCode:"",
    address:"",
    city:"",
    firstName:"",
    lastName:"",
    mobile:"",
    email:""

  });

  const updateUser = (newUserData) => {
    setUser({
      ...user,
      ...newUserData,
    });
  };

  console.log(user, "context")
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;

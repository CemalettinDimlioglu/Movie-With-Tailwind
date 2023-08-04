import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// export const {Provider} = createContext()

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); 
      console.log(userCredential);
    } catch (error) {
      console.log(error);
     
    }
  };
  const values = {createUser, currentUser: { displayName: "James Dimly" } };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

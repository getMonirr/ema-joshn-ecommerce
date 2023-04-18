import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase_init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // custom function

  // create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in / log in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // observed in user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setLoading(false);
      setUser(curUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // auth info
  const authInfo = {
    user,
    loading,
    createNewUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { createContext, useContext, useEffect, useState } from "react";

import firebase from "@/lib/firebase";
import { createUser } from "@/lib/database";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = userProviderAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function userProviderAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true);

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user))
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(null));
  };

  const handleUser = (rawUser) => {
    if (!rawUser) {
      setUser(null);
      setIsLoading(false);

      return;
    }

    const formattedUser = formatUser(rawUser);

    //createUser(formattedUser);

    setUser(formattedUser);
    setIsLoading(false);

    return formattedUser;
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  const formatUser = (user) => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.providerData[0].photoURL
  });

  return {
    user,
    isLoading,
    signIn,
    signOut
  };
}

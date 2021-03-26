import React, { createContext, useContext, useEffect, useState } from "react";

import firebase from "./firebase";

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
      .then((response) => handleUser(response.user));
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
    photoUrl: user.photoUrl,
  });

  return {
    user,
    isLoading,
    signIn,
    signOut,
  };
}

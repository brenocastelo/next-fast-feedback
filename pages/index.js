import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signOut()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signIn()}>Sign In</button>
  );
}

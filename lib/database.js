import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(user) {
  return firestore.collection("users").doc(user.uid).set(user, { merge: true });
}

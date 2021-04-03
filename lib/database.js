import firebase from "@/lib/firebase";

const firestore = firebase.firestore();

export function createUser(user) {
  return firestore.collection("users").doc(user.uid).set(user, { merge: true });
}

export function createSite(data) {
  return firestore.collection("sites").add(data);
}

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhbKhcP1fracukQX45iWIMFp29hw57tM8",
  authDomain: "react-recipe-ac282.firebaseapp.com",
  projectId: "react-recipe-ac282",
  storageBucket: "react-recipe-ac282.appspot.com",
  messagingSenderId: "808623322618",
  appId: "1:808623322618:web:7b9e29064cf358abc0a043"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrC_CbxvYTCB4scOiekmhybvI6In4WuU",
  authDomain: "coder-thunderjams.firebaseapp.com",
  projectId: "coder-thunderjams",
  storageBucket: "coder-thunderjams.appspot.com",
  messagingSenderId: "712327740789",
  appId: "1:712327740789:web:67e87b931e296f0a68a73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
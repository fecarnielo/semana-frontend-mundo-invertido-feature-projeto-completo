  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCsuzH2mrQ-ahGWn8A6VBKCkdZ9Eq2DLjI",
    authDomain: "projeto-front-mundo-invertido.firebaseapp.com",
    projectId: "projeto-front-mundo-invertido",
    storageBucket: "projeto-front-mundo-invertido.appspot.com",
    messagingSenderId: "437425551451",
    appId: "1:437425551451:web:850b14ea154c4ef5a8a77e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export default app
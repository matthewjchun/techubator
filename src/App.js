import { useState } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

import Home from './components/Home/Home'
import Header from './components/Header/Header'



function App() {
  const [ logged, setLogged ] = useState(false) 
  
  const firebaseConfig = {
    apiKey: "AIzaSyBRtmfr_5Z5XkfvuPltYw-40o0LphTk6fU",
    authDomain: "techubator-483e4.firebaseapp.com",
    projectId: "techubator-483e4",
    storageBucket: "techubator-483e4.appspot.com",
    messagingSenderId: "692270211573",
    appId: "1:692270211573:web:f32f3b5570e6cdff60c0bc",
    measurementId: "G-785NKCN8N6"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="background">
      <Header></Header>
      {logged ?
        <p>logged in!</p>
        :
        <Home></Home>
      }
    </div>
  );
}

export default App;

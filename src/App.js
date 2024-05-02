import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About'
import React,{useState} from 'react'
import Textform from './Components/textform';
import Alert from './Components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// <BrowserRouter>
// <Routes>
//           <Route path="/about" element={<About />} />
          
//           < Route path="/"
//             element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
// </Routes>
// </BrowserRouter>
 

function App() {
  const [mode,setMode] = useState("light");  // for dark mode
  const [alert,setalert] = useState(null); // for alert message 

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  // for dark mode 
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const togglemode =(cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#1a316b";
      document.body.style.color = "white";
      document.body.style.border = "1px solid white";
      document.querySelector("textarea").style.backgroundColor = "#6a80b3";
      document.querySelector("textarea").style.color = "white";

      // alert message
      // showAlert(": Dark Mode is Enabled","success");

    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector("textarea").style.backgroundColor = "white";

      // alert msg
      // showAlert(": Light Mode is Enabled","success");
    }
  }
  return (
    <>
    <body></body>
    <Navbar home="Home" mode={mode} togglemode={togglemode} />
    <div className="container">
    <Alert alert={alert}/>
    </div>

    <div className="container">
    <Textform showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter"/>
    </div>

    {/* <div className="container">
    <About />
    </div> */}
    </>
  );
}

export default App;
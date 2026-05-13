
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Routes,Route, BrowserRouter } from "react-router-dom"

function App() {
  const [mode, setMode]=useState("light")
  const [alert,setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null)
},1500)
  }
   const toggleMode=()=>{
   if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has been enabled","success")
    document.title="TextUtils-Dark Mode"
//     setInterval(()=>{
// document.title="Dark Mode"
//     },2000)
// setInterval(()=>{
// document.title="textUtil install now"
//     },1500)
   }
   else{
    setMode("light")
    document.body.style.backgroundColor="white"
        showAlert("Light mode has been enabled","success")
document.title="TextUtils-Light Mode"
   }
   }
  return (
    // <BrowserRouter>
    <>

{/* <Navbar title="textUtils" aboutText="About" /> */}
<Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Routes>
       
        <Route exact path="/about" element={<About />} />
      </Routes> */}
<div className="container my-3">
  <TextForm showAlert={showAlert} heading="Entering a text to analyze below" mode={mode}/>
   {/* <About/>  */}
</div>

{/* <Navbar> */}
    </>
    // </BrowserRouter>
  );
}

export default App;

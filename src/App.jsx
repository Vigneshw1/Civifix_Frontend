import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Report from './Pages/Report';
import Thank from './Pages/Thank';
import Contact from './Pages/Contact';
import MyReport from './Pages/MyReport';
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/thankyou' element={<Thank/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myreports' element={<MyReport/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
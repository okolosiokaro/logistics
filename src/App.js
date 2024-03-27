import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Careers from './pages/Careers';
import NoPage from './pages/NoPage';
import OurService from './pages/OurService';
import ContactUs from './pages/ContactUs';


function App() {
  return (
  <BrowserRouter>
   <Routes>
     <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='aboutus' element={<About />}/>
        <Route path='services' element={<OurService />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='careers' element={<Careers />} />
        <Route path='*' element={<NoPage />}/>
     </Route>
   </Routes>
  </BrowserRouter>
  
  );
}

export default App;

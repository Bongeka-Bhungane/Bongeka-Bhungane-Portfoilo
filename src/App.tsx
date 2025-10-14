import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Cv from './pages/Cv';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/cv' element={<Cv/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

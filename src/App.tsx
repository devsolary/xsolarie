import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Preloading from './components/Preloading';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
    //preloading function
    useEffect(() => {
      const timer = setTimeout(() => {
        setPageLoaded(true)
      }, 3000)
      
  
      return () => clearTimeout(timer)
    },[])
    
  

  return (
    <>
    <Router>
    {pageLoaded ? <Navbar /> : <Preloading />}
    <Routes>
          <Route path='/' element={pageLoaded ? <Home /> : <Preloading />} />
          <Route path="/about" element={ <AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/technologies' element={<TechnologiesPage />} />
          <Route path='/contact' element={<ContactPage />} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Preloading from './components/Preloading';

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
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react' ;
import './App.css'
import Preloader from './components/Preloader';
import { Footer, PortfolioNavbar } from './components/require';
import ScrollToTop from './components/ScrollToTop';

import {
  Routes ,
  Route ,
  Navigate
} from 'react-router-dom' ;

import {
  Home ,
  About ,
  Project
} from './pages/page'

function App() {

  const[load , setLoad] = useState(true) ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    },1200) ;

    return() => clearTimeout(timer) ;
  },[])

  return (
    <>
    <Preloader load={load}/>
    <div>
      <PortfolioNavbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
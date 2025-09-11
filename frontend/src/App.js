import React from 'react'
import { About , Header,Skills,Work,Qualification,  Footer, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';


function App() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About/>
    <Skills/>
    <Qualification/>
    <Work/>
    <Testimonial/>
    
    
    <Footer/>
    
    </div>
  )
}

export default App

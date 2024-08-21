import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Service from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {

  return (
    <>   
      <Header/>
      <Hero/>    
      <main className='ml-[300px]'>
        <About/>
        <Resume/>
        <Portfolio/>
        <Service/>
      </main>      
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App

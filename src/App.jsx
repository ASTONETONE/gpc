import React from 'react'
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';

const App = () => {


  return (
    <div className='main-page'>
        <header>
          <Navbar />
        </header>

        <main className='main'>
          <Hero />
          <About />


        </main>

        <footer>
            <Footer />
        </footer>
          
    </div>
  );
}

export default App
import React from 'react';
import Header from './components/Header';
import About from './components/ab';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

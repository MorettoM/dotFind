import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll'

interface AppProps {
  name?: string;
  setName?: (name: string) => void;
  age?: number;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
      </header>
    </div>
  );
}

export default App;

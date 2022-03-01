import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar'

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
      </header>
    </div>
  );
}

export default App;

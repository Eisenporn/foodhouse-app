import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Catalog from './components/Catalog/Catalog.jsx';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <Catalog />
      </div>
    </div>
  )
}

export default App

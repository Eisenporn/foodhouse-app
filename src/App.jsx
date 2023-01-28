import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Grid_section from "./components/Grid-section/Grid-section.jsx";
import GridSection from "./components/Grid-section/Grid-section.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="container">
            <Header />
            <Menu />
            <GridSection/>
        </div>

    </div>
  )
}

export default App

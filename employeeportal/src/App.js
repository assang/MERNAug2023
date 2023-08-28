import React, { useRef, useState } from 'react'
import './App.css';
import Employee from './employee';
import { Footer } from './Footer';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light')
  const inputRef = useRef()

  const applyTheme = () => {
      setTheme(inputRef.current.value)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, employeeData: {add1: 'Abc', add2: 123567, city: 'Delhi'}}}>
        <input type='text' ref={inputRef}></input>
        <button onClick={() => applyTheme()}>Apply</button>
        <Employee />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

import React, { useRef, useState } from 'react'
import './App.css';
import Employee from './employee';
import { Footer } from './Footer';
import { ThemeContext } from './ThemeContext';
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import { Home } from './components/Home';

function App() {
  const [theme, setTheme] = useState('light')
  const inputRef = useRef()

  const applyTheme = () => {
      setTheme(inputRef.current.value)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, employeeData: {add1: 'Abc', add2: 123567, city: 'Delhi'}}}>

        <Router>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>

          <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
           </Routes>
        </Router>

        {/* <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
          
        </Router> */}
        
        {/* 
                <input type='text' ref={inputRef}></input>
        <button onClick={() => applyTheme()}>Apply</button>
        <Employee />
        <Footer /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

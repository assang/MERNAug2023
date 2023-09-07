import React, { useRef, useState } from 'react'
import './App.css';
import { Footer } from './Footer';
import { ThemeContext } from './ThemeContext';
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { Home } from './components/Home';
import { Header } from './components/Header';
import Employee from './components/employee';
import { Profile } from './components/Profile';
import { Logout } from './components/Logout';
import checkLogin from './components/checkLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('light')
  const inputRef = useRef()

  const applyTheme = () => {
      setTheme(inputRef.current.value)
  }

  //const Emp = checkLogin(Employee)

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, employeeData: {add1: 'Abc', add2: 123567, city: 'Delhi'}}}>
        {/* React router dom v6 */}
        <Router>
          <Header />
            <Routes> {/** <Switch> */}
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />}>
              </Route>
              {/* {console.log(new emp())} */}
              {/* <Route path="/employees" element={<Emp />}/> */}
              <Route path="/employees" element={checkLogin(Employee)()}/>
              <Route path='/employees/:id' element={<Profile />}/>
              <Route path='/logout' element={<Logout />}/>
            </Routes> {/** <Switch> */}
          <Footer />
        </Router>


        
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

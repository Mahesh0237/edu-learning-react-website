import React from 'react'
import Aboutsection from './Components/Aboutsection'
import Contactsection from './Components/Contactsection'
import Coursesection from './Components/Coursesection'
import Homesection from './Components/Homesection'
import Navbar from './Components/Navbar'
import Teamsection from './Components/Teamsection'
import Error from './Components/Error'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Main from './Main'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route  exact path='/home' element={<Homesection/>}/>
    <Route  path='/about' element={<Aboutsection/>}/>
    <Route  path='/course' element={<Coursesection/>} />
    <Route  path='/team' element={<Teamsection/>}/>
    <Route  path='/contact' element={<Contactsection/>}/>
    <Route  path='*' element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
import React from 'react'
import Aboutsection from './Components/Aboutsection'
import Contactsection from './Components/Contactsection'
import Coursesection from './Components/Coursesection'
import Homesection from './Components/Homesection'
import Teamsection from './Components/Teamsection'
function Main() {
  return (
    <div className = "Elisha">
        <Homesection/>
        <Aboutsection/>
        <Coursesection/>
        <Teamsection/>
        <Contactsection/>
    </div>
  )
}

export default Main

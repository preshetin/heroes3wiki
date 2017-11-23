import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">Heroes 3 Wiki</h1>
    </header>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/artifacts">Artifacts</NavLink></li>
    </ul>
    <hr/>
  </div>
)

export default Header

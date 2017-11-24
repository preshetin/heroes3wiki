import React from 'react'
import { NavLink } from 'react-router-dom'
import BulmaNavLink from './BulmaNavLink'

const Header = () => (
  <div>
    <header >
      <div style={{ fontFamily: 'VT323', fontSize: '35px', textAlign: 'center'}}>Heroes 3 Wiki</div>
    </header>
    <div class="tabs is-centered">
      <ul>
        <BulmaNavLink activeOnlyWhenExact={true} to="/" label="Home"/>
        <BulmaNavLink to="/about" label="About" />
        <BulmaNavLink to="/artifacts" label="Artifacts" />
      </ul>
    </div>
  </div>
)

export default Header

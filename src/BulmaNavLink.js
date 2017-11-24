import React from 'react'
import { Route, Link } from 'react-router-dom'

const BulmaNavLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <li className={match ? 'is-active' : ''}>
      <Link to={to}>{label}</Link>
    </li>
  )}/>
)

export default BulmaNavLink

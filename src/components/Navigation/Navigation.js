import React from 'react'
import classes from './Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav >
		  <ul className="siteNav">
		    <li>
		      <NavLink to="/courses">Courses </NavLink>
		    </li>
		    <li>
		      <NavLink to="/users">Users </NavLink>
		    </li>
		  </ul>
		</nav>
	)
}

export default Navigation
import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  return (
    <div><ul>
    <li id='ab'><Link to="/">Login</Link></li>
    <li id='cd'><Link to="/Sports">Sports</Link></li>
    <li id='ef'><Link to="/Mahabhrat">Mahabhrat</Link></li>
    <li id='ij'><Link to="/God">God</Link></li>   
    <li id='kl'><Link to="/Comedy">Comedy</Link></li>   
    <li id='mn'><Link to="/Kids">Kids</Link></li>    
    <li id='op'><Link to="/Avengers">Avengers</Link></li>  
  </ul></div>
  )
}

export default Nav
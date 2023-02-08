import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/listings">LISTINGS</NavLink></li>
      <li><NavLink to="/listings/new">NEW LISTING</NavLink></li>
      <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )

  return (
    <nav className="container">
        <NavLink to={'/'}><img src="assets/Landing/restful-logo_adobe_express (1).svg"  alt="restful-logo" style={{width: 80, height: 80}} /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
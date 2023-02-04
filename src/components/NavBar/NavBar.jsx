import { NavLink } from 'react-router-dom'
// import styles from './NavBar.module.css'
// import Logo from '../../assets/branding/logo.svg'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )

  return (
    <nav>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
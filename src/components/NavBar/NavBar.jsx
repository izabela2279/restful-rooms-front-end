import { NavLink } from 'react-router-dom'
import styles from './NavBar.css'


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
    <nav className={styles.container}>
        <NavLink to={'/'}><img src="assets/restful-logo_adobe_express (1).svg"  alt="restful-logo" style={{width: 50, height: 50}} /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
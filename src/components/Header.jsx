import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const location = useLocation()

  useEffect(() => {setMenuOpen(false)},[location])
  
  function toggleMenu() {
    setMenuOpen(prev => !prev)
    return console.log(menuOpen)
  }
  return(
    <header>
      <div className="container">
        <div className="logo">
          <img src="../../public/images/logo.png" alt="logo of site" />
          <h1 className="text-logo">My learning journal</h1>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {!menuOpen ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-x"></i>
          )
        }
        </button>

        <nav
          className={menuOpen ? 'open' : ''}
          aria-label="Main Navigation"
        >
          <div className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : null} to="/">Home</NavLink>
          </div>
          <div className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : null} to="/about">About Me</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
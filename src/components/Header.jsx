// import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  
  function toggleMenu() {
    setMenuOpen(prev => !prev)
    return console.log(menuOpen)
  }
  return(
    <header>
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" alt="logo of site" />
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
            <a>Home</a>
          </div>
          <div className="nav-item">
            <a>About Me</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
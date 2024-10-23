// import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" alt="logo of site" />
          <h1>My learning journal</h1>
        </div>
        <nav aria-label="Main Navigation">
          <a>Home</a>
          <a>About Me</a>
        </nav>
      </div>
    </header>
  )
}
import React from 'react'


 function Nav() {

  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <div className="navbar-brand">Pengteda Cheng</div>
      <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="About">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Nav;
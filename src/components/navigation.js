import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <div className="navbar-brand">Pengteda Cheng</div>
      <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

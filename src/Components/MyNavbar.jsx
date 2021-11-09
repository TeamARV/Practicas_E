import React from 'react'
import logo from "../Images/NameSVG.svg"
import "../Styles/MyNavbar.css"

const MyNavbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" alt="Responsive image"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fas fa-file-code"/>  Create Project  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fas fa-tasks"/>  List Projects </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Aquí algo ~ </a>
        </li>
      </ul>
      <span className="navbar-text">
      <button type="button" className="btn btn-dark"> <i className="fas fa-user"></i> Log In with <i className="fab fa-google"></i></button>
      
      </span>
    </div>
  </div>
</nav>


    )
}

export default MyNavbar

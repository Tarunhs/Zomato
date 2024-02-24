import React from 'react'
import '../App.css'
export default function Navbar(props) {
  return (
    <div className='position-absolute z-2 '>
      <nav className="navbar navbar-expand-lg bg-body-light text-white d-flex justify-content-between">
  <div className="container-fluid ">
    <a className={`navbar-brand ${props.color}`} href="/" >Zomato
    </a>
    <div>
         
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
   
    <div  id="navbarSupportedContent">
      <div class="d-flex " role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-xl-between ">
        <li className="nav-item">
          <a className= {`nav-link active fs-5 ${props.color}`} aria-current="page" href="/" >Investore relations</a>
        </li>
        <li className="nav-item">
          <a className= {`nav-link active  fs-5 ${props.color}`}  aria-current="page" href="/" >Add restaurants</a>
        </li>
        <li className="nav-item">
          <a className= {`nav-link active fs-5 ${props.color}`} aria-current="page" href="/" >Login</a>
        </li>
        <li className="nav-item">
          <a className= {`nav-link active fs-5 ${props.color}`} aria-current="page" href="/" >Sign Up</a>
        </li>        
      </ul>
      </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

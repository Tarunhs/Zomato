import React from 'react'

export default function CateringNav(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid justify-content-center">
    <a class={`navbar-brand fs-3 fw-bold ${props.color}`} href="/">Zomato</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" style={{width:'400px'}} placeholder="Search" aria-label="Search" />
        <button class={`btn btn-outline-white ${props.color}`} type="submit">Search</button>
      </form>
        <li class="nav-item">
          <a class={`nav-link active ${props.color}`} aria-current="page" href="/">Login</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link active ${props.color}`} aria-current="page" href="/">Sign Up</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

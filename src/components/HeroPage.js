import React from 'react'
import '../App.css'
export default function HeroPage() {
  return (
    <div className='text-center hero'>
      <p class="heading">Zomato</p>
      <h5 className='fs-1'>Discover the best food & drinks in Bengaluru</h5>
      <form class="d-flex justify-content-around " role="search">
        <div className='d-flex w-50 p-4'>
            <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-btn-outline-light text-white " type="submit">Search</button>
        </div>
      </form>   
    </div>
  )
}

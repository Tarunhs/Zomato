import React from 'react'

export default function CardComponent(props) {
  return (
    <div className="card con" style={{ width: '18rem'}}>
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <p className='fs-5'>{props.title}</p>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
  )
}
import React from 'react'
import img1 from '../Asset/on.png' 
import img2 from '../Asset/catering.png' 
import img3 from '../Asset/dining.png' 
import '../App.css'
import CardComponent from './CardComponent'
import {Link} from 'react-router-dom';
export default function Content() {
  return (
    <div className='mt-5 mb-4 align-content-center d-flex  justify-content-around '>
        <div className='container row'>
            <div className='col'></div>
            <div className='col-3'>
            <CardComponent 
                img={img1} 
                title="Order Online" 
                description="Stay Home and order to your door step"
            />
            </div>
            
            <div className='col-3'>
            <CardComponent  
                img={img3} 
                title="Dining" 
                description="View the city's favourite dining venues"
            />
            </div>
            
            <div className='col-3'>
            <Link to='/CateringDetails' >
            <CardComponent  
                img={img2} 
                title="Catering Service" 
                description="A great caterer is a master of atmosphere as much as food"
            /></Link>
            </div>
            <div className='col'></div>
        </div>
        
   
  </div>
  
  )
}

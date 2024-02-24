import React from 'react';
import CateringNav from './CateringNav';
import { useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
export default function CateringCardDetails() {
  const location = useLocation();
  const propsData = location.state;

  // Check if propsData is defined
  if (!propsData) {
    return <div>Error: Catering details not found</div>;
  }

  return (
    <div className='bg-dark text-light'>
      <CateringNav color='text-white' />

      <div className='border rounded-4  mx-5'>
        <div className='d-flex justify-content-around mt-5 mb-3'>
          <div className='text-center'>
            <img src={propsData.images} className='mx-5 border-dark rounded-2' style={{ height: '25rem' }} alt={propsData.name} />
          </div>
          <div className='mt-5 p-2'><h1 className='mx-5 mb-4' style={{ fontSize: '50px' }}> {propsData.name} &nbsp; &nbsp; {propsData.star}<FaStar color='yellow' /></h1>
            <p className='mx-5 fs-5'>{propsData.shortDisc}</p></div>
        </div>
      </div>

      {/* <div className='mx-5 mt-5 d-flex'>
        <div className='mx-5' >
          <h2 className='mx-5'>Silver Package</h2>
        <img src='https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw' className='mx-5 border rounded-2' alt='...' />
        <p className='mx-5'>{propsData.silver}</p>
        <p className='mx-5'>Cost: {propsData.silvercost}</p>
        </div>

        <div className='border rounded-2 mt-5 mx-5 bg-dark text-light'> 
          <img src='https://i.stack.imgur.com/HILmr.png' className='mt-3 mx-5 border rounded-2' style={{width:'30rem', height:'25rem'}} alt='..'/>
          <div className='mx-5'>
            <h6 className='text-center'>Overview</h6>
            <p>Banglore</p> 
            <span>12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96</span>
            <p>Conatct : 080 - 5526451</p>
            <p>Rating: {propsData.star} <FaStar color='red' /></p>
          </div>
          
        </div>
        
      </div> */}
      {/* <div className='d-flex mt-5'>
        <div className='mx-5'>
        <h2 className='mx-5'>Gold Package</h2>
        <img src='https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw' className='mx-5 border rounded-2' alt='...' />
        <p className='mx-5'>{propsData.gold}</p>
        <p className='mx-5'>Cost: {propsData.goldcost}</p>
      </div>

      <div>
        <h2 className='mx-5'>Platinum Package</h2>
        <img src='https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw' className='mx-5 border rounded-2' alt='...' />
        <p className='mx-5'>{propsData.platinum}</p>
        <p className='mx-5'>Cost: {propsData.platinumcost}</p>
      </div>
      </div> */}

      <div className='mt-5 d-flex'>
        <div >
          <div className='p-5 border-dark'>
            <h2 className='mx-5'>Silver Package</h2>
            {/* <img src='https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw' className='mx-5 border rounded-2' alt='...' /> */}
            <img src={propsData.silverpic} className='mx-5 border rounded-2' alt='...' />
            <p className='mx-5'>{propsData.silver}</p>
            <p className='mx-5'>Cost: {propsData.silvercost}</p>
          </div>
          <div className='p-5 border-dark' >
            <h2 className='mx-5'>Gold Package</h2>
            <img src={propsData.silverpic} className='mx-5 border rounded-2' alt='...' />
            <p className='mx-5'>{propsData.gold}</p>
            <p className='mx-5'>Cost: {propsData.goldcost}</p>
          </div>
          <div className='p-5 border-dark' >
            <h2 className='mx-5'>Platinum Package</h2>
            <img src={propsData.silverpic} className='mx-5 border rounded-2' alt='...' />
            <p className='mx-5'>{propsData.platinum}</p>
            <p className='mx-5'>Cost: {propsData.platinumcost}</p>
          </div>
        </div>
        <div className='d-flex'>
          <div className='border rounded-2 mt-5 mx-5 bg-dark text-light'>
            <img src='https://i.stack.imgur.com/HILmr.png' className='mt-3 mx-5 border rounded-2' style={{ width: '30rem', height: '25rem' }} alt='..' />
            <div className='mx-5' style={{ fontSize: '25px' }}>
              <h6 className='text-center border mt-5' style={{ fontSize: '30px' }}>Overview</h6>
              <p>Banglore</p>
              <span>12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96</span>
              <p>Conatct : 080 - 5526451</p>
              <p>Rating: {propsData.star} <FaStar color='red' /></p>
            </div>
            <div>
              <h6 className='text-center border mx-5' style={{ fontSize: '30px' }}>Menu</h6>
              <ul className='mx-5' style={{ fontSize: '25px' }}>
                <h3>Appetizers:</h3>
                <ul>
                  <li>Samosas</li>
                  <li>Pakoras</li>
                  <li>Vegetable Cutlets</li>
                  <li>Aloo Tikki</li>
                </ul>
                <br/>
                <h3>Main Courses:</h3>
                <ul>
                  <li>Chicken Tikka Masala</li>
                  <li>Butter Chicken</li>
                  <li>Lamb Rogan Josh</li>
                  <li>Chana Masala</li>
                  <li>Palak Paneer</li>
                  <li>Vegetable Biryani</li>
                  <li>Naan Bread</li>
                  <li>Tandoori Roti</li>
                </ul>
                <br/>
                <h3>Accompaniments:</h3>
                <ul>
                  <li>Raita</li>
                  <li>Papadum</li>
                  <li>Pickles</li>
                  <li>Salad</li>
                </ul>
                <br/>
                <h3>Desserts:</h3>
                <ul>
                  <li>Gulab Jamun</li>
                  <li>Rice Kheer</li>
                  <li>Rasgulla</li>
                </ul>
                <br/>
                <h3>Beverages:</h3>
                <ul>
                  <li>Mango Lassi</li>
                  <li>Masala Chai</li>
                </ul>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

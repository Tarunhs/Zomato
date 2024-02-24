import React from 'react'
import CateringCards from './CateringCards'
import img1 from '../Asset/newhorixon.webp'
import img2 from '../Asset/catering-las-vegas.png'
import img3 from '../Asset/RameshCatering.jpg'
import img4 from '../Asset/shreecaters.png'
import offer from '../Asset/offer.avif'
import CateringNav from './CateringNav'
import { Link } from 'react-router-dom'

export default function CateringDetails(props) {
  var cateringData = [
    {
      "name": "Annapoorna Catering service",
      "shortDisc": "Must-try - Tandoori Tiger Prawns, Moroccan Kebab, Blue Crab Sukka, Chicken Biryani, Sabudana Vada, Paneer Cheddar Melts, Greek Pizza, Sera Dura, Apple Strudel, Basque Cheesecake, Italian Mushroom Risotto, Korean Spicy Wings, Nachos Grande, Naga Chilli Pork, BBQ Pork Ribs, Andhra Chilli Chicken, Vada Puff Popsicle, Flammkuchen, Craft Beers, Signature Cocktails, Beer Infused Cocktails",
      "silver": "Serradura, Chakna Platter, Beetroot Salad, Mumbai Sandwich, Mutton Keema Pav, Pasta Arrabiatta",
      "gold": "Biriani, ragi-balls, Ghee Rice, Chicken Gravy, Chiken Kabab, chilly Chiken, Halva",
      "platinum": "mutton-Biriyani, chikn Chops, fish fry, prawn dry",
      "silvercost": "$700",
      "goldcost": "$1200",
      "platinumcost": "$1800",
      "images": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
      "platinumpic": 'https://s2.dmcdn.net/v/NWuw_1Qx30-A5n1km/x720',
      "goldpic": 'https://www.caterninja.com/frontend/web/images/app_img/no-image.jpg',
      "silverpic": 'https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw',
      "star": "4",
      'Location': '12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96',
      'city':'Banglore'
    },    
    {
    name : 'Chandru Veg Catering service',
    shortDisc : 'Musty try - Tandoori Tiger Prawns, Moroccan Kebab, Blue Crab Sukka, Chicken Biryani, Sabudana Vada, Paneer Cheddar Melts, Greek Pizza, Sera Dura, Apple Strudel, Basque Cheesecake, Italian Mushroom Risotto, Korean Spicy Wings, Nachos Grande, Naga Chilli Pork, BBQ Pork Ribs, Andhra Chilli Chicken, Vada Puff Popsicle, Flammkuchen, Craft Beers, Signature Cocktails, Beer Infused Cocktails',
    silver :  'Serradura, Chakna Platter, Beetroot Salad, Mumbai Sandwich, Mutton Keema Pav, Pasta Arrabiatta',
    gold : 'Biriani, ragi-balls, Ghee Rice, Chicken Gravy, Chiken Kabab, chilly Chiken, Halva',
    Platinum : 'mutton-Biriyani, chikn Chops, fish fry, prawn dry',
    silvercost : '$700',
    goldcost : '$1200',
    platinumcost : '$1800',
    images: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    "platinumpic": 'https://s2.dmcdn.net/v/NWuw_1Qx30-A5n1km/x720',
      "goldpic": 'https://www.caterninja.com/frontend/web/images/app_img/no-image.jpg',
      "silverpic": 'https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw',
      "star": "4",
      'Location': '12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96',
      'city':'Banglore'
  },
    {
    name : 'Chandru Catering service',
    shortDisc : 'Musty try - Tandoori Tiger Prawns, Moroccan Kebab, Blue Crab Sukka, Chicken Biryani, Sabudana Vada, Paneer Cheddar Melts, Greek Pizza, Sera Dura, Apple Strudel, Basque Cheesecake, Italian Mushroom Risotto, Korean Spicy Wings, Nachos Grande, Naga Chilli Pork, BBQ Pork Ribs, Andhra Chilli Chicken, Vada Puff Popsicle, Flammkuchen, Craft Beers, Signature Cocktails, Beer Infused Cocktails',
    silver :  'Serradura, Chakna Platter, Beetroot Salad, Mumbai Sandwich, Mutton Keema Pav, Pasta Arrabiatta',
    gold : 'Biriani, ragi-balls, Ghee Rice, Chicken Gravy, Chiken Kabab, chilly Chiken, Halva',
    Platinum : 'mutton-Biriyani, chikn Chops, fish fry, prawn dry',
    silvercost : '$700',
    goldcost : '$1200',
    platinumcost : '$1800',
    images: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    "platinumpic": 'https://s2.dmcdn.net/v/NWuw_1Qx30-A5n1km/x720',
      "goldpic": 'https://www.caterninja.com/frontend/web/images/app_img/no-image.jpg',
      "silverpic": 'https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw',
      "star": "4",
      'Location': '12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96',
      'city':'Banglore'
  },
    {
    name : 'Ramesh Catering service',
    shortDisc : 'Musty try - Tandoori Tiger Prawns, Moroccan Kebab, Blue Crab Sukka, Chicken Biryani, Sabudana Vada, Paneer Cheddar Melts, Greek Pizza, Sera Dura, Apple Strudel, Basque Cheesecake, Italian Mushroom Risotto, Korean Spicy Wings, Nachos Grande, Naga Chilli Pork, BBQ Pork Ribs, Andhra Chilli Chicken, Vada Puff Popsicle, Flammkuchen, Craft Beers, Signature Cocktails, Beer Infused Cocktails',
    silver :  'Serradura, Chakna Platter, Beetroot Salad, Mumbai Sandwich, Mutton Keema Pav, Pasta Arrabiatta',
    gold : 'Biriani, ragi-balls, Ghee Rice, Chicken Gravy, Chiken Kabab, chilly Chiken, Halva',
    Platinum : 'mutton-Biriyani, chikn Chops, fish fry, prawn dry',
    silvercost : '$700',
    goldcost : '$1200',
    platinumcost : '$1800',
    images: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    "platinumpic": 'https://s2.dmcdn.net/v/NWuw_1Qx30-A5n1km/x720',
      "goldpic": 'https://www.caterninja.com/frontend/web/images/app_img/no-image.jpg',
      "silverpic": 'https://lh3.googleusercontent.com/3488kHMtfLhfgMLX4HaV2FYRT1vnIrkYf5cxYDeEm-njvlC9Be1OEUsv1g_aBbQxqlMTdIZ0EanMaxMG_oumz8srIBsQF0e66EIA8xp8=w512-rw',
      "star": "4",
      'Location': '12th cross Sanjeevinininag Near manjunath theatre, Banglore - 96',
      'city':'Banglore'
  },
]
  return (
    <div >
        <CateringNav />
        
      <div className='z-0 mt-5 bg'>
      <h2 className='text-center my-3'>Collection</h2>
      <p className='text-center my-2 fs-4'>Explore curated lists of top Catering, on your special occation in Bengaluru, based on trends</p>
      <div className='my-5 row mx-auto '>
        <div className='col-3 mb-5'>
          <Link to='/cateringcarddetail' state={cateringData[0]}>
          <CateringCards 
               title= "New Horizon" img={img1} star= '4'
             /></Link>
            
        </div>
        <div className='col-3'>
          <Link to='/cateringcarddetail' state={cateringData[1]}>
            <CateringCards 
               title= "Annapoorna Catering" img={img2} star= '4'
             /></Link>
        </div>
        <div className='col-3'>
        <Link to='/cateringcarddetail' state={cateringData[3]} >
            <CateringCards 
               title= "Ramesh Catering" img={img3} star= '4'
             />
             </Link>
        </div>
        <div className='col-3'>
          <Link to='/cateringcarddetail' state={cateringData[2]} >
            <CateringCards 
               title= "Shree Catering Service" img={img4} star= '4'
             /></Link>
        </div>
      </div>
      </div> 
      <div className='text-center mb-5'>
        <img src={offer} alt='' style={{width:'80rem'}} />
      </div> 

      <div>
        <h1 className='mx-5'>Best Non-Veg Platter </h1>
      <div className='my-5 row mx-auto '>
        <div className='col-3 mb-5'>
          <Link to='/cateringcarddetail' state={cateringData[0]}>
          <CateringCards 
               title= "New Horizon" img={img1} star= '4'
             /></Link>
            
        </div>
        <div className='col-3'>
          <Link to='/cateringcarddetail' state={cateringData[1]}>
            <CateringCards 
               title= "Annapoorna Catering" img={img2} star= '4'
             /></Link>
        </div>
        <div className='col-3'>
          <Link to='/cateringcarddetail' state={cateringData[2]}>
            <CateringCards 
               title= "Ramesh Catering" img={img3} star= '4'
             />
             </Link>
        </div>
        <div className='col-3'>
          <Link to='/cateringcarddetail' state={cateringData[2]}>
            <CateringCards 
               title= "Shree Catering Service" img={img4} star= '4'
             />
             </Link>
        </div>
        </div>
      </div>
      </div>
    
  )
}

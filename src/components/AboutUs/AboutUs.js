import React from 'react'
import './AboutUs.scss'
import about from '../../assets/About.png'


const AboutUs = () => {

  return (
    <div className='aboutus'>
        <div className='about-content'>
            <div className='left'>
                <h1>About Us</h1>
                <p>Welcome to our electronic gadget online store, where innovation meets convenience. We pride ourselves on offering a curated selection of the latest and greatest gadgets that cater to your tech-savvy lifestyle. Whether you're looking for sleek smartphones, powerful laptops, trendy wearables, or any other electronic essentials, we've got you covered. Our commitment to quality and customer satisfaction ensures that you'll find top-notch products, competitive prices, and excellent service every time you shop with us. Explore the world of cutting-edge technology right at your fingertips. Shop now and elevate your digital experience with us.</p>
            </div>
            <div className='right'>
                
                    <img src={about} alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default AboutUs
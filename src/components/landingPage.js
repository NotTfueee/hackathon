import Carousel from 'react-bootstrap/Carousel';
import i1 from '../images/carouselImage1.jpeg';
import i2 from '../images/carouselimage2.jpeg';
import i3 from '../images/carouselImage3.jpeg';
import React from 'react'
import { Container } from '@mui/material';
import './carousel.css';
import Navbar from './Navbar';

export default function LandingPage() 
{

  return (
    <div>
      <Navbar/>

<Container style={{marginTop:'10px'}}>
      <Carousel data-bs-theme="dark" style={{  left:'0px', margin:'0px 10px 10px 10px', overflow: 'hidden' }} interval={1000}>
      <Carousel.Item>
        <div className='carouselImage'>
        <img    src={i1} className='image'
          alt="First 
          slide"
        />
        </div>
      <h1 style={{ position:'absolute' }}>Hello</h1>
      <div className="content">
        <h1 style={{fontSize:"70px"}}>Agriculture Farming</h1>
        <h1 style={{fontSize:"70px"}}>Products</h1>
        <span>Our agriculture project aims to revolutionize farming practices</span>
        <br></br> <span>through sustainable technology solutions and community empowerment.</span>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carouselImage'>
        <img    src={i2} className='image'
          alt="First 
          slide"
        />
        </div>
      <h1 style={{ position:'absolute' }}>Hello</h1>
      <div className="content">
        <h1 style={{fontSize:"70px"}}>Agriculture Farming</h1>
        <h1 style={{fontSize:"70px"}}>Products</h1>
        <span>Our agriculture project aims to revolutionize farming practices</span>
        <br></br> <span>through sustainable technology solutions and community empowerment.</span>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carouselImage'>
        <img    src={i3} className='image'
          alt="First 
          slide"
        />
        </div>
      <h1 style={{ position:'absolute' }}>Hello</h1>
      <div className="content">
        <h1 style={{fontSize:"70px"}}>Agriculture Farming</h1>
        <h1 style={{fontSize:"70px"}}>Products</h1>
        <span>Our agriculture project aims to revolutionize farming practices</span>
        <br></br> <span>through sustainable technology solutions and community empowerment.</span>
        </div>
      </Carousel.Item>

      
      
      
    </Carousel>
    </Container>
    </div>
  )
}

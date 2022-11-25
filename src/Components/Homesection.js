import React from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/home-slide-1.jpg';
import photo from '../images/home-slide-2.jpg';
import photo1 from '../images/home-slide-3.jpg';
function Homesection() {
  return (

	<div className="Homesection p-2" id="Home">
	<div class="container mt-3">
    <Carousel >
      <Carousel.Item>
        <img style={{height:"600px"}} id="hcarouselimg"
          className="w-100 mx-auto d-block  "
          src={pic}
          alt="First slide"
        />
        <Carousel.Caption>
		<h2 className='text-white'>BEST ONLINE COURSES</h2>
        
		<h5 style={{color:"white"}}>Education is a powerful driver of development and one of the strongest instruments for reducing poverty and improving health, gender equality, peace</h5>
  <button class="bt bt-primary p-2 mt-3 me-4" id="Homesectionbtn">Read More</button><button class="bt bt-primary mt-3 p-2 " id="Homesectionbtn">Join Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"600px"}} id="hcarouselimg"
         className="w-100 mx-auto d-block "
          src={photo}
          alt="Second slide"
        />

        <Carousel.Caption>
		<h2 className='text-white'>BEST ONLINE COURSES</h2>
        
		<h5 style={{color:"white"}}>Education is a powerful driver of development and one of the strongest instruments for reducing poverty and improving health, gender equality, peace</h5>
  <button class="bt bt-primary p-2 mt-3 me-4" id="Homesectionbtn">Read More</button><button class="bt bt-primary mt-3 p-2 " id="Homesectionbtn">Join Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"600px"}} id="hcarouselimg"
         className="w-100 mx-auto d-block "
          src={photo1}
          alt="Third slide"
        />

        <Carousel.Caption>
		<h2 className='text-white'>BEST ONLINE COURSES</h2>
        
		<h5 style={{color:"white"}}>Education is a powerful driver of development and one of the strongest instruments for reducing poverty and improving health, gender equality, peace</h5>
  <button class="bt bt-primary p-2 mt-3 me-4" id="Homesectionbtn">Read More</button><button class="bt bt-primary mt-3 p-2 " id="Homesectionbtn">Join Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
	</div>
	</div>
  )
}

export default Homesection


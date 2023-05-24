import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import landing_1 from "../../assets/photos/landing_1.webp"
import landing_2 from "../../assets/photos/landing_2.webp";

function Slide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div >
        <img
          className="d-block w-100"
          src={landing_1}
          alt="First slide"
          style={{width:"600px" ,height:"300px"}}
        />
       
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
  
      </div>
      <div>
        <img
          className="d-block w-100"
          src={landing_2}
          alt="Second slide"
          style={{width:"700px" ,height:"300px"}}
        />
      </div>
    </Carousel>
  );
}

export default Slide;
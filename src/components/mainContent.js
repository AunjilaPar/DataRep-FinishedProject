import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

//Content
export class MainContent extends React.Component {
    render() {
      //added carousel fro image slider
        return <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-x222/specifications/lines/_jcr_content/par/productinfotextimage/media/slides/videoimageslide/image.MQ6.0.2x.20180509154621.jpeg"
            alt="First slide"
          />        
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-x222/offers-and-services/accessoires/_jcr_content/par/productinfotextimage/media/slides/videoimageslide_5f0b/image.MQ6.0.2x.20190830095130.jpeg"
            alt="Third slide"
          />     
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-x222/specifications/lines/_jcr_content/par/productinfotextimage/media/slides/videoimageslide_1435945679/image.MQ6.0.2x.20170726103737.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    }//end of Render
}//End of Content
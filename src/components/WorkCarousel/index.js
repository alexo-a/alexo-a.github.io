import Carousel from 'react-bootstrap/Carousel'
//import Item from "react-bootstrap/CarouselItem"
//import Caption from "react-bootstrap/CarouselCaption"
import React, { useState } from 'react';
import hopto from "../../assets/images/HopTo.PNG"
import pagebound from "../../assets/images/Pagebound.png"
import projectivity from "../../assets/images/Projectivity.PNG"

function WorkCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="w-50 h-50 mx-auto">
            <Carousel.Item>
                <a href="www.google.com">
                <img
                    className="d-block w-100"
                    src={hopto}
                    alt="HopTo screenshot"
                />
                </a>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pagebound}
                    alt="Pagebound screenshot"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={projectivity}
                    alt="Projectivity screenshot"
                />

                <Carousel.Caption className="bg-secondary">
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default WorkCarousel;
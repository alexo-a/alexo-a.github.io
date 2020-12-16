import Carousel from 'react-bootstrap/Carousel'
//import Row from 'react-bootstrap/Row'
//import Col from "react-bootstrap/Col"
//import Container from 'react-bootstrap/Container'
//import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"
import Item from "react-bootstrap/CarouselItem"
import Caption from "react-bootstrap/CarouselCaption"
import React, { useState } from 'react';
import hopto from "../../assets/images/HopTo.PNG"
import pagebound from "../../assets/images/Pagebound.png"
import projectivity from "../../assets/images/Projectivity2.png"
import $ from "jquery"

function WorkCarousel() {
    let examples = [
        {
            img: projectivity,
            title: "Projectivity",
            caption: "Dolor cupidatat quis ad pariatur ipsum aliquip eu eiusmod ex excepteur nulla nostrud.",
            repositoryURL: "",
            applicationURL: ""
        },
        {
            img: pagebound,
            title: "Pagebound",
            caption: "Labore magna irure sunt consequat nostrud qui labore tempor nulla.",
            repositoryURL: "",
            applicationURL: ""
        },
        {
            img: hopto,
            title: "HopTo",
            caption: "Consequat laboris Lorem dolor velit elit aliquip do duis Lorem ullamco consequat elit labore Lorem.",
            repositoryURL: "",
            applicationURL: ""
        }
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function changeActive(leftOrRight){
        
        let newActive=0;

        //find current active
        let currentActive=0;
        for (let x = 0; x < examples.length; x++) {
            if ($(`#example-${x}`).hasClass('d-block')) {
                $(`#example-${x}`).removeClass('d-block');
                currentActive=x;
            }
        }
        console.log(`newActive: ${newActive}`)
        if (currentActive === examples.length-1 && leftOrRight === 1) {
            newActive = 0;
        }
        else if (currentActive === 0 && leftOrRight === -1) {
            newActive = examples.length-1;
        }
        else {
            newActive = currentActive + leftOrRight
        }
        console.log(`changing from ${currentActive} to ${newActive}`)
        for (let x=0; x < examples.length;x++){
            $(`#example-${x}`).addClass(x === newActive ? 'd-block' : "d-none")
        }
    }

    return (


        <Carousel className="m-3" activeIndex={index} onSelect={handleSelect}>
            {examples.map( (ex, index) => {
                return(
                    <Carousel.Item className="example-container">
                        <img
                            className="d-block vw-100 vh-50"
                            src={ex.img}
                            alt="First slide"
                        />
                        <Carousel.Caption className="caption p-1">
                            <h3 className="p-0 pt-1">{ex.title}</h3>
                            <p className="p-0 mb-0">{ex.caption}</p>
                            <div className="links mb-3 mt-0">
                                <Button href={ex.applicationURL} variant="primary">Application</Button>
                                <Button href={ex.repositoryURL} variant="primary">Repository</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

            
        </Carousel>
    )


        
       
}

export default WorkCarousel;

/*
        <Container className="vw-100 m-0 mh-50 p-0">
        <Row className="vw-100 mh-50 mx-auto">
                <Col xs={1} id="prev" onClick={() => { changeActive(-1) }} className="carousel-arrow mx-auto">&lt;</Col>
            <Col xs={10} className="h-75 p-0">
                {examples.map((ex, index) => {
                    return (
                        <div id={`example-${index}`} className={index === 0 ? "d-block example-container" : " d-none example-container"}>
                            <Image rounded className="mw-100 work-example" src={ex.img}></Image>
                            <div className="caption">
                                <h5 className="">{ex.title}</h5>
                                <p className="">{ex.caption}</p>
                            </div>
                        </div>
                    )
                })}
            </Col>
                <Col xs={1} id="next" onClick={() => { changeActive(1) }} className="carousel-arrow mx-auto">&gt;</Col>




        <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 mh-50 mx-auto">
            <Carousel.Item styles={{backgroundImage: `url(${pagebound})`}}>
                <a href="www.google.com">
                <img
                    className="d-block mx-auto mw-100 mh-75"
                    src={hopto}
                    alt="HopTo screenshot"
                />
                </a>
                <Carousel.Caption className="bg-secondary carousel-caption d-none d-md-block">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto mw-100 mh-75"
                    src={pagebound}
                    alt="Pagebound screenshot"
                />

                <Carousel.Caption className="bg-secondary carousel-caption d-block">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto mw-100 mh-75"
                    src={projectivity}
                    alt="Projectivity screenshot"
                />

                <Carousel.Caption className="bg-secondary carousel-caption">
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
</Carousel>
        </Row>
</Container>*/
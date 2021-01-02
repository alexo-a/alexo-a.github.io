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
import fungeoncrawler from "../../assets/images/fungeon-crawler.PNG"
import pagebound from "../../assets/images/Pagebound.png"
import projectivity from "../../assets/images/Projectivity2.png"
import $ from "jquery"

function WorkCarousel() {
    let examples = [
        {
            img: projectivity,
            title: "Projectivity",
            caption: "Designed for the hands-on manager, Projectivity allows one to create a project with as many tasks as desired. You can check task progress and export reports to pdf.",
            repositoryURL: "https://github.com/alexo-a/projectivity",
            applicationURL: "https://evening-dawn-14533.herokuapp.com/login"
        },
        {
            img: pagebound,
            title: "Pagebound",
            caption: "Our social-distancing-friendly approach to the classic book club. Start or join a club, wherein the administrator can select a new book. Users in a club can create new or contribute to existing discussions. Users can also direct-message one another for private conversations.",
            repositoryURL: "https://github.com/TheBobbyLlama/pagebound",
            applicationURL: "https://tranquil-shelf-96400.herokuapp.com/"
        },
        {
            img: hopto,
            title: "HopTo",
            caption: "Fancy a beer? HopTo will help you get to a brewery of your choice. Even better, HopTo will help you plan a trip to visit multiple breweries and will calculate a Bing Maps route for you! Users can also keep track of breweries they've visited and can favorite their most-loved breweries.",
            repositoryURL: "https://github.com/laurenceokite/hop-to",
            applicationURL: "https://laurenceokite.github.io/hop-to/"
        },
        {
            img: fungeoncrawler,
            title: "Fungeon Crawler (pre-pre-pre-Alpha)",
            caption: "Do you like dungeon crawler RPGs such as Diablo or Etrian Odyssey? If so, this game will probably disappoint you. My personal project, Fungeon Crawler is a D&D-like game where users can explore dungeons and fight (then loot) enemies.",
            repositoryURL: "https://github.com/alexo-a/fungeon-crawler",
            applicationURL: "https://alexo-a.github.io/fungeon-crawler/"
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
                                <Button href={ex.applicationURL} target="_blank" rel="noopener noreferrer" variant="primary">Application</Button>
                                <Button href={ex.repositoryURL} target="_blank" rel="noopener noreferrer"
                                    variant="primary">Repository</Button>
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
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Ducati.css'
import Bikeview from './Bikeview';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';





function Ducati() {


  const [bikeList, setRest] = useState([])


  // api to access data
  const getData = async () => {
    const result = await fetch('/ducati.json')
    result.json().then(data => setRest(data.ducati))

  }

  // console.log(bikeList);

  useEffect(() => {
    getData()
  }, [])


  return (





    <Row className='ms-2'>



      <div>

        <Carousel>
          <Carousel.Item>
            <img id='img'
              className="d-block w-100"
              src="https://i.postimg.cc/C1k77wKB/Vittoria-Bez-12-Maggio-hero-1600x1000.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>MOTOGP</h5>
              <h1><strong>All-Ducati podium in France</strong></h1>
              <h4>Bezzecchi wins at Le Mans ahead of Martin and Zarco</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='img'
              className="d-block w-100"
              src="https://i.postimg.cc/nhcC1xkd/Bez-1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1><strong id='strong'>Riding Academy</strong></h1>
              <p className='text-black fs-5'>Since 2003, more than 28,000 motorcyclists from all over the world have chosen the Ducati experience to improve their riding skills.

                Very high-level teaching and instructors, prestigious locations, the entire latest Ducati range, and lots of fun have always been the features that make each DRE course a unique offer.

                Five experiences suitable for every style: Rookie, Road, Track Warm Up, Racetrack and Adventure.

                For each course, Ducati will provide its motorcycles fleet for each participant, the possibility of renting technical clothing and a personalised photo-video service. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='img'
              className="d-block w-100"
              src="https://i.postimg.cc/J4YPq6qL/221106114436-02-bagnaia-110622-restricted.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 id='h3'>RACETRACK</h3>
              <h1 id='h1'><strong>The essence of sporting spirit</strong></h1> <br /><br /><br />

              <h3 id='h3'>TRAVEL</h3>
              <h1 id='h1'><strong>YES, Travel in DUCATI style</strong></h1> <br /> <br /> <br />

              <h3 id='h3'>LIFESTYLE</h3>
              <h1 id='h1'><strong>Unique. Like your style</strong></h1> <br /> <br />

             {/* <h3 id='h3'>SPORT & FUN</h3> */}
              {/* <h1><strong>Sportiness leads the way</strong></h1> */}
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>





      {
        bikeList.map(rest => (
          <Col id='c1' className='p-2 mt-5' lg={4} md={6}>


            <Link id='l1' to={`/viewBike/${rest.id}`}>
              <Card className='mt-5 ms-5' style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{ height: '200px' }} src={rest.photograph} />
                <Card.Body>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text style={{ color: 'black' }}>
                    {rest.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>


          </Col>
        ))
      }
    </Row>

  )
}

export default Ducati
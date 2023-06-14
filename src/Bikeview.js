import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Bikedetails from './Bikedetails'
import Overview from './Overview'





function Bikeview() {


    const [bikeList, setRest] = useState([])


    // api to access data
    const getData = async () => {
        const result = await fetch('/ducati.json')
        result.json().then(data => setRest(data.ducati))

    }
    // object create for useParams
    const params = useParams()
    console.log(params.id);


    // find single data
    const singleRest = bikeList.find(i => i.id == params.id)
    console.log(singleRest);

    useEffect(() => {
        getData()
    }, [])





    return (
        <div className='container'>
            {singleRest ?
                (
                    <Row>

                        <Col lg={6} md={6}>
                            <img className='w-75 container p-5' style={{ height: '500px', width: '600px' }} src={singleRest.photograph} />

                        </Col>

                        <Col lg={6} md={6} className='mt-5 fs-3 p-3'>

                            <ListGroup>
                                <ListGroup.Item><h1 className='text-danger'>{singleRest.name}</h1></ListGroup.Item>
                                <ListGroup.Item>POWER: <strong>{singleRest.power}</strong></ListGroup.Item>
                                <ListGroup.Item>TORQUE: <strong>{singleRest.torque}</strong></ListGroup.Item>
                                <ListGroup.Item>DRY WEIGHT: <strong>{singleRest.dryweight}</strong></ListGroup.Item>
                                <ListGroup.Item>PRICE: <strong>{singleRest.price}</strong></ListGroup.Item>
                                <ListGroup.Item>
                                    {
                                        <Bikedetails bikespec={singleRest.bike}></Bikedetails>

                                    }

                                    <Overview overviewlist={singleRest.overall}></Overview>

                                </ListGroup.Item>


                            </ListGroup>

                        </Col>

                    </Row>
                ) : ""
            }
        </div>
    )
}

export default Bikeview
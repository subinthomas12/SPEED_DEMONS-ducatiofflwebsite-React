import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Overview({ overviewlist }) {
    return (
        <div>


            <Accordion className='mt-4 p-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Overview</h4></Accordion.Header>
                    <Accordion.Body>
                      {
                        overviewlist.map(i=>
                            <div>
                                <h5>{i.overview}</h5>
                            </div>
                            )
                      }
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Tech spec</h4></Accordion.Header>
                    <Accordion.Body>

                    {
                        overviewlist.map(i=>
                            <div>
                                <h5>{i.techspec}</h5>
                            </div>
                            )
                      }
                        
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Explore</h4></Accordion.Header>
                    <Accordion.Body>

                    {
                        overviewlist.map(i=>
                            <div>
                                <h5>{i.explore}</h5>
                            </div>
                            )
                      }
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    )
}

export default Overview
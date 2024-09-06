import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import "./home.css"

function Home() {
  return (
    <>
    <div>
    <h2>NaarSoft</h2>
 
    </div>
    <div className='main-div' >
        
        <Container >
        
            <Col>
            <Sidebar/>

            </Col>
       
            
        </Container>
      
    </div>
    

    </>
  )
}

export default Home
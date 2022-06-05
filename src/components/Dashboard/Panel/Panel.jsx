import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Accountcard from '../Accountcard/Accountcard';
import './panel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Panel = () => {

    return (
        <div className='main'>
            <Header />
            <Container className='accountsContainer'>
                <Row className='accountsRow'>
                    <Col xs={6} md='auto' lg='auto' className='cards'><Accountcard/></Col>
                    <Col xs={6} md='auto' lg='auto' className='cards'><Accountcard/></Col>
                    <Col xs={6} md='auto' lg='auto' className='cards'><Accountcard/></Col>
                    <Col xs={6} md='auto' lg='auto' className='cards'><Accountcard plus/></Col>
                </Row>
            </Container>
            <Container className='chartContainer'>
                    <div className='lastMovesContainer'></div>
                    <div className='pieContainer'></div>
            </Container>
            
        </div>
    );
}

export default Panel;
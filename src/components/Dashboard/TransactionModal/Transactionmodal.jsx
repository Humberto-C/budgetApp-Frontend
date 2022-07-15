import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../Accountcard/accountcard.css';
import './Transactionmodal.css';
//import Card from 'react-bootstrap/Card';

/* Components */
import Addcard from '../Transactioncards/Addcard';


const Transactionmodal = (props) => {

    const account = props.account;
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button className='dotsAccountButton' onClick={() => setModalShow(true)}>
                <DotsHorizontalIcon className='dotsIcon' />
            </Button>

            <MyVerticallyCenteredModal
                account={account}
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop="static"
                
            />
        </>
    )
}

const MyVerticallyCenteredModal = (props) => {

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='modalHeader'>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.account}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    fill
                >
                    <Tab eventKey="home" title="Home">
                        <Addcard/>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">

                    </Tab>
                    <Tab eventKey="longer-tab" title="Loooonger Tab">

                    </Tab>
                    <Tab eventKey="contact" title="Contact">

                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// const Income = () => {
//     return(
        
//     );
// }

export default Transactionmodal;
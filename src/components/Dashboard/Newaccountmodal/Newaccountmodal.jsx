import { React, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlusIcon } from '@heroicons/react/solid';
import Newaccountcard from './Newaccountcard/Newaccountcard';
import './newaccountmodal.css';


const Newaccountmodal = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button className='newAccountButton' variant="none" onClick={() => setModalShow(true)}>
                <Card className='cardAccount accountDashboard'>
                    <Card.Header className='headerPlus'>
                        <span>New Account</span>
                    </Card.Header>
                    <Card.Body className='cardBodyAccount'>
                        <Card.Title className='text-center'><PlusIcon className="plusIcon" /></Card.Title>
                    </Card.Body>
                </Card>
            </Button>

            <MyVerticalCenterModal 
                show={modalShow}
                onHide={()=> setModalShow(false)}
                backdrop='static'
            />
        </>
    );
}

const MyVerticalCenterModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    New Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Newaccountcard/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Newaccountmodal;
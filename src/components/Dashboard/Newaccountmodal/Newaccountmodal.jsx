import { React, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PlusIcon } from '@heroicons/react/solid';
import Newaccountcard from './Newaccountcard/Newaccountcard';
import './newaccountmodal.css';


const Newaccountmodal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const setNewAccountCreated = props.setNewAccountCreated;

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
                onHide={() => setModalShow(false)}
                backdrop='static'
                person={props.person}
                setNewAccountCreated={setNewAccountCreated}
            />
        </>
    );
}

const MyVerticalCenterModal = (props) => {
    
    const setNewAccountCreated= props.setNewAccountCreated;

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
                <Newaccountcard onHide={props.onHide} person={props.person} setNewAccountCreated={setNewAccountCreated}/>
            </Modal.Body>
        </Modal>
    );
}

export default Newaccountmodal;
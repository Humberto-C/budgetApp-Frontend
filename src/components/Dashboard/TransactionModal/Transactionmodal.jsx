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
import Transactioncard from './Transactioncards/Transactioncard';


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
            {/* <Modal.Header className='modalHeader'>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.account}
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <Tabs
                    defaultActiveKey="income"
                    className="mb-3 tabsModal"
                    fill
                >
                    <Tab eventKey="income" title="Income">
                        <Transactioncard income onHide={props.onHide} account={props.account}/>
                    </Tab>
                    <Tab eventKey="expense" title="Expense">
                        <Transactioncard expense onHide={props.onHide} account={props.account}/>
                    </Tab>
                    <Tab eventKey="transfer" title="Transfer">
                        <Transactioncard transfer onHide={props.onHide} account={props.account}/>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    );
}


export default Transactionmodal;
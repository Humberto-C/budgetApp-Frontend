import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Button from 'react-bootstrap/Button';
import '../Accountcard/accountcard.css';
import './Transactionmodal.css';
//import Card from 'react-bootstrap/Card';

/* Components */
import Transactioncard from './Transactioncards/Transactioncard';
import { userInfo } from '../../../contexts/UserData';




const Transactionmodal = (props) => {

    /* Variables and functions from Context */
    const { getLast10movements } = useContext(userInfo);
    const account = props.account;
    const [modalShow, setModalShow] = useState(false);
    const handleHide = () => {
        setModalShow(false);
        getLast10movements();
    }

    return (
        <>
            <Button className='dotsAccountButton' onClick={() => setModalShow(true)}>
                <DotsHorizontalIcon className='dotsIcon' />
            </Button>

            <MyVerticallyCenteredModal
                account={account}
                show={modalShow}
                onHide={handleHide}
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
            <Modal.Body>
                <Tabs
                    defaultActiveKey="income"
                    className="mb-3 tabsModal"
                    fill
                >
                    <Tab eventKey="income" title="Income">
                        <Transactioncard income 
                        onHide={props.onHide} 
                        account={props.account}
                                             
                        />
                    </Tab>
                    <Tab eventKey="expense" title="Expense">
                        <Transactioncard expense 
                        onHide={props.onHide} 
                        account={props.account}
                                                                       
                        />
                    </Tab>
                    <Tab eventKey="transfer" title="Transfer">
                        <Transactioncard transfer 
                        onHide={props.onHide} 
                        account={props.account}
                                              
                        />
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    );
}


export default Transactionmodal;
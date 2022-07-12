import React from 'react';
import Card from 'react-bootstrap/Card';
import { DotsHorizontalIcon, CurrencyDollarIcon, PlusIcon } from '@heroicons/react/solid';
import Transactionmodal from '../TransactionModal/Transactionmodal';
import './accountcard.css'


const Accountcard = ({ plus }) => {
    let accountName = 'Account1';

   
    if (plus) {
        return (
            <Card className='cardAccount accountDashboard'>
                <Card.Header className='headerPlus'>
                    <span>New Account</span>
                </Card.Header>
                <Card.Body className='cardBodyAccount'>
                    <Card.Title className='text-center'><PlusIcon className="plusIcon" /></Card.Title>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card className='cardAccount'> 
            <Card.Header className='headerAccount'>
                <span>{accountName}</span>                
                <Transactionmodal account={accountName}><DotsHorizontalIcon className='dotsIcon' /></Transactionmodal>
            </Card.Header>
            <Card.Body className='cardBodyAccount'>
                <Card.Title className='text-center'><CurrencyDollarIcon className="dollarIcon" /> USD 110.00</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Accountcard;
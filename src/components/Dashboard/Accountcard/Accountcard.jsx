import React from 'react';
import Card from 'react-bootstrap/Card';
import { DotsHorizontalIcon/* CurrencyDollarIcon PlusIcon*/ } from '@heroicons/react/solid';
import Transactionmodal from '../TransactionModal/Transactionmodal';
import Newaccountmodal from '../Newaccountmodal/Newaccountmodal';
import './accountcard.css'


const Accountcard = (props) => {

    
    const { plus, account, person, setNewAccountCreated } = props;

    if (plus) {
        return (
            <Newaccountmodal
                person={person}
                setNewAccountCreated={setNewAccountCreated}
            />
        );
    }

    return (
        <Card className='cardAccount'>
            <Card.Header className='headerAccount'>
                <span>{account.account_name}</span>
                <Transactionmodal account={account}><DotsHorizontalIcon className='dotsIcon' /></Transactionmodal>
            </Card.Header>
            <Card.Body className='cardBodyAccount'>
                <Card.Title className='text-center'> USD 110.00</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Accountcard;
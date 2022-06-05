import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DotsHorizontalIcon, CurrencyDollarIcon, PlusIcon } from '@heroicons/react/solid'
import './accountcard.css'


const Accountcard = ({ plus }) => {
    let accountName = 'Account1';

    if(plus){
        return(
            <Card>
            <Card.Header className='headerPlus'>
                <span>New Account</span>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'><PlusIcon class="plusIcon"/></Card.Title>
            </Card.Body>
        </Card>
        );
    }

    return (
        <Card>
            <Card.Header>
                <span>Account 1</span> 
                <DotsHorizontalIcon className='dotsIcon'/>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'><CurrencyDollarIcon class="dollarIcon"/> USD 110.00</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Accountcard;
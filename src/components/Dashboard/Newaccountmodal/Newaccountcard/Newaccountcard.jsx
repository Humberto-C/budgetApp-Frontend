import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './newaccountcard.css';

const Newaccountcard = ({ onHide, person, setNewAccountCreated }) => {

    const [newAccount, setNewAccount] = useState({
        validated: false,
        account_name: '',
        description: '',
        account_number: 0,
        initial_value: 0,
        currency: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const postAccount = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dashboard/newaccount`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        person: person,
                        description: newAccount.description,
                        account_name: newAccount.account_name,
                        initial_value: newAccount.initial_value,
                        account_number: newAccount.account_number,
                        currency: newAccount.currency,
                    }
                )
            });

            const parseRes = await postAccount.json();
            console.log(parseRes.rows);
            onHide();
            setNewAccountCreated(true);
            

        } catch (error) {
            console.log(error.message)
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAccount(prevState => ({...prevState, [name]: value}));
        console.log(newAccount);
    }

    return (
        <Card>
            <Card.Body>
                <Form noValidate validated={newAccount.validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                            className='mb-3'
                            type='text'
                            name='account_name'
                            value={newAccount.account_name}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>* Please select a name </Form.Control.Feedback>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            className='mb-3'
                            type='text'
                            name='description'
                            value={newAccount.description}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>* Could help you to a better managing </Form.Control.Feedback>
                        <Form.Label>Bank Account Number</Form.Label>
                        <Form.Control
                            className='mb-3'
                            type='text'
                            name='account_number'
                            value={newAccount.account_number}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'> </Form.Control.Feedback>
                        <Form.Label>Initial Value</Form.Label>
                        <Form.Control
                            className='mb-3'
                            type='text'
                            name='initial_value'
                            value={newAccount.initial_value}
                            onChange={handleChange}
                        />
                        
                        <select 
                            className="form-select my-4" 
                            name='currency' 
                            aria-label="multiple select example"
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Currency</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="HNL">HNL</option>
                        </select>
                        <Form.Control.Feedback type='invalid'> Select a currency </Form.Control.Feedback>
                        <Button className="btn btn-secondary" onClick={onHide}>Cancel</Button>
                        <Button className="btn mx-3" type='submit'>Create</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Newaccountcard;
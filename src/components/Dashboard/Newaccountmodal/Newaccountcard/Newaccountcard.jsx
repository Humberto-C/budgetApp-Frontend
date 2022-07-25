import React from "react";
import { Card, Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './newaccountcard.css';

const Newaccountcard = () => {
    return(
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                            className='mb-3'
                            type='text'
                            placeholder='Account Name'
                            required
                        />
                        <Form.Control
                            className='mb-3'
                            type='text'
                            placeholder='Bank Account Number'                            
                        />
                        <Form.Control
                            className='mb-3'
                            type='text'
                            placeholder='Initial Value'                            
                        />
                        <Dropdown>
                            <Dropdown.Toggle variant='none' className='currencyButton mb-4'>
                                Currency
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>USD</Dropdown.Item>
                                <Dropdown.Item>EUR</Dropdown.Item>
                                <Dropdown.Item>HNL</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className='float-right' type='submit'>Create</Button>
                        </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Newaccountcard;
import { useState, useContext } from 'react';
import { userInfo } from '../../../../contexts/UserData'
import { Card, Col, Form, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import { getIncome, getExpenses } from '../categoryData';
import './Transactioncard.css';
import { ArrowRightIcon } from '@heroicons/react/solid';

//context state


const Transactioncard = (props) => {

    const { personId, accounts } = useContext(userInfo);
    const { income, expense, transfer, account } = props;
    const incomeCategories = getIncome();
    const expensesCategories = getExpenses();
    const onHide = props.onHide;
    const [inputState, setInputState] = useState({
        input_value: '',
        account_id: account.account_id,
        person_id: personId,
        category: 'Category',
        accountFrom: account.account_name,
        accountTo: 'Account',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (income) {
            try {
                const input = await fetch(`${process.env.REACT_APP_BACKEND_URL}/input`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        income: true,
                        input_value: inputState.input_value * 1,
                        account_id: account.account_id,
                        person_id: personId,
                        category: inputState.category,
                    }),
                })

                const parseInput = await input.json();
                console.log(parseInput);


            } catch (error) {
                console.error(error.message);
            }
        }

        if(expense){
            try {
                const input = await fetch(`${process.env.REACT_APP_BACKEND_URL}/input`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        expense: true,
                        input_value: inputState.input_value * -1,
                        account_id: account.account_id,
                        person_id: personId,
                        category: inputState.category,
                    }),
                })

                const parseInput = await input.json();
                console.log(parseInput);

            } catch (error) {
                console.error(error.message);
            }
        }

        if(transfer){
            try {
                const input = await fetch(`${process.env.REACT_APP_BACKEND_URL}/input`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        transfer: true,
                        input_value: inputState.input_value,
                        account_id: account.account_id,
                        person_id: personId,
                        category: inputState.category,
                    }),
                })

                const parseInput = await input.json();
                console.log(parseInput);

            } catch (error) {
                console.error(error.message);
            }
        }

        setInputState((prevState) => ({
            ...prevState,
            input_value: '',
            category: 'Category',
        }));
        console.log(inputState);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputState((prevState) => ({
            ...prevState, [name]: value
        }));
        console.log(inputState);
    };

    if (income) {
        return (
            <Card className="incomeCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>+ $</Form.Label>
                                    <Form.Control
                                        name='input_value'
                                        type="text"
                                        value={inputState.input_value}
                                        placeholder='100.00'
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="firstCategoryGroup">
                                <Form.Select
                                    size="sm"
                                    className="text-center"
                                    name='category'
                                    onChange={handleChange}
                                >
                                    <option value={inputState.category}>{inputState.category}</option>
                                    {incomeCategories.map((x, i) => <option key={Math.random() * 5 + x} value={x}>{x}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='d-flex px-5 mt-4' >
                            <Button className='mt-2' type='submit' onClick={handleSubmit}>Add Income</Button>
                            <Button className='mt-2' onClick={onHide}>Close</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    if (expense) {
        return (
            <Card className="expenseCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>- $</Form.Label>
                                    <Form.Control
                                        name='input_value'
                                        type="text"
                                        placeholder='100.00'
                                        value={inputState.input_value}
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="firstCategoryGroup">
                                <Form.Select
                                    size="sm"
                                    className="text-center"
                                    name='category'
                                    onChange={handleChange}
                                >
                                    <option value={inputState.category}>{inputState.category}</option>
                                    {expensesCategories.map((x) => <option key={Math.random() * 5 + x} value={x}>{x}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='d-flex px-5 mt-4' >
                            <Button className='mt-2' type='submit' onClick={handleSubmit}>Add Income</Button>
                            <Button className='mt-2' onClick={onHide}>Close</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    if (transfer) {
        return (
            <Card className="transferCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>$</Form.Label>
                                    <Form.Control
                                        name='input_value'
                                        type="text"
                                        value={inputState.input_value}
                                        placeholder='100.00'
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='tranfer2row mb-3'>
                            <Col>
                                <Form.Select
                                    name="accountFrom"
                                    size="sm"
                                    className="text-center"
                                    onChange={handleChange}
                                >
                                    <option value={inputState.accountFrom}>{inputState.accountFrom}</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <ArrowRightIcon className='transferIcon' />
                            </Col>
                            <Col>
                                <Form.Select
                                    size="sm"
                                    className="text-center"
                                    name="accountTo"
                                    onChange={handleChange}
                                >
                                    <option value={inputState.accountTo}>{inputState.accountTo}</option>
                                    {accounts.filter((x) => x.account_name !== inputState.accountFrom).map((x) => <option key={Math.random() * 5 + x.account_name} value={x.account_name}>{x.account_name}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='commentInput'>
                                <Form.Control
                                    type='text'
                                    placeholder='Comment'
                                >
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row className='d-flex px-5 mt-4' >
                            <Button className='mt-2' type='submit' onClick={handleSubmit}>Add Income</Button>
                            <Button className='mt-2' onClick={onHide}>Close</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }


}

export default Transactioncard;
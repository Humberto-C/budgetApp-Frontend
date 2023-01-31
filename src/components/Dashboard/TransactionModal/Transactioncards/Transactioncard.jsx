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

    const { personId, accounts, setAccounts } = useContext(userInfo);
    const { income, expense, transfer, account } = props;
    const incomeCategories = getIncome();
    const expensesCategories = getExpenses();
    const onHide = props.onHide;
    const [inputState, setInputState] = useState({
        input_value: '',
        account_id: account.account_id,
        person_id: personId,
        category: 'Category',
        tranferCategory: '',
        accountFrom: account.account_name,
        accountTo: 'Account',
        validated: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const input = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/input`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputState),
                }
            );

            const parsedInput = await input.json();

            console.log(parsedInput);

            if(parsedInput === 'Transfer Category/Comment Can Not be empty!'){
                setInputState((prevState) => ({
                    ...prevState,
                    validated: true,
                }));
                return console.log(input);
            }

            

        } catch (error) {
            console.error(error.message);
        }

        if(inputState.income){
            setAccounts((prevState) => {
                return prevState.map((x) => {
                    if(x.account_id === account.account_id){                       
                        return {...x, balance: parseInt(x.balance) + parseInt(inputState.input_value)}
                    }
                    return x;
                });
            });
        }
        if(inputState.expense){
            setAccounts((prevState) => {
                return prevState.map((x) => {
                    if(x.account_id === account.account_id){                       
                        return {...x, balance: parseInt(x.balance) - parseInt(inputState.input_value)}
                    }
                    return x;
                });
            });
        }
        if(inputState.transfer){
            setAccounts((prevState) => {
                return prevState.map((x) => {
                    if(x.account_id === account.account_id){                       
                        return {...x, balance: parseInt(x.balance) - parseInt(inputState.input_value)}
                    }
                    return x;
                });
            });
            setAccounts((prevState) => {
                return prevState.map((x) => {
                    if(x.account_id === inputState.accountTo_id){                       
                        return {...x, balance: parseInt(x.balance) + parseInt(inputState.input_value)}
                    }
                    return x;
                });
            });
        }

        setInputState((prevState) => ({
            ...prevState,
            input_value: '',
            category: 'Category',
            tranferCategory: '',
            accountTo: 'Account',
        }));
        console.log(inputState);
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (income) {
            setInputState((prevState) => ({
                ...prevState,
                [name]: value,
                income: true,
            }));
        }
        if (expense) {
            setInputState((prevState) => ({
                ...prevState,
                [name]: value,
                expense: true,
            }));
        }
        if (transfer) {            
            if(name === 'accountTo'){
                let acc = accounts.filter((x) => x.account_name === value);
                setInputState((prevState) => ({
                    ...prevState,
                    accountTo_id: acc[0].account_id,
                }))
            }
            setInputState((prevState) => ({
                ...prevState,
                [name]: value,
                transfer: true,
            }));
        }


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
                            <Button className='mt-2' type='submit' onClick={handleSubmit}>Add Expense</Button>
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
                    <Form noValidate validated={inputState.validated}>
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
                                    placeholder='Comment/Category'
                                    name='tranferCategory'
                                    value={inputState.tranferCategory}
                                    onChange={handleChange}
                                    required
                                >
                                </Form.Control>
                                <Form.Control.Feedback type='invalid'>Category/Comment CAN NOT be empty</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className='d-flex px-5 mt-4' >
                            <Button className='mt-2' type='submit' onClick={handleSubmit}>Make transfer</Button>
                            <Button className='mt-2' onClick={onHide}>Close</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }


}

export default Transactioncard;
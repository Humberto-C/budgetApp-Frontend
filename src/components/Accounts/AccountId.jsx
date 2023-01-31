import { useContext, useState, useEffect } from "react";
import Header from "../Dashboard/Header/Header";
import { userInfo } from "../../contexts/UserData";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

/* Components */
import Transactionmodal from '../Dashboard/TransactionModal/Transactionmodal';




const AccountId = (props) => {

    const { logout, userNames, accounts, getHistory, history } = useContext(userInfo);
    const { id } = useParams();
    const account = accounts.filter(x => x.account_id === parseInt(id))[0];
    const [filter, setFilter] = useState({
        filter: '',
        month: 1,
        year: 2023,
    });

    useEffect(() => {
        getHistory(account, filter);
        console.log(history, Date.now());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        setFilter((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(filter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(filter);
        getHistory(account, filter);
    };


    return <div className="main">
        <Header logout={logout} name={userNames.first_name} />
        <Container className="chartContainer accountsContainer">
            <Row className="mt-4">
                <Col>Account: {account.account_name} {console.log(history)}
                    <Transactionmodal
                        account={account}
                    />
                </Col>
                <Col>Currency:  {
                    <select>
                        <option value={account.currency}>{account.currency}</option>
                        <option value={account.currency === 'USD' ? 'EUR' : 'USD'}>{account.currency === 'USD' ? 'EUR' : 'USD'}</option>
                    </select>
                }
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>Description: {account.description}</Col>
                <Col>Total Balance:{' '}{account.currency} {account.balance}
                </Col>
            </Row>
            <Row className="mt-4">
                <Form className="d-flex justify-content" onSubmit={handleSubmit}>
                    <Col>
                        <Form.Group className="w-50">
                            <Form.Label>Filter by:</Form.Label>
                            <Form.Control
                                name="filter"
                                type="text"
                                size="sm"
                                placeholder="Category/Comment"
                                value={filter.filter}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="d-flex align-items-end">
                        <Form.Group className="w-25 d-flex">
                            <Form.Label>Month:</Form.Label>
                            <Form.Control 
                            size="sm" 
                            name="month" 
                            type="number" 
                            min="1" max="12" step="1" 
                            value={filter.month} onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="w-25 d-flex">
                            <Form.Label>Year:</Form.Label>  
                            <Form.Control                                 
                                size="sm" 
                                name="year" 
                                type="number" 
                                min="1900" max="2099" step="1" 
                                value={filter.year} onChange={handleChange}
                            />                        
                        </Form.Group>
                        <Button size="sm" type='submit'>Search</Button>
                    </Col>
                </Form>
            </Row>
        </Container>
        <Container className='chartContainer'>
            <table className="table table-blue text-center">
                <thead>
                    <tr>
                        <th>Category/Comment</th>
                        <th>Amount: </th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history && history.filter((x) => x.category.toLowerCase().includes(filter.filter)) 
                        .map((input) => (
                        <tr key={input.value + input.add_date}>
                            <td>{input.category || ''}</td>
                            <td>{input.input_value}</td>
                            <td>{input.add_date.replace(/T|.000Z/g, ' ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    </div>
}

export default AccountId;
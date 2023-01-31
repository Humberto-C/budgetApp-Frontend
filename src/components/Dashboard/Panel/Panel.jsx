import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Accountcard from '../Accountcard/Accountcard';
import './panel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userInfo } from '../../../contexts/UserData';
//import {  } from './'


// Chart imports
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Panel = (props) => {

    const {
        accounts,
        personId,
        setPersonId,
        userNames,
        setUserNames,
        getAccounts,
        lastMovements,
        setLastMovements,
        getAccNameFromId,
        getLast10movements,
        setIsAuth,
        logout,
        getUserData
    } = useContext(userInfo);
    // const user = props.user;
    // const setUser = props.setUser;
    // const setAccounts = props.setAccounts;
    // const accounts = props.accounts;
    // const isAuth = props.isAuth;


    const [newAccountCreated, setNewAccountCreated] = useState(false);

    useEffect(() => {
        getUserData();
        getAccounts();
        setNewAccountCreated(false);
        getLast10movements();
        console.log(accounts);
        console.log(getAccNameFromId(12));
    }, [userNames.first_name, newAccountCreated]);

    // Chart Code


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='main'>
            <Header logout={logout} name={userNames.first_name} />
            <Container className='accountsContainer'>
                <Row className='accountsRow'>
                    {accounts && accounts.map(account => <Col key={account.account_id + 'acc'} xs={6} md='auto' lg='auto' className='cards'><Accountcard account={account} /></Col>)}
                    <Col xs={6} md='auto' lg='auto' className='cards'>
                        <Accountcard plus
                            person={personId}
                            setNewAccountCreated={setNewAccountCreated}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className='chartContainer'>
                {/* <div className='lastMovesContainer'> */}
                <h1 className='text-center'>Last movements</h1>
                    <table className="table table-blue text-center">
                        <thead>
                            <tr>
                                <th>Account</th>
                                <th>Category/Comment</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lastMovements && lastMovements.map((x) => {
                                return <tr>
                                    <td>{getAccNameFromId(x.account_id)}</td>
                                    <td>{x.category}</td>
                                    <td>{x.input_value}</td>
                                    <td>{x.add_date.replace(/T|.000Z/g, ' ')}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                {/* </div> */}
            </Container>
            {/* <Container>
            <div id="myPieChart" className='pieContainer'>
                    <LineChart width={250} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </Container> */}

        </div>
    );
}

export default Panel;
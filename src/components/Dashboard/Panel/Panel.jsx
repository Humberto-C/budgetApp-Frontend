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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Panel = (props) => {

    const { accounts, setAccounts, personId, setPersonId, userNames, setUserNames } = useContext(userInfo);
    // const user = props.user;
    // const setUser = props.setUser;
    // const setAccounts = props.setAccounts;
    // const accounts = props.accounts;
    const isAuth = props.isAuth;


    const [newAccountCreated, setNewAccountCreated] = useState(false);

    useEffect(() => {

        getUserData();
        getAccounts();
        setNewAccountCreated(false);
        console.log(accounts);
    }, [userNames.first_name, newAccountCreated]);

    // Chart Code



    const getUserData = async () => {
        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dashboard`, {
                method: 'GET',
                headers: { token: localStorage.token }
            });

            let parseRes = await response.json();

            if (parseRes === 'jwt expired') {
                localStorage.removeItem('token');
                isAuth(false)
            }
            //setUser(parseRes[0]); deleted by context
            const { person_id, first_name, last_name } = parseRes[0]
            setUserNames({first_name, last_name});
            setPersonId(person_id);
            console.log(person_id, 'este es person_id', personId);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    const getAccounts = async () => {
        try {

            const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dashboard/accounts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    person: personId,
                }),
            })

            let parseRes = await data.json();
            setAccounts(parseRes);


        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        isAuth(false);
    };

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
                    {console.log(accounts, 'aqui vamos')}
                    {accounts && accounts.map(account => <Col key={account.account} xs={6} md='auto' lg='auto' className='cards'><Accountcard account={account} /></Col>)}
                    <Col xs={6} md='auto' lg='auto' className='cards'>
                        <Accountcard plus
                            person={personId}
                            setNewAccountCreated={setNewAccountCreated}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className='chartContainer'>
                <div className='lastMovesContainer'>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userNames.first_name}</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="myPieChart" className='pieContainer'>
                    <LineChart width={250} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </Container>

        </div>
    );
}

export default Panel;
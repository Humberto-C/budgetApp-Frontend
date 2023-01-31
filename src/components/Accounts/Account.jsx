import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import Header from "../Dashboard/Header/Header";
import { userInfo } from "../../contexts/UserData";

const Account = (props) => {

    const { accounts, logout, userNames} = useContext(userInfo);
    console.log(accounts);

    return (
        <div className="main pt-5 text-center">
            <Header logout={logout}/>
            <Container className="w-50">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            {/* <th scope="col">Modify</th> */}
                            <th scope="col">Account Number</th>
                            <th scope="col">Account Name</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => (
                            <tr key={account.account_id + 'acclist'}>
                                {/* <th scope="row"><Button className='btn btn-link' variant='none'>Edit</Button></th> */}
                                <td>{account.account_number || account.account}</td>
                                <td><Link to={`/accounts/${account.account_id}`}>{account.account_name}</Link></td>
                                <td>{account.balance}</td>
                                <td>{account.currency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default Account;
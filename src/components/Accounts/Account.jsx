import React from "react";
import { Button, Container } from "react-bootstrap";
import Header from "../Dashboard/Header/Header";

const Account = (props) => {

    const accounts = props.accounts;
    console.log(accounts);

    return (
        <div className="main pt-5 text-center">
            <Header />
            <Container className="w-50">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Modify</th>
                            <th scope="col">Account Number</th>
                            <th scope="col">Account Name</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => (
                            <tr key={account.account}>
                                <th scope="row"><Button className='btn btn-link' variant='none'>Edit</Button></th>
                                <td>{account.account_number || account.account}</td>
                                <td>{account.account_name}</td>
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
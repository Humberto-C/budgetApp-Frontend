import React from 'react';
import Card from 'react-bootstrap/Card';
import { DotsHorizontalIcon/* CurrencyDollarIcon PlusIcon*/ } from '@heroicons/react/solid';
import Transactionmodal from '../TransactionModal/Transactionmodal';
import Newaccountmodal from '../Newaccountmodal/Newaccountmodal';
import './accountcard.css'
import { useContext } from 'react';
import { userInfo } from '../../../contexts/UserData';


const Accountcard = (props) => {

    const { accounts, setAccounts } = useContext(userInfo);
    const { plus, account, person, setNewAccountCreated } = props;
    const [currency, setCurrency] = React.useState('');


    React.useEffect(() => {
        getAccountBalance();
    }, [])

    const getAccountBalance = async () => {
        try {
            let balance = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/dashboard/account_balance`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        person_id: account.person_id,
                        account_id: account.account_id,
                    }),
                }
            );

            const { sum, currency } = await balance.json();
            if (sum == null) {
                setAccounts((prevState) => {
                    let acc = prevState.map((x) => {
                        if(x.account_id === account.account_id){
                            return {...x, balance: 0};
                        }
                        return x;
                    });
                    console.log(acc);
                    return acc;
                });
                
            } else {
                setAccounts((prevState) => {
                    let acc = prevState.map((x) => {
                        if(x.account_id === account.account_id){
                            return {...x, balance: sum};
                        }
                        return x;
                    });
                    console.log(acc);
                    return acc;
                });
                setAccounts(prevState => prevState);
            }

            setCurrency(currency);
            

        } catch (error) {
            console.error(error.message);
        }
    }

    if (plus) {
        return (
            <Newaccountmodal
                person={person}
                setNewAccountCreated={setNewAccountCreated}
            />
        );
    }

    return (
        <Card className='cardAccount'>
            <Card.Header className='headerAccount'>
                <span>{account.account_name}</span>
                <Transactionmodal
                    account={account}
                >
                    <DotsHorizontalIcon className='dotsIcon' />
                </Transactionmodal>
            </Card.Header>
            <Card.Body className='cardBodyAccount'>
                <Card.Title className='text-center'> {currency} {account.balance}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Accountcard;
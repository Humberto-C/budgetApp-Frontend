import { createContext, useState } from 'react';

export const userInfo = createContext();

export const DataContextProvider = (props) => {
    const [email, setEmail] = useState('');
    const [personId, setPersonId] = useState(0);
    const [userNames, setUserNames] = useState({
        first_name: '',
        last_name: '',
    });
    const [ accounts, setAccounts ] = useState([]);
    const [lastMovements, setLastMovements] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [history, setHistory] = useState([]);

    const getUserData = async () => {
        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dashboard`, {
                method: 'GET',
                headers: { token: localStorage.token }
            });

            let parseRes = await response.json();

            if (parseRes === 'jwt expired') {
                localStorage.removeItem('token');
                setIsAuth(false)
            }
            
            const { person_id, first_name, last_name } = parseRes[0]
            setUserNames({ first_name, last_name });
            setPersonId(person_id);

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

    const getLast10movements = async () => {
        try {

            const movements = await fetch(`${process.env.REACT_APP_BACKEND_URL}/input/dash_lastmovements`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const parseMovements = await movements.json();

            setLastMovements(parseMovements);


        } catch (error) {
            console.error(error.message);
        }
    };

    const getAccNameFromId = (id) => {
        return accounts.reduce((acc, el) => {
            if(el.account_id === id){
            acc = el.account_name;
            }
            return acc;
        }, 'El id no es válido')
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuth(false);
    };
    
    const getHistory = async (acc, filter) => {
        try {

            let history = await fetch(`${process.env.REACT_APP_BACKEND_URL}/account-history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    account_id: acc.account_id,
                    person_id: personId,
                    month: filter.month,
                    year: filter.year,
                }),
            });

            let parsedHistory = await history.json();

            setHistory(parsedHistory);
            console.log(parsedHistory, ' getHistory function');
            console.log(history, 'console de history')

        } catch (error) {

            console.error(error.message);

        }
    };

    return (
        <userInfo.Provider value={
            {
                email,
                setEmail,
                personId,
                setPersonId,
                userNames,
                setUserNames,
                accounts,
                setAccounts,
                getAccounts,
                getLast10movements,
                lastMovements,
                setLastMovements,
                getAccNameFromId,
                isAuth, 
                setIsAuth,
                logout,
                getUserData,
                getHistory,
                history,
            }
        }>
            {props.children}
        </userInfo.Provider>
    );
};

// export useUserInfo = () => {
//     const
// }
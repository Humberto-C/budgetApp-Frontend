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
                logout
            }
        }>
            {props.children}
        </userInfo.Provider>
    );
};

// export useUserInfo = () => {
//     const
// }
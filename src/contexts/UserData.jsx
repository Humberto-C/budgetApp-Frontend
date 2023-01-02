import { createContext, useState } from 'react';

export const userInfo = createContext();

export const DataContextProvider = (props) => {
    const [email, setEmail] = useState('');
    const [personId, setPersonId] = useState(0);
    const [userNames, setUserNames] = useState({
        first_name: '',
        last_name: '',
    });
    const [ accounts, setAccounts ] = useState();

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
                setAccounts
            }
        }>
            {props.children}
        </userInfo.Provider>
    );
};

// export useUserInfo = () => {
//     const
// }
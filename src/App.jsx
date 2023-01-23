import { Route, Routes, Navigate } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { userInfo } from './contexts/UserData';

/*Components*/
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import Panel from './components/Dashboard/Panel/Panel';
import Account from './components/Accounts/Account';

function App() {

  const { accounts, setAccounts, isAuth, setIsAuth } = useContext(userInfo);
  // const [isAuth, setIsAuth] = useState(false);
  

  useEffect(() => {
    if (localStorage.token)
      setIsAuth(true);
  }, []);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Routes>
        <Route path='/' index element={isAuth ? <Navigate to="/dashboard" /> : <Login isAuth={setIsAuth} />} />
        <Route path='/signup' element={isAuth ? <Navigate to="/dashboard" /> : <Signup isAuth={setIsAuth} />} />
        <Route path='/dashboard'
          element={isAuth ?
            <Panel
              isAuth={setIsAuth}
              // user={user}    Now we use context
              // setUser={setUser}   Now we use context
            />
            : <Navigate to='/' />} />
        <Route path='/accounts'
          element={isAuth
            ? <Account isAuth={setIsAuth}
              setAccounts={setAccounts}
              accounts={accounts}
            />
            : <Navigate to='/' />}
        />
        <Route path='*' element={<h1>There is nothing here yet...</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

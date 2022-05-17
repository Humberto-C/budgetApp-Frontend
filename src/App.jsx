import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/*Components*/
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
//import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='dashboard' element={ <Header user='Jesus'/> }/>
      <Route path='*' element={ <h1>There is nothing here yet...</h1>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

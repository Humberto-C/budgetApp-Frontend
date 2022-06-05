import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/*Components*/
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import Header from './components/Dashboard/Header/Header';
import Panel from './components/Dashboard/Panel/Panel';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='dashboard' element={<Panel />} />
          <Route path='header' element={<Header />} />
          <Route path='*' element={<h1>There is nothing here yet...</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

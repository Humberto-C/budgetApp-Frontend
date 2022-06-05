import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BriefcaseIcon, HomeIcon, LogoutIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import './header.css';


const Header = ({ user }) => {

  return (
    <>
      <Navbar variant='light' bg='light' expand='false' fixed='top' className='header'>
        <Container fluid>
          <Navbar.Toggle className='header_toggle' />
          <Link to="/dashboard" className="libreFont logoSize">Budget</Link>
        </Container>
        <Navbar.Offcanvas backdrop={false}>
          <Offcanvas.Header className='justify-content-center'>
            <Offcanvas.Title>
              <span>Welcome {user}</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <div>
                <Nav.Item>
                  <Nav.Link><HomeIcon className='navIcons' />Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><BriefcaseIcon className='navIcons' />Accounts</Nav.Link>
                </Nav.Item>
              </div>
              <Nav.Item className='offCanvas_logout'>
                <Nav.Link><LogoutIcon className='navIcons' />Sign Out</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

    </>
  );
}

export default Header;
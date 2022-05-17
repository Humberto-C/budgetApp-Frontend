import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const Login = () => {

    const [focused, setFocused] = useState({ email: false });
    const [user, setUser] = useState(
        {
            email: '',
            text: '',
            validEmail: false,
            validPassword: false
        }
    );

    const handleFocus = (event) => {
        let type = event.target.type;
        setFocused(prevState => ({ ...prevState, [type]: true }));
    }

    const handleLogIn = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        let { type, value } = event.target;
        setUser(prevState => (
            { ...prevState, [type]: value }
        ));
    }


    return (
        <Container className="loginContainer">
            <Row className="logInCenter">
                <Col>
                    <Card style={{ width: '18em' }}>

                        <Card.Body style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                            <Card.Title className="libreFont text-center">Budget</Card.Title><br />
                            <Form onSubmit={handleLogIn}>
                                <Form.Group>
                                    <Form.Label>Email address: </Form.Label>
                                    <Form.Control required
                                        type="email"
                                        pattern="^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
                                        placeholder="Email"
                                        value={user.email} onChange={handleChange} onBlur={handleFocus}
                                        focused={focused.email.toString()}
                                    />
                                    <span className="error-msg">* Email is not valid</span>
                                </Form.Group><br />
                                <Form.Group>
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control required
                                        type="password"
                                        placeholder="Password"
                                        value={user.password} onChange={handleChange}
                                    />
                                    <span className="error-msg">* Wrong password</span>
                                </Form.Group><br />
                                <Stack  gap={3}>
                                    <Button type="submit" variant="primary" >Log In</Button>
                                    <div className="footerLogIn">
                                        <span>Does not have an account?  </span>
                                        <Link to="signup">Sign Up</Link>
                                    </div>
                                </Stack>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



const Login = (props) => {

    /* Variables */
    const isAuth = props.isAuth;
    //const { getUserData, getAccounts } = useContext;
    const [user, setUser] = useState(
        {
            email: '',
            password: '',
            focused: false,
            validEmail: true,
            validPassword: true,
        }
    );


    /* Handlers */
    const handleBlur = () => {
        setUser(prevState => ({ ...prevState, 'focused': true }));
    }

    const handleLogIn = async (event) => {
        event.preventDefault();
        try {
            const req = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: user.email,
                        password: user.password,
                    }
                )
            });

            const res = await req.json();
            

 
            if (res.token) {
                localStorage.setItem('token', res.token);
                isAuth(true);
                
            } else {

                if (res.toLowerCase().includes('password')) {
                    setUser(prevState => (
                        { ...prevState, 'validPassword': false }
                    ));
                }
                if (res.toLowerCase().includes('email')) {
                    setUser(prevState => (
                        { ...prevState, 'validEmail': false }
                    ));
                }
            }




        } catch (error) {
            console.log(error.message);
        }

    }

    const handleChange = (event) => {
        if (user.validPassword === false) {
            setUser(prevState => (
                { ...prevState, 'validPassword': true }
            ));
        }
        if (user.validEmail === false) {
            setUser(prevState => (
                { ...prevState, 'validEmail': true }
            ));
        }
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
                                        //{user.validEmail ? valid : invalid}
                                        type="email"
                                        pattern="^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
                                        value={user.email} onChange={handleChange} onBlur={handleBlur}
                                        focused={user.focused.toString()}
                                        validemail={user.validEmail.toString()}
                                    />
                                    <span className="error-msg-email">* There is no account with this email!</span>
                                </Form.Group><br />
                                <Form.Group>
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control required
                                        type="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        validpassword={user.validPassword.toString()}
                                    />
                                    <span className="error-msg-password">* Wrong password</span>
                                </Form.Group><br />
                                <Stack gap={3}>
                                    <Button type="submit" variant="primary" >Log In</Button>
                                    <div className="footerLogIn">
                                        <span>Does not have an account?  </span>
                                        <Link to="/signup">Sign Up</Link>
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
import { Card, Container, Form, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ isAuth }) => {

    const [newUser, setNewUser] = useState({
        isNew: true,
        validated: false,
        firstName: '',
        lastName: '',
        birthDate: 0,
        email: '',
        password: '',
        confirmPassword: '',
    });

    /* Handlers */


    const handleChange = (event) => {
        if (newUser.validated) {
            setNewUser(prevState => ({ ...prevState, 'validated': false }));
        }

        const { name, value } = event.target;

        setNewUser(prevState => (
            { ...prevState, [name]: value }
        ));


    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setNewUser(prevState => ({ ...prevState, 'validated': true }));


        try {

            const req = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: newUser.email,
                        password: newUser.password,
                        first_name: newUser.firstName,
                        last_name: newUser.lastName,
                        birth_date: newUser.birthDate,
                    }
                )
            });


            const res = await req.json()
            console.log(res);


            if (res.token) {
                localStorage.setItem('token', res.token);
                isAuth(true);
            } else {
                if (res.toLowerCase().includes('already exist')) {
                    setNewUser(prevState => (
                        { ...prevState, 'isNew': false }
                    ))
                }
            }


        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Container className="signUpContainer">
            <Row className="signUpCenter">
                <Col>
                    <Card className="signUpCard">
                        <Card.Body>
                            <Card.Title className="text-center">Sign Up with Email</Card.Title><br />
                            <Form noValidate validated={newUser.validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col> {/* First name imput */}
                                        <Form.Label>First Name: </Form.Label>
                                        <Form.Control required name='firstName' type="text" onChange={handleChange} />
                                    </Col>{/* End First name imput */}
                                    <Col>{/* Last name imput */}
                                        <Form.Label>Last Name:  </Form.Label>
                                        <Form.Control required name='lastName' type="text" onChange={handleChange} />
                                    </Col>{/* End Last name imput */}
                                </Row>
                                <Row className="mb-3">
                                    <Col>{/* Birth imput */}
                                        <Form.Label>Birthdate: </Form.Label> {/* Birthdate input */}
                                        <Form.Control required name='birthDate' type="date" onChange={handleChange} />
                                    </Col>{/* End Birthdate input */}
                                    <Col>  {/* Email input */}
                                        <Form.Label>Email: </Form.Label>  {/* Email input */}
                                        <Form.Control required name='email' type="email" placeholder="example@email.com" pattern={newUser.isNew ? '^([\\da-zA-Z_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$' : '--invalid Email--'} onChange={handleChange} />
                                        <Form.Control.Feedback type="invalid">* No valid email / *This email has already been used</Form.Control.Feedback>
                                    </Col> {/* End Email input */}
                                </Row>
                                <Row className="mb-3">
                                    <Col>  {/* Password input */}
                                        <Form.Label>Password: </Form.Label>
                                        <Form.Control required name='password' type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$" onChange={handleChange} />
                                        <Form.Control.Feedback type="invalid">* Password characters min: 8, máx: 12{<br />}and should have at least 1 special character, 1 capital letter and 1 number</Form.Control.Feedback>
                                    </Col>
                                    <Col> {/* Confirm Password input */}
                                        <Form.Label>Confirm password: </Form.Label>
                                        <Form.Control required name='confirmPassword' type="password" onChange={handleChange} pattern={newUser.password} />
                                        <Form.Control.Feedback type="invalid">* No match</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                {!newUser.isNew && <Row className="text-center mt-5"><p>User already exist! {<br />} Please use a valid email</p></Row>}
                                <Stack className="mt-4 mb-3">
                                    <Button className="signUpButton" type="submit" variant="primary" >Sign Up</Button>
                                </Stack>
                                <div className="footerLogIn text-center">
                                    <span>Already have an account!</span>
                                    <Link className="m-2" to="/">Log in</Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
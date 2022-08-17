import { Card, Container, Form, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Signup = () => {

    const [newUser, setNewUser] = useState({validated: false});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewUser((prevState) => ({...prevState, validated: true}));
        console.log(newUser.validated);
    }

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
                                        <Form.Control required type="text" />                                        
                                    </Col>{/* End First name imput */}
                                    <Col>{/* Last name imput */}
                                        <Form.Label>Last Name:  </Form.Label>
                                        <Form.Control required type="text" />
                                    </Col>{/* End Last name imput */}
                                </Row>
                                <Row className="mb-3">
                                    <Col>{/* Birth imput */}
                                        <Form.Label>Birthdate: </Form.Label> {/* Birthdate input */}
                                        <Form.Control required type="date" />                                    
                                    </Col>{/* End Birthdate input */}
                                    <Col>  {/* Email input */}
                                        <Form.Label>Email: </Form.Label>  {/* Email input */}
                                        <Form.Control required type="email" placeholder="example@email.com" pattern="^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"/>
                                        <Form.Control.Feedback type="invalid">* No valid email / *This email has already been used</Form.Control.Feedback>
                                    </Col> {/* End Email input */}
                                </Row>
                                <Row className="mb-3">
                                    <Col>  {/* Password input */}
                                        <Form.Label>Password: </Form.Label>
                                        <Form.Control required type="password" />
                                        <Form.Control.Feedback type="invalid">* Should have at least 1 special character, 1 capital letter and 1 number</Form.Control.Feedback>
                                    </Col>
                                    <Col> {/* Confirm Password input */}
                                        <Form.Label>Confirm password: </Form.Label>
                                        <Form.Control required type="password" />
                                        <Form.Control.Feedback type="invalid">* No match</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Stack className="mt-4"> 
                                    <Button className="signUpButton" type="submit" variant="primary" >Sign Up</Button>
                                </Stack>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
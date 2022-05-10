import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const Login = () => {

    let regex = new RegExp('^([\\da-z_.-]+)@([\\da-z.-]+).([a-z.]{2,6})$');

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
        if (regex.test(user.email)) { setUser(prevState => ({ ...prevState, validEmail: true })) };
    }

    const handleChange = (event) => {
        let { type, value } = event.target;
        setUser(prevState => (
            { ...prevState, [type]: value }
        ));
    }


    return (
        <Card style={{ width: '18em' }}>

            <Card.Body>
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
                    <Stack gap={2}>
                        <Button type="submit" variant="primary" >Log In</Button>

                        <Button variant="outline-primary" >Sign Up</Button>
                    </Stack>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import './Addcard.css';


const Addcard = () => {



    return (
        <Card>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group className='amountGroup'>
                            <Form.Label className="currencyLabel">$</Form.Label>
                            <Form.Control
                                className='amountInput'
                                size='lg'
                                type="text"
                                placeholder="00.00"
                            >
                            </Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Addcard;
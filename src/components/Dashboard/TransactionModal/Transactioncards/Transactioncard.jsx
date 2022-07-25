import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import './Transactioncard.css';
import { ArrowRightIcon } from '@heroicons/react/solid'


const Transactioncard = (props) => {

    const add = props.add;
    const expense = props.expense;
    const transfer = props.transfer;

    if(add){
        return (
            <Card className="addCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>+ $</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="100.00"
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="firstCategoryGroup">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Restaurant</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Transport</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Medicine</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    if(expense){
        return (
            <Card className="expenseCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>- $</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="100.00"
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="firstCategoryGroup">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Restaurant</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Transport</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Medicine</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    if(transfer){
        return (
            <Card className="transferCard">
                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group className='amountGroup'>
                                    <Form.Label>$</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="100.00"
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='tranfer2row mb-3'>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Restaurant</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Transport</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Medicine</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <ArrowRightIcon className='transferIcon'/>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Restaurant</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Transport</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Medicine</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='commentInput'>
                                <Form.Control
                                    type='text'
                                    placeholder='Comment'
                                >                                
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }

    
}

export default Transactioncard;
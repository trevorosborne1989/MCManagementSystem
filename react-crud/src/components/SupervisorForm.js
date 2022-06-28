import * as React from "react";
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Card';
import {Card, Col, FormControl, FormGroup, InputGroup} from "react-bootstrap";
import SupervisorService from "../services/SupervisorService";


export default function SupervisorForm() {

    const [validated, setValidated] = useState(false);
    const [value, setValue]  = useState('');
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        supervisor: ""
    })

    useEffect(() => {
        let mounted = true;
        SupervisorService.getSupervisors()
            .then(items => {
                if(mounted) {
                    setOptions(items.data)
                }
            })
        return () => mounted = false;
    }, [])

    const handleChange = (event) => {
        setOption(options[+event.target.value]);
        setFormData({...formData, supervisor: event.target.value});
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log(formData);
        } else {
                SupervisorService.saveNotification(formData).then(r => {})
            console.log(formData);
        }
            setValidated(true);
    }

    return (
        <Card style= {{ width: '25rem' }} className={"border border-dark bg-dark"}>
            <Card.Body>
                <Card.Title className={"text-white"}>Notification Form</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        onChange={(e) =>
                                            setFormData({...formData, firstName: e.target.value})}
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        className={"bg-dark text-white"}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please type a first name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col>
                            <FormGroup controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        onChange={(e) =>
                                            setFormData({...formData, lastName: e.target.value})}
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        className={"bg-dark text-white"}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please type a last name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formEmail">
                            <Form.Text className="text-muted">
                                How would you like to be notified?
                            </Form.Text>
                            <Form.Check type="checkbox" label="Email" />
                            <Form.Control
                                onChange={(e) =>
                                    setFormData({...formData, email: e.target.value})}
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                className={"bg-dark text-white"}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Check type="checkbox" label="Phone Number" />
                            <Form.Control
                                onChange={(e) =>
                                    setFormData({...formData, phoneNumber: e.target.value})}
                                placeholder="Enter phone number"
                                value={formData.phoneNumber}
                                className={"bg-dark text-white"}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formSupervisor">
                            <Form.Label>Supervisor</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Select
                                    required
                                    onChange={handleChange}
                                    className={"bg-dark text-white"}>
                                    {options.map(item =>
                                        <option key={item.id}>
                                            {item.firstName + " " + item.lastName}
                                        </option>
                                    )}
                                </Form.Select>
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                Please select a supervisor.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        SUBMIT
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
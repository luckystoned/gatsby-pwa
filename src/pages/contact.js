import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import {Form, Button} from "react-bootstrap"
export default () => (
    <PrimaryLayout colum="col-10">
        <h1>Contact Us</h1>
        <div className="pt-5">
            <Form>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Subjetc">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email" placeholder="Subject..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="contactForm.Submit">
                    <Button>Submit</Button>
                </Form.Group>
            </Form>
        </div>
    </PrimaryLayout>
)

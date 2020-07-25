import React from 'react';
import {Form,Col,Button} from 'react-bootstrap';

const ContactMe = () => {
    return ( 
        <Form style={{padding:'30px',direction:'rtl'}}>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="שם מלא" />
                </Col>
                <Col>
                    <Form.Control placeholder="אימייל" />
                </Col>
                <Col>
                    <Form.Control placeholder="מספר טלפון" />
                </Col>
                <Col style={{textAlign:'center'}}>
                   <Button variant="outline-info">צור קשר</Button>
                </Col>
            </Form.Row>
        </Form>
     );
}
 
export default ContactMe;
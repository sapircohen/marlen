import React from 'react';
import {Form,Col,Button} from 'react-bootstrap';

const ContactMe = () => {
    return ( 
        <Form style={{padding:'30px',direction:'rtl'}}>
            <Form.Row style={{placeContent:'center'}}>
                <h3>מעוניין לקדם את העסק ?</h3>
            </Form.Row>
            <Form.Row style={{marginTop:'3%'}}>
                <Col></Col>
                <Col xs="2">
                    <Form.Control placeholder="איך קוראים לך ?" />
                </Col>
                <Col xs="2">
                    <Form.Control placeholder="מה המייל שלך ?" />
                </Col>
                <Col xs="2">
                    <Form.Control placeholder="לאיזה טלפון להתקשר ?" />
                </Col>
                <Col xs="2" style={{textAlign:'left'}}>
                   <Button variant="info">דבר איתי</Button>
                </Col>
                <Col></Col>
            </Form.Row>
        </Form>
     );
}
 
export default ContactMe;
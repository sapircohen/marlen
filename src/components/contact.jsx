/*tslint:disabled*/
import React from 'react';
import { useState,useEffect } from 'react';
import {Form,Col,Button} from 'react-bootstrap';
import AlertPop from './Alert';
import '../styles/contact.css';

const ContactMe = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone]= useState('');
    const [alertMessage,setAlertMessage]= useState('');
    const [showAlert,setShowAlert]= useState(false);

    useEffect(()=>{
        setShowAlert(true);
    },[alertMessage])

    const validateInputs=()=>{
        const regexMail = /^\S+@\S+\.\S+$/;
        const isValidEmail = regexMail.test(email);
        if (!isValidEmail) {
            setAlertMessage('אנא הכנס/י אימייל נכון');
            return;
        }
        const regexPhone = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
        const isValidPhone = regexMail.test(phone);
        if (!isValidPhone) {
            setAlertMessage('אנא הכנס/י מספר טלפון נכון');
            return;
        }
    }

    return ( 
        <>
        <Form className="section">
            <Form.Row>
                <Col></Col>
                <Col xs="12" sm="4">
                    <div className="header">מעוניין לקדם את העסק ?</div>
                </Col>
                <Col></Col>
            </Form.Row>
            <Form.Row>
                <Col></Col>
                <Col className="contact_info" xs="12" sm="3">
                    <Form.Control onChange={(e)=>setName(e.target.value)} placeholder="איך קוראים לך ?" />
                </Col>
                <Col className="contact_info" xs="12" sm="3">
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} placeholder="מה המייל שלך ?" />
                </Col>
                <Col className="contact_info" xs="12" sm="3">
                    <Form.Control  onChange={(e)=>setPhone(e.target.value)} placeholder="לאיזה טלפון להתקשר ?" />
                </Col>
                <Col></Col>
            </Form.Row>
            <Form.Row className="contact_container">
                <Col></Col>
                <Col xs="12" sm="9">
                   <Button onClick={validateInputs} className="contact_button" variant="info">דברו איתי</Button>
                </Col>
                <Col></Col>
            </Form.Row>
        </Form>
        <AlertPop variant="error" message={alertMessage}/>
        </>
     );
}
 
export default ContactMe;
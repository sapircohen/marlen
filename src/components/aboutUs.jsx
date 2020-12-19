import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {about} from '../assests/images';
import '../styles/about.css'
const AboutUs = (props) => {
    return ( 
        <div className="section">
            <Row>
                <Col></Col>
                <Col xs="12" sm="4">
                    <div className="header">אודותינו</div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="img_container" xs="12" sm="4">
                    <img src={about}/>
                </Col>
                <Col className="p_containter">
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                    אנחנו אנשים מאוד טובים שרוצים להרוויח גסף
                </Col>
            </Row>
        </div>
     );
}
 
export default AboutUs;
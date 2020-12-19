import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {googlePromo,seo,socialNets,content,landingPage,converstion} from '../assests/images.js';
import '../styles/steps.css';

const Steps = (props) => {
    return ( 
        <div className="section">
            <Row>
                <Col></Col>
                <Col xs="12" sm="4">
                    <div className="header">פתרונות השיווק שלנו</div>
                </Col>
                <Col></Col>
            </Row>
            <Row className="logos_container">
                {/* <Col></Col> */}
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={socialNets} />
                    <span>פרסום בגוגל</span>
                </Col>
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={seo} />
                    <span>קידום אורגני</span>
                </Col>
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={googlePromo} />
                    <span>קידום ממומן</span>
                </Col>
                {/* <Col></Col> */}
            </Row>
            <Row className="logos_container">
                {/* <Col></Col> */}
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={content} />
                    <span>קידום ברשתות חברתיות</span>
                </Col>
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={landingPage} />
                    <span>הקמת דפים עסקיים</span>
                </Col>
                <Col xs="12" sm="4" className="img_container">
                    <img className="imgs" src={converstion} />
                    <span>שיפור אחוז המרות</span>
                </Col>
                {/* <Col></Col> */}
            </Row>
        </div>
     );
}
 
export default Steps;
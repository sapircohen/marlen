import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {googlePromo,seo,socialNets} from '../assests/images.js';
import '../styles/steps.css';

const Steps = (props) => {
    return ( 
        <>
            <Row>
                <Col></Col>
                <Col style={{textAlign:'center'}}>
                    <h2>השיטות שלי</h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <img className="imgs" src={socialNets} />
                </Col>
                <Col>
                    <img className="imgs" src={seo} />
                </Col>
                <Col>
                    <img className="imgs" src={googlePromo} />
                </Col>
                <Col></Col>
            </Row>
        </>
     );
}
 
export default Steps;
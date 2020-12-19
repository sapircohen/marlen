import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertPop = (props) => {
    return ( 
    <Alert variant={props.variant}>
        {props.message}
     </Alert> 
    );
}
 
export default AlertPop;
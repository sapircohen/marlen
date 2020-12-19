import React from 'react';
import {cta} from '../assests/images';
import ReactTooltip from 'react-tooltip';

import '../styles/contactCTA.css';

const ContactCTA = (props) => {
    const openWhatsapp = () =>{
        window.open("https://api.whatsapp.com/send?phone=+972524842888")
    }
    return (  
        <div className="CTA_container">
            <img onClick={openWhatsapp} data-tip="צריכים ייעוץ?" src={cta}/>
            <ReactTooltip />
        </div>
    );
}
 
export default ContactCTA;
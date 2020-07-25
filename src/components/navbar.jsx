import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {logo} from '../assests/images';

const Nav = () => {
    return ( 
        <Navbar style={{backgroundColor:'transparent',direction:'rtl'}}>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Alice marketing logo"
            />
            </Navbar.Brand>
        </Navbar>
     );
}
 
export default Nav;

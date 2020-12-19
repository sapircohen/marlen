import React,{useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {content} from '../assests/images';
import '../styles/navbar.css';

const Nav = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return ( 
        <nav className="nav_container fixed-top navbar navbar-expand-lg navbar-light bg-light rounded">
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <a className="nav_item nav-link" href="#home">אליס שיווק דיגטלי</a>
                <a className="nav_item nav-link" href="#methods">פתרונות שיווק</a>
                <a className="nav_item nav-link" href="#about">אודותינו</a>
                <a className="nav_item nav-link" href="#contact">צור קשר</a>
            </div>
      </nav>
     );
}
 
export default Nav;

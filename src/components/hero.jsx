import React from 'react';
import LazyHero from 'react-lazy-hero';
import {aliceLogo} from '../assests/images';

import '../styles/hero.css';

const MyLandingPage = ()=> {
    return (
        <div className="alice_container">
            <LazyHero imageSrc={aliceLogo}></LazyHero>
        </div>
    );
}
export default MyLandingPage;
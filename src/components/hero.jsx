import React from 'react';
import LazyHero from 'react-lazy-hero';
import {aliceLogo} from '../assests/images'

const MyLandingPage = ()=> {
    return (
        <div style={{borderBottom:'1px solid black'}}>
            <LazyHero imageSrc={aliceLogo}></LazyHero>
        </div>
    );
}
export default MyLandingPage;
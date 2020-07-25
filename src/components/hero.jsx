import React from 'react';
import LazyHero from 'react-lazy-hero';

const MyLandingPage = ()=> {
    return (
        <div style={{borderBottom:'1px solid black'}}>
            <LazyHero style={{backgroundColor:'white'}}>
                <h1>Generic Startup Hype Headline</h1>
            </LazyHero>
        </div>
    );
}
export default MyLandingPage;
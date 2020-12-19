import React from 'react';
import Nav from './components/navbar';
import MyLandingPage from './components/hero';
import ContactMe from './components/contact';
import Steps from './components/steps';
import AboutUs from './components/aboutUs';
import ContactCTA from './components/contactCTA';

function App() {
  return (
    <div className="main_container">
      <Nav/>
      <MyLandingPage/>
      <ContactMe/>
      <Steps/>
      <AboutUs/>
      {/* <ContactMe/> */}
      <ContactCTA/>
    </div>
  );
}

export default App;

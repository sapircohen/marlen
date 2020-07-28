import React from 'react';
import Nav from './components/navbar';
import MyLandingPage from './components/hero';
import ContactMe from './components/contact';
import Steps from './components/steps';

function App() {
  return (
    <>
      <Nav/>
      <MyLandingPage/>
      {/* <ContactMe/> */}
      <Steps/>
    </>
  );
}

export default App;

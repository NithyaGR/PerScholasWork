import React, { Component } from 'react';
import Routes from '../../Routes';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import './App.css';

class App extends Component {
       
  render() {
   console.log("Inside the app");
  //  console.log(this.state.users);
  return (
     <div className='appContainer'>
          
          <SideNavBar />
          <Header />
          <Routes /> 
          <Footer />
      </div>                
  );
}
}

export default App;

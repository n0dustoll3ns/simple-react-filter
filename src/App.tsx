import React from 'react';
import logo from './assets/LOT-logo.svg';
import ListView from './elements/listview/ListView';
import SideBar from './elements/sidebar/SideBar';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="wrapper">
        <SideBar />
        <ListView />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Bookcase from './components/bookcaseComponent/Bookcase';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header className='Header'/>
        <Bookcase className='Bookcase'/>
        <Footer className='Footer'/>
      </div>
    );
  }

}

export default App;

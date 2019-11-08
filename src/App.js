import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import Footer from './components/footer/footer';

import './components/styles/import.styles.css';
import Header from './components/header/header';
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" render={(props)=>(<div>
        <Home/>
      </div>)}/>
      <Footer/>
    </div>
  );
  }
}

export default App;

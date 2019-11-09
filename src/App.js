import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/About';
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
      <Route exact path="/about" render={(props)=>(<div>
        <About/>
      </div>)}/>
      <Route exact path="/products" render={(props)=>(<div>
        <About/>
      </div>)}/>
      <Route exact path="/contact" render={(props)=>(<div>
        <Contact/>
      </div>)}/>
      <Footer/>
    </div>
  );
  }
  
}

export default App;

import React from 'react';
import Welcome from './welcome';
import YourType from './yourType';
import Philosophy from './Philosophy';
import {TweenMax} from 'gsap';

import {Jumbotron} from 'react-bootstrap';
import billboard from '../../img/hair-2537564_1920_cropped.jpg';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.subtitle = React.createRef();
    window.ref = this.subtitle;
  }
  componentDidMount(){
    
    this.animation = TweenMax.to(this.subtitle.current.style,5,{opacity:1,left:'50px',paused:true});
  
  }
  render(){
  return (
    <main>
  <Jumbotron fluid onMouseOver={(e)=>this.animation.play()}>
        <p ref={this.subtitle} className="overlay cursive" style={{opacity:0.1,position:'relative',left:'0px',bottom:'0px'}}>Looking your Best makes you feel Best!</p>
    </Jumbotron>
  <div id="home" className="container">
    
    <div className="row">
      <div className="col">
      <Welcome/>
      <YourType/>
    </div>
    <div className="col">
      <Philosophy/>
    </div>
      </div>
    </div>
  </main>);
}
}
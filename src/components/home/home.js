import React from 'react';
import Welcome from './welcome';
import YourType from './yourType';
import Philosophy from './Philosophy';

import {Jumbotron} from 'react-bootstrap';
import billboard from '../../img/smiling-african-american-young-woman-600w-1498300058.webp';

export default function (){
  return (
    <main>
  <Jumbotron fluid>
        <p className="overlay cursive">Looking your Best makes you feel Best!</p>
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
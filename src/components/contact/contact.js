import React from 'react';
import Map from './map';
import Info from './info';
import Form from './form';

export default class Contact extends React.Component{
  submit = (e) =>{
    e.preventDefault();
    let {name, comment} = e.target;
    name = name.value;
    comment = comment.value;
    console.log(name);
  }
  render(){
  return (
  <div id="contact" className="container">
    <h2 className="cursive">Contact Us</h2>
    <div className="row">
      <Info/>
      <Map/>
    </div>
    <Form className="row" handleSubmit={this.submit}/>
  </div>);
  }
}
import React from 'react';
import {NavLink, Link} from 'react-router-dom';

export default function (){
  return (
  <header>
    <div className="container">
      <div className="row">
    <h1 className="cursive col"><Link to="/">Le Blis</Link></h1>
     
    <nav className="nav col row">
      <NavLink to="/" className="button col">Home</NavLink>
      <NavLink className="button col" to="/about">About Us</NavLink>
      <NavLink to='/products' className="button col">Products</NavLink>
      <NavLink to="contact" className="button col">Contact Us </NavLink>
    </nav> 
      </div>
    </div>
  </header>);
}
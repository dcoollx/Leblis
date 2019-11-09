import React from 'react';
import {settings} from './map.settings';
import config from '../../config';

export default function(){
  require('google-maps-api')(config.Map_API_key)().then((map)=>{
    new map.Map(document.getElementById('map'),{
      styles:settings,
      center: {lat: 33.74831, lng: -84.39111},
      disableDefaultUI:true,
      zoom: 11});
  });
  return (
   <div id="map" className="col">
     <noscript> Javascript must be enabled </noscript>
   </div>
  );
  
}
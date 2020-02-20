import React from 'react';
import fbIcon from '../../img/facebook.svg';
import twIcon from '../../img/twitter-logo-on-black-background.svg';
import pIcon from '../../img/pinterest.svg';

export default function(){
  return (
  <aside className="container" id="Philosophy">
    <div className="row">
<div id="our_Philosophy" className="col">
      <h3 className="cursive">Our Philosophy</h3>
      <p>
At LeBlis we believe your skin should illuminate just like you! That's why we use natural ingredients that are gentle to even your most delicate skin areas. 
We are happy to present products that are paraben free, vegan friendly and use the most natural preservatives.
We believe in quality! Our butters are hand-whipped to perfection every time to deliver consistently creamy butters that melt on contact.
Infused with our natural blend of butters and oils they are sure to leave your skin feeling soft, supple and moisturized. Let our scented butters awaken your senses and take you away.
We stand behind our products 100% because we believe in satisfaction!</p>
</div>
    <div className="col">
      <div>
      <p>Men love LeBlis too!</p>
      <img src="https://static.wixstatic.com/media/214ec6_9623b3ae658e97dc8c6dff5d77faa5fe.jpg/v1/fill/w_239,h_302,al_c,q_80,usm_0.66_1.00_0.01/214ec6_9623b3ae658e97dc8c6dff5d77faa5fe.webp" alt="leblis is for men too"/>
    </div>
  
  <div>
    <p>Men love LeBlis too!</p>
    <img src="https://static.wixstatic.com/media/214ec6_9623b3ae658e97dc8c6dff5d77faa5fe.jpg/v1/fill/w_239,h_302,al_c,q_80,usm_0.66_1.00_0.01/214ec6_9623b3ae658e97dc8c6dff5d77faa5fe.webp" alt="leblis is for men too"/>
  </div>
  </div>
</div>
<div id="social_media" className="row container rounded">
  <div  className="row">
    <object className="col" type="image/svg+xml" data={fbIcon} width="50" height="50">facebook</object>
    <object className="col" type="image/svg+xml" data={twIcon} width="50" height="50">facebook</object>
    <object className="col" type="image/svg+xml" data={pIcon} width="50" height="50">facebook</object>
    <object className="col" type="image/svg+xml" data={pIcon} width="50" height="50">facebook</object>
  </div>
</div>


  </aside>)
}
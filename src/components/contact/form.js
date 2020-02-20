import React from 'react';

export default function(props){
  return (
    <form className="container" onSubmit={(e)=>props.handleSubmit(e)}>
      <div className="row">
        <div className="col-12">
        <label className="" htmlFor="name">Name</label><br/>
        <input className="" id="name" name="name" placeholder="name" type="text"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12" >
        <label htmlFor="comment">Comment</label><br/>
        <textarea id="comment" name="comment"/>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
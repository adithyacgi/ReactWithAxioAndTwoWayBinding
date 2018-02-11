import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent'




const  Searchbox = (props)=>{
    return(
        <div>
            <p>Enter Roll Number:</p><input type="text" onChange={props.changed}/>
        </div>
    );
}



export default Searchbox;
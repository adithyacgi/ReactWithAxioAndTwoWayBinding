import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Searchbox from './SearchAndResultComponent'
import Resultcomponent from './ResultOfSearch'

class MainComponent extends Component
{
    state={
    }

    constructor(props) {
        super(props);
        this.rollChangedHandler= this.rollChangedHandler.bind(this);
      }

    rollChangedHandler=(event)=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+event.target.value)
        .then
        (  (response)=>
            {
                console.log(response.data.title);  

                this.setState(
                    {title: response.data.title}
               );
            }
        );

       
        console.log(this.state);

    }

    

    render(){
        return(
            <div>
            <Searchbox changed={this.rollChangedHandler}/>
            <Resultcomponent title={this.state.title}  />
            </div>
        );
    }
}

export default MainComponent;
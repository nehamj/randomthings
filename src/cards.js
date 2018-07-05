import React from 'react';
import InfoCard from './Info-card';
import './cards.css';

export class Cards extends React.Component{
  
    render(){
        return(
            <div id="card1" className="flex-container">
              <div  className="card">
              <p className="centered">koo kko xo xoxo xoxo</p>
              {(this.props.visible)? <InfoCard /> : ""}
              </div>
            </div>  
        );
    }

}
import React, { Component } from 'react';
import './App.css';
import {Cards} from './cards'; 
import {DetailsCard} from './details-card';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardVisible: true,
    }
  }

  componentDidMount(){
    const e1=document.getElementById("maincard1");
    TweenMax.from(e1, 2, {opacity:0,ease: Power2.easeOut});
  }
 onClick() {
    this.setState(prevState => ({ cardVisible: !prevState.cardVisible}));
  }

  cardClick(){
    console.log("Card Clicked");
  }
  render() {
    return (
      <div className="App">
        <div id="container">
          <div id="container2">
            <div className="box one">
            <div id="maincard1" onClick={() => this.onClick()}>
            {this.state.cardVisible? <Cards/>: <DetailsCard/>}
            </div>
            </div>
            <div className="box two">
              <div onClick={() => this.onClick()}>
            {this.state.cardVisible? <Cards />: <DetailsCard/>}
            </div>
            </div>
            <div className="box three">
            <DetailsCard/>
            </div>
            <div className="box four">
            <div>Last</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

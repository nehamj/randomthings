import React, { Component } from 'react';
import './App.css';
import {Cards} from './cards'; 
import {DetailsCard} from './details-card';
import {TweenMax, Power1, TweenLite} from "gsap/TweenMax";
import { PictureCard } from './picture-card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardVisible: true,
    }
    this.click=0;
    this.e1;
    this.e2;
    this.card;
    this.pic;
  }

  componentDidMount(){
    this.e1=document.getElementById("maincard1");
    this.e2=document.getElementById("maincard2");
    this.card=document.getElementsByClassName("card");
    this.pic=document.getElementsByClassName("pic-card");
    TweenMax.fromTo(this.e1, 2,{top:"0%",x:"120%",autoAlpha: 0} ,{ autoAlpha: 1,opacity:0,ease: Power1.easeOut,left:"50%",top:"50%",xPercent:-50,yPercent:50});
    
  }
 onClick() {
    this.setState(prevState => ({ cardVisible: !prevState.cardVisible}));
    if(!this.state.cardVisible){
      this.click=1;
      TweenMax.to(this.pic,4,{opacity:0.2,scale:0})
      TweenMax.to(this.card,4,{scale:1.25 ,x:25 })
    }
    else{
      this.click=0;
      TweenMax.to(this.pic,4,{opacity:1,scale:1})
      TweenMax.to(this.card,4,{scale:1})
    }
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
            <div className="card"><Cards visible={this.click} /></div>
            <div className="pic-card"> <PictureCard /></div>
            </div>
            </div>
            <div className="box two">
              <div id="maincard2" onClick={() => this.onClick()}>
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

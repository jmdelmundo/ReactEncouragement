import React from 'react';
import logo from './logo.svg';
import './TopSide.css';
import NBar from './NBar';


class TopSide extends React.Component {
  NbarDisp(val){
    return <NBar dispvalue={val} />
  }

  render(){
    return(
        <div className="App-Nav">
          <span className="appimgcont">
            <span className="appoverlay">
              <span className="letterR">R</span>
            </span>
            <img src={logo} className="TopApp-logo" alt="logo" />
          </span>
          {this.NbarDisp("Choose Me!")}
          {this.NbarDisp("Me First!")}
          {this.NbarDisp("Don't listen to them!")}
        </div>
    );
  }
}

export default TopSide;

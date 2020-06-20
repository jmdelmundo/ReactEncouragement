import React from 'react';
import './TopSide.css';





class NBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dispvalue: this.props.dispvalue,
      dispNext: "Sorry"
    };
  }


  render(){
    return(
          <span className="appheadercont" onClick={() => 
          this.setState({
            dispvalue: this.state.dispNext,
            dispNext: this.state.dispvalue,})}>
            {this.state.dispvalue}
            </span>
    );
  }
}

export default NBar;

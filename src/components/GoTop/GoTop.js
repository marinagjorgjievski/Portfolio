import React, { Component, Fragment } from 'react';
import './GoTop.css';

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true })
      } else {
          this.setState({ thePosition: false })
        }
      });
      window.scrollTo(0, 0);
    }
    
  onScrollStep = () => {
    if (window.pageYOffset === 0){
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, 30);
    this.setState({ intervalId: intervalId });
  }

  renderGoTopIcon = () => {
    if (this.state.thePosition){
      return (
        <div className="go-top" onClick={this.scrollToTop}>
          Top
        </div>
      )
    }
  }
  
  render(){
    return (
      <div>
        <Fragment>
          {this.renderGoTopIcon()}
        </Fragment>
      </div>
    )
  }
}

export default GoTop;
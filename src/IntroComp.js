import React, {Component} from 'react';
import logo from './autoTLDR-white.svg';
import './IntroComp.css';
//import CreateYourOwn from './CreateYourOwn';
import {Link} from 'react-router-dom';

class IntroComp extends Component {
	constructor(props) {
      super(props);
      this.state = {
        optionMsg: ''
      }
      this.handleHover = this.handleHover.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleHover(event) {
    if (event.target.id === 'cyoBtn') {
      this.setState({
        optionMsg: 'Summarize your own text'
      });
    } else if (event.target.id === 'ctwBtn') {
      this.setState({
        optionMsg: 'Get summarized articles from your favorite site'
      });
    }
  }

  handleMouseOut() {
    this.setState({
      optionMsg: ''
    });
  }

 //onClick={this.props.handler}

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            <h1 className="App-title">Inspired by Reddit's AutoTLDR Bot</h1>
          </header>
          
          
          <div className="Options-div">
            <Link to="/CreateYourOwn"><button className="intentBtn" id="cyoBtn" onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}> Create your own</button></Link>
            <button className="intentBtn" id="ctwBtn" onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}> Crawl the web </button>            
          </div>

          <div>
            <p className="optionMsg"> {this.state.optionMsg} </p>
          </div>
          <footer className="footer"> 
            <p> This was inspired by the <a href="https://www.reddit.com/r/dailyprogrammer/comments/683w4s/20170428_challenge_312_hard_text_summarizer/"> text summarizer </a> challenge from Reddit's r/dailyprogrammer and Reddit's <a href="https://www.reddit.com/r/autotldr/comments/31b9fm/faq_autotldr_bot"> AutoTLDR Bot</a></p>
          </footer>
        </div>
      );
    }
}

export default IntroComp;
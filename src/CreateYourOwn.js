import React, { Component } from 'react';
import logo from './autoTLDR-white.svg';
import './CreateYourOwn.css';
import summarize from './summarizer.js';

class CreateYourOwn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInVal: '',
			summaryReady: false,
			summarizedText: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.callSummarize = this.callSummarize.bind(this);
	}

	handleChange(event) {
		this.setState({
			textInVal: event.target.value
		})
	}

	callSummarize(input) {
		let output = summarize(input);
		this.setState({
			summaryReady: true,
			summarizedText: output
		})

	}

	render() {
		if (this.state.summaryReady === false) {
			return (
				<div className="CyoMain">
					<header className="App-header">
            			<img src={logo} className="App-logo" alt="logo" />
          			</header>
					<textarea className='textIn' ref='textInVal' rows='15' cols='60'
							  placeholder='paste or type text here' onChange={this.handleChange}/>
					<div>
						<button className='tldrBtn' onClick={()=>this.callSummarize(this.state.textInVal)}>TLDRify</button>
					</div>
					<ul className='instructions'>
						<li> Paste or type the text you wish to summarize in area above </li>
						<li> When ready, press the TLDRify button, and your summarized text 
							will be returned to you!
						</li>
					</ul>
				</div>
			);
		} else if (this.state.summaryReady === true) {
			return (
				<div className='CyoMain'>
					<header className="App-header">
            			<img src={logo} className="App-logo" alt="logo" />
          			</header>
          			<textarea className="output" rows='15' cols='60' value={this.state.summarizedText}></textarea>
          			{/*<div className='output'>{this.state.summarizedText}</div>*/}
				</div>
			);
		}
	}

}



export default CreateYourOwn;
import React, { Component } from 'react';
import IntroComp from './IntroComp';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		page: 'intro'
	// 	}
	// 	this.introStateHandler = this.introStateHandler.bind(this);
	// }

	// introStateHandler(event) {
	// 	event.preventDefault();
	// 	this.setState({
	// 		page: 'createYourOwn'
	// 	});
	// }

	render() {
		return (
			<IntroComp />
		);
		
		// if (this.state.page === 'intro') {
		// 	return (
		// 		<IntroComp handler={this.introStateHandler}/>
		// 	);
		// } else if (this.state.page === 'createYourOwn') {
		// 	return (
		// 		<CreateYourOwn />
		// 	);
		// }
	}
}

export default App;
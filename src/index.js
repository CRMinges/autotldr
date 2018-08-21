import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateYourOwn from './CreateYourOwn';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router> 
	  <div>
	  	<Route exact path="/" component={App}/>
	  	<Route exact path="/CreateYourOwn" component={CreateYourOwn}/>
	  </div>
	</Router>,
	document.getElementById('root')
	);
registerServiceWorker();

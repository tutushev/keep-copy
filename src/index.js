import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import './index.css'; 

// import App from './App';
import MainContainer from './containers/MainContainer';
import registerServiceWorker from './registerServiceWorker';

const myStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={myStore}>
		<MainContainer />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();

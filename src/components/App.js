import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getStore } from '../Store';
import { auth } from '../config/firebase';
import { authTypes } from '../actions/types';
import { getUserInfo } from '../actions/userActions';

import Navbar from './Navbar';
import Auth from './Auth';
import Home from './Home';
import PrivateRouter from './PrivateRouter';

class App extends React.Component {
	componentDidMount = () => {
		auth.onAuthStateChanged(user => {
			if (user) {
				getStore.dispatch(getUserInfo(user.email));
				getStore.dispatch({ type: authTypes.LOG_IN });
			} else {
				getStore.dispatch({ type: authTypes.LOG_OUT });
			}
		});
	};

	render() {
		return (
			<Provider store={getStore}>
				<Navbar />
				<Router>
					<div className="container">
						<Switch>
							<PrivateRouter exact path="/" component={Home} />
							<Route exact path="/login" component={Auth} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
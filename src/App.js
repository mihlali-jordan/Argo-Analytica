import React from 'react';
import './App.css';
import './index.css';
import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { Conversations } from './components/Conversations';
import { SentimentSummary } from './components/SentimentSummary';
import { PostConversation } from './components/PostConversation';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function App(props) {
	let currentUrl = window.location.pathname;
	const url = `/${currentUrl}`;

	return (
		<div
			style={{
				backgroundColor: '#282C34',
				width: '100%',
				height: '100%',
				fontFamily: 'montserrat',
			}}
		>
			<Navbar />
			<div className='flex flex-row px-12 py-10 w-screen h-screen'>
				<Filters />
				<Router>
					<Route exact path='/' component={Conversations} >
						<Redirect to="/posts"/>
					</Route>
					<Route exact path='/posts' component={Conversations} />
					<Route exact path="/posts/:id" component={PostConversation} />
				</Router>
				<SentimentSummary />
			</div>
		</div>
	);
}

export default App;

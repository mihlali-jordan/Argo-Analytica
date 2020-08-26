import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { Conversations } from './components/Conversations';
import { SentimentSummary } from './components/SentimentSummary';
import { PostConversation } from './components/PostConversation';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	useHistory,
} from 'react-router-dom';

function App(props) {
	// const history = useHistory();

	// useEffect(() => {
	// 	return history.listen((location) => {
	// 		console.log(`You changed the page to: ${location.pathname}`);
	// 	});
	// }, [history]);

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
					<Route exact path='/' component={Conversations}>
						<Redirect to='/posts' />
					</Route>
					<Route exact path='/posts' component={Conversations} />
					<Route exact path='/posts/:id' component={PostConversation} />
				</Router>
				<SentimentSummary />
			</div>
		</div>
	);
}

export default App;

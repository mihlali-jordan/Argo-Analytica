import React from 'react';
import './App.css';
import './index.css'
import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { Conversations } from './components/Conversations';
import { SentimentSummary } from './components/SentimentSummary';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
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
			<div className='flex flex-row px-20 py-10 w-screen h-screen'>
				<Filters />
				<Conversations />
				<SentimentSummary />
			</div>
		</div>
	);
}

export default App;

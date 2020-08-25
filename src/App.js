import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { Conversations } from './components/Conversations';
import { SentimentSummary } from './components/SentimentSummary';

const moods = {
	0: 'Sad',
	1: 'Meh',
	2: 'Happy',
};

const topics = {
	A: 'Branch',
	B: 'Website',
	C: 'App',
	D: 'Fraud',
	E: 'Racism',
	F: 'Refunds',
	G: 'Deliveries',
};

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
			<div class='flex flex-row px-20 py-10 w-screen h-screen'>
				<Filters />
				<Conversations />
				<SentimentSummary />
			</div>
		</div>
	);
}

export default App;

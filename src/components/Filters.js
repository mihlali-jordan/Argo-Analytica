import React from 'react';
import '../tailwind.css';
import { FilterButton } from './FilterButton.js';



export const Filters = () => {
	const topics = {
		A: 'Branch',
		B: 'Website',
		C: 'App',
		D: 'Fraud',
		E: 'Racism',
		F: 'Refunds',
		G: 'Deliveries',
	};
	
	const moods = {
		0: 'Sad',
		1: 'Meh',
		2: 'Happy',
	};
	
	const arrTopics = Object.entries(topics);
	const arrMoods = Object.entries(moods)

	return (
		<div className='flex flex-col w-1/4'>
			<h1 className='text-white text-2xl'>Clear out the noise</h1>
			<div className='container pr-5'>
				<h1 className='text-argo-primary text-sm mt-5 mb-2'>Filter by topic</h1>
				{arrTopics.map((topic, i) => (
					<FilterButton key={i} topic={topic[1]} />
				))}
				<h1 className='text-argo-primary text-sm mt-5 mb-2'>Filter by mood</h1>
				{arrMoods.map((mood, i) => (
					<FilterButton key={i} mood={mood[1]} />
				))}
			</div>
		</div>
	);
};

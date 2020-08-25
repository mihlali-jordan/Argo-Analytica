import React from 'react';
import '../tailwind.css';
import {FilterButton} from './FilterButton.js';

export const Filters = () => {
	return (
		<div className='flex flex-col w-1/3 overflow-y-scroll'>
			<h1 className='text-white text-2xl'>Clear out the noise</h1>
			<div className='container pr-5'>
				<h1 className='text-argo-primary text-sm mt-5 mb-2'>Filter by topic</h1>
				<FilterButton />
                <h1 className="text-argo-primary text-sm mt-5 mb-2">Filter by mood</h1>
                <FilterButton />
			</div>
		</div>
	);
};

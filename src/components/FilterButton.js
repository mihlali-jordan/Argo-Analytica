import React from 'react';
import '../tailwind.css';

export const FilterButton = ({topic, mood}) => {
	return (
		<button className='rounded-full w-56 border-solid border-argo-primary border text-argo-primary p-2 mb-2 hover:bg-argo-primary hover:text-argo-dark'>
			{topic || mood}
		</button>
	);
};

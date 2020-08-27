import React, { useState } from 'react';
import '../tailwind.css';

export const FilterButton = (props) => {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<button
			className={
				!clicked
					? 'rounded-full w-56 border-solid border-argo-primary border text-argo-primary p-2 mb-2 hover:bg-argo-primary hover:text-argo-dark'
					: 'rounded-full w-56 bg-black border border-black text-white p-2 mb-2'
			}
			onClick={() => handleClick()}
		>
			{props.topic || props.mood}
		</button>
	);
};

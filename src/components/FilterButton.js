import React, {useState} from 'react';
import '../tailwind.css';

// const filterSelected = "rounded-full w-56 bg-black text-white p-2 mb-2"
// const filterUnselected = "rounded-full w-56 border-solid border-argo-primary border text-argo-primary p-2 mb-2 hover:bg-argo-primary hover:text-argo-dark"

export const FilterButton = ({topic, mood}) => {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		// onClick();
		// Ok, no more clicking.
		setClicked(!clicked);
	};
	
	return (
		<button className={!clicked ? "rounded-full w-56 border-solid border-argo-primary border text-argo-primary p-2 mb-2 hover:bg-argo-primary hover:text-argo-dark" : "rounded-full w-56 bg-black text-white p-2 mb-2"} onClick={handleClick}>
			{topic || mood}
		</button>
	);
};

import React from 'react';
import '../tailwind.css';

export const Sentiment = ({ mood }) => {
	// console.log(mood)
	let color = "green"

	if(mood === "sad") {
		color="red"
	} else if(mood === "meh"){
		color="yellow"
	} else {
		color="green"
	}

	// console.log(color)
	const sentimentState = {
		emoji: `w-20 mr-2 fill-current text-${color}-600`,
		sentimentTag: `bg-${color}-200 rounded-full text-${color}-600 w-24`,
		sentimentPercentage: `text-4xl text-${color}-600`,
	};

	return (
		<div className='flex flex-row mt-5 mb-5'>
			{/* Don't change css class, instead render conditionally */}
			<svg
				className={sentimentState.emoji}
				xmlns='http://www.w3.org/2000/svg'
				aria-hidden='true'
				styles='-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)'
				viewBox='0 0 16 16'
				transform='rotate(360)'
			>
				<g>
					<path
						fillRule='evenodd'
						d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'
					/>
					<path
						fillRule='evenodd'
						d='M4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z'
					/>
					<path d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z' />
				</g>
			</svg>
			<div className='flex flex-col justify-center items-center'>
				<div className={sentimentState.sentimentTag}>
					<h1 className='flex m-auto justify-center'>{mood}</h1>
				</div>
				<h1 className={sentimentState.sentimentPercentage}>33%</h1>
			</div>
		</div>
	);
};

import React from 'react';
import '../tailwind.css';
import {Posts} from '../data/Posts'

export const Sentiment = ({ mood }) => {
	
	// Math operations to calculate overall sentiment percentages
	const posts = Posts
	const sadSentimentCount = posts.filter(post => post.mood === 0).length
    const happySentimentCount = posts.filter(post =>  post.mood === 2).length
	const mehSentimentCount = posts.filter(post => post.mood === 1).length
	
	const totalPosts = sadSentimentCount + happySentimentCount + mehSentimentCount

	// svg paths for icons

	let svgPath = ""
	let sentimentPer = 0
	let color = "green"

	// Using prop to determine the appropriate colors to display and set the appropriate sentiment percentage
	if(mood === "sad") {
		color="red"
		sentimentPer = Math.round((sadSentimentCount/totalPosts)*100)
		svgPath = "M4.285 12.433a.5.5 0 00.683-.183A3.498 3.498 0 018 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 00.866-.5A4.498 4.498 0 008 9.5a4.5 4.5 0 00-3.898 2.25.5.5 0 00.183.683z"
	} else if(mood === "meh"){
		color="yellow"
		sentimentPer = Math.round((mehSentimentCount/totalPosts)*100)
		svgPath = "M4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z"
	} else {
		color="green"
		sentimentPer = Math.round((happySentimentCount/totalPosts)*100)
		svgPath = "M4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683z"
	}


	
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
						d={svgPath}
					/>
					<path d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z' />
				</g>
			</svg>
			<div className='flex flex-col justify-center items-center'>
				<div className={sentimentState.sentimentTag}>
					<h1 className='flex m-auto justify-center'>{mood}</h1>
				</div>
				<h1 className={sentimentState.sentimentPercentage}>{`${sentimentPer}%`}</h1>
			</div>
		</div>
	);
};

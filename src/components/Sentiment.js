import React from 'react';
import '../tailwind.css';

export const Sentiment = () => {
	return (
		<div class='flex flex-row mt-5 mb-5'>
			{/* Don't change css class, instead render conditionally */}
			<svg class="w-20 mr-2 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" styles="-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)" viewBox="0 0 16 16" transform="rotate(360)"><g><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/><path fill-rule="evenodd" d="M4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z"/><path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/></g></svg>
			<div class='flex flex-col justify-center items-center'>
				<div class='bg-yellow-200 rounded-full text-yellow-600 w-24'>
					<h1 class='flex m-auto justify-center'>Meh</h1>
				</div>
				<h1 class='text-4xl text-yellow-600'>33%</h1>
			</div>
		</div>
	);
};

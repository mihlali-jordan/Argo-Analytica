import React from 'react';
import '../tailwind.css';
import Moment from 'react-moment'
import {Posts} from '../data/Posts'

export const Post = ({postDetails}) => {
	const dateToFormat = postDetails.date
	const posts = Posts

	// Counting which posts are responses to  an invidual post
	let replies = 0
	posts.forEach(post => {
		if(post.replyToId === postDetails.id){
			replies += 1
		}
	})

	// Logic for rendering the correct tag on a post
	let color = "green"
	let sentiment = "meh"
	if(postDetails.mood === 0) {
		color="red"
		sentiment="Sad"
	} else if(postDetails.mood === 1){
		color="yellow"
		sentiment="Meh"
	} else {
		color="green"
		sentiment="Happy"
	}

	const tagCss = `bg-${color}-200 rounded-full text-${color}-600 w-20`

	return (
		<div className='post-component p-3 border-b border-argo-grey hover:bg-argo-darkGrey cursor-pointer'>
			<div className='flex flex-row text-white items-center mb-2'>
				<img
					className='rounded-full h-16 w-16 mr-3'
					src={postDetails.authorPic}
					alt=''
				/>
				<div className='flex-col'>
					<h1 className='text-argo-primary'>{postDetails.authorName}</h1>
					<p className='text-gray-400'><Moment format="D MMM YYYY hh:mm A">{dateToFormat}</Moment></p>
				</div>
			</div>
			<div className='text-gray-400 text-sm mb-3'>
				<p>
					{postDetails.text}
				</p>
			</div>
			<div className='flex flex-row mb-5'>
				<div className={tagCss}>
					<h1 className='flex m-auto justify-center'>{sentiment}</h1>
				</div>
				<span className='flex-grow'></span>
				<p className='text-argo-grey text-sm'>{replies} Replies</p>
			</div>
		</div>
	);
};

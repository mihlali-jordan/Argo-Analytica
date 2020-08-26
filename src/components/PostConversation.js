import React from 'react';
import '../tailwind.css';
import { Post } from './Post';
import { Posts } from '../data/Posts';
import { Link } from 'react-router-dom';
import { Comment } from './Comment';

export const PostConversation = ({ url, match }) => {
	const posts = Posts;
	let currentUrl = window.location.pathname;
	const isCurrentPost = posts.filter((post) => {
		// return `/posts/${post.replyToId}` === "/posts/EyPxHSo";
		return `/posts/${post.id}` === currentUrl;
	});
	console.log(currentUrl);
	console.log(isCurrentPost[0].text);

	// Array of post comments
	const commentsArray = posts.filter((post) => {
		return isCurrentPost[0].id === post.replyToId;
	});

	return (
		<div className='flex flex-col w-1/2 mr-8'>
			<div className='flex flex-row items-center mb-5'>
				<Link to='/'>
					<svg
						className='h-8 fill-current text-argo-primary mr-3'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						styles='-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)'
						viewBox='0 0 24 24'
						transform='rotate(360)'
					>
						<path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z' />
					</svg>
				</Link>
				<h1 className='text-white text-2xl'>Post</h1>
			</div>
			<div className='posts overflow-y-scroll'>
				<Post postDetails={isCurrentPost[0]} />
				{commentsArray.map((comment) => (
					<div key={comment.id}>
						<Comment postDetails={comment} />
					</div>
				))}
			</div>
		</div>
	);
};

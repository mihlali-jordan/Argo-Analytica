import React from 'react';
import '../tailwind.css';
import { Post } from './Post';
import { Posts } from '../data/Posts';

export const PostConversation = ({ url }) => {
	const posts = Posts;
	const isCurrentPost = posts.filter((post) => {
		return `${post.replyToId}` === url;
	});

	return (
		<div className='flex flex-col w-1/2 mr-8'>
			<h1 className='text-white text-2xl mb-5'>Latest Conversations</h1>
			<div className='posts overflow-y-scroll'>
				<Post postDetails={isCurrentPost} />
			</div>
		</div>
	);
};

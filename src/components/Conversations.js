import React from 'react';
import '../tailwind.css';
import { Post } from './Post';
import { Posts } from '../data/Posts';
import { Link, Route } from 'react-router-dom';
import {PostConversation} from './PostConversation'

export const Conversations = ({ match }) => {
	const posts = Posts;
	return (
		<div className='flex flex-col w-1/2 mr-8'>
			<h1 className='text-white text-2xl mb-5'>Latest Conversations</h1>
			<div className='posts overflow-y-scroll'>
				{posts.map((post, index) => (
					<div key={post.id}>
						<Link
							to={{
								pathname: `${match.url}/${post.id}`,
								state: post,
							}}
						>
							<Post postDetails={post} />
						</Link>
					</div>
				))}
			</div>
			<Route path={`${match.path}/:id`} component={Post} />
		</div>
	);
};

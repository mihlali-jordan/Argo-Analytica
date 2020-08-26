import React from 'react';
import '../tailwind.css';
import { Post } from './Post';
import { Posts } from '../data/Posts';
import { Link, Route } from 'react-router-dom';

export const Conversations = ({ match }) => {
    const posts = Posts;
    
    // Filter by Moods
    // const sadArray = posts.filter(post => post.mood === 0)
    // const happyArray = posts.filter(post =>  post.mood === 2)
    // const mehArray = posts.filter(post => post.mood === 1)

    // Filter by topic 
    // const A = posts.filter(post => post.topic === "A")
    // const B = posts.filter(post => post.topic === "B")
    // const C = posts.filter(post => post.topic === "C")
    // const D = posts.filter(post => post.topic === "D")
    // const E = posts.filter(post => post.topic === "E")
    // const F = posts.filter(post => post.topic === "F")
    // const G = posts.filter(post => post.topic === "G")
  

    // console.log(sadArray.length)

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

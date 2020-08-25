import React from 'react';
import '../tailwind.css';
import Moment from 'react-moment'

export const Post = ({postDetails}) => {
	const dateToFormat = postDetails.date
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
				<div className='bg-yellow-200 rounded-full text-yellow-600 w-20'>
					<h1 className='flex m-auto justify-center'>Meh</h1>
				</div>
				<span className='flex-grow'></span>
				<p className='text-argo-grey text-sm'>10 Replies</p>
			</div>
		</div>
	);
};

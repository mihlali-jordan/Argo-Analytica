import React from 'react';
import '../tailwind.css';

export const Post = () => {
	return (
		<div className='post-component p-3 border-b border-argo-grey hover:bg-argo-darkGrey cursor-pointer'>
			<div className='flex flex-row text-white items-center mb-2'>
				<img
					className='rounded-full h-16 w-16 mr-3'
					src='https://randomuser.me/api/portraits/thumb/men/27.jpg'
					alt=''
				/>
				<div className='flex-col'>
					<h1 className='text-argo-primary'>Mihlali Jordan</h1>
					<p className='text-gray-400'>15:44 PM | May 08, 2020</p>
				</div>
			</div>
			<div className='text-gray-400 text-sm mb-3'>
				<p>
					Mi vivamus lobortis senectus orci aliquam etiam hac pretium enim,
					className placerat commodo luctus ad elit justo ultrices.
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

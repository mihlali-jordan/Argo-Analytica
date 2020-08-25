import React from 'react';
import '../tailwind.css';

export const Post = () => {
	return (
		<div class='post-component p-3 border-b border-argo-grey hover:bg-argo-darkGrey cursor-pointer'>
			<div class='flex flex-row text-white items-center mb-2'>
				<img
					class='rounded-full h-16 w-16 mr-3'
					src='https://randomuser.me/api/portraits/thumb/men/27.jpg'
					alt=''
				/>
				<div class='flex-col'>
					<h1 class='text-argo-primary'>Mihlali Jordan</h1>
					<p class='text-gray-400'>15:44 PM | May 08, 2020</p>
				</div>
			</div>
			<div class='text-gray-400 text-sm mb-3'>
				<p>
					Mi vivamus lobortis senectus orci aliquam etiam hac pretium enim,
					class placerat commodo luctus ad elit justo ultrices.
				</p>
			</div>
			<div class='flex flex-row mb-5'>
				<div class='bg-yellow-200 rounded-full text-yellow-600 w-20'>
					<h1 class='flex m-auto justify-center'>Meh</h1>
				</div>
				<span class='flex-grow'></span>
				<p class='text-argo-grey text-sm'>10 Replies</p>
			</div>
		</div>
	);
};

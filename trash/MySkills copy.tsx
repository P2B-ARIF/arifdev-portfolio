import React from "react";

const MySkills = () => {
	return (
		<div className='min-h-screen max-w-7xl container mx-auto w-full'>
			<div className='grid grid-cols-12 grid-rows-7 gap-3 h-full w-full p-20'>
				{/* 1st column */}
				<div className='col-span-4 row-span-3 bg-gray-500 h-full w-full'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235974.6623681058!2d91.8951175405021!3d22.462722061470426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad33a5b42ea935%3A0xcdfee774a246f04d!2sRangunia%20Upazila!5e0!3m2!1sen!2sbd!4v1747758772621!5m2!1sen!2sbd'
						width='600'
						height='250'
						style={{
							border: 0,
						}}
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
				<div className='col-span-3 row-span-3 bg-gray-500 h-full w-full'>
					type speed
				</div>
				<div className='col-span-5 row-span-6 bg-gray-500 h-full w-full'>
					skills
				</div>

				{/* 2nd column */}
				<div className='col-span-2 row-span-1 bg-gray-500 h-full w-full grid grid-cols-2 gap-3'>
					<div className='bg-gray-500'>fb</div>
					<div className='bg-gray-500'>linkedin</div>
				</div>
				<div className='col-span-3 row-span-1 bg-gray-500 h-full w-full'>
					whatsapp
				</div>
				<div className='col-span-2 row-span-1 bg-gray-500 h-full w-full'>
					thinking
				</div>

				{/* 3rd column */}
				<div className='col-span-7 row-span-3 bg-gray-500 h-full w-full'>
					github
				</div>
				<div className='col-span-5 row-span-1 bg-gray-500 h-full w-full grid grid-cols-5 gap-3'>
					<div className='col-span-3 row-span-1 bg-gray-500 h-full w-full'>
						whatsapp
					</div>
					<div className='col-span-2 row-span-1 bg-gray-500 h-full w-full'>
						thinking
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;

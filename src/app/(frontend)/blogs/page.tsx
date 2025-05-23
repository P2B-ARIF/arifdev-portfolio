import React from "react";

const page = () => {
	return (
		<section className='min-h-screen pt-32'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-12 grid-rows-12 gap-3'>
					{/* 1st column */}
					<div className='row-span-8 col-span-7 bg-gray-300'>big grid</div>
					<div className='col-span-5 row-span-12 grid grid-cols-1 gap-y-3'>
						<div className='col-span-1 bg-gray-300 border'>1</div>
						<div className='col-span-1 bg-gray-300 border'>2</div>
						<div className='col-span-1 bg-gray-300 border'>3</div>
						<div className='col-span-1 bg-gray-300 border'>4</div>
					</div>

					{/* 2nd column */}
					<div className='row-span-4 col-span-7 bg-gray-300'>medium grid</div>
				</div>

				<div></div>
			</div>
		</section>
	);
};

export default page;

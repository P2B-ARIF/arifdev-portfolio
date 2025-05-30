"use client";
import React, { useEffect, useState } from "react";

const Experience = () => {
	const [show, setShow] = useState(false);
	const [timing, setTiming] = useState(2000);

	useEffect(() => {
		const trigger = () => {
			setShow(true);
			const newTiming = Math.round(Math.random() * 5000 + Math.random() * 1000);
			setTiming(newTiming);

			// নতুন delay অনুযায়ী আবার timeout set
			setTimeout(trigger, newTiming);
		};

		const initialTimeout = setTimeout(trigger, timing);

		return () => clearTimeout(initialTimeout);
	}, []);

	// lightning effect বন্ধ করার জন্য timeout
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (show) {
			timer = setTimeout(() => {
				setShow(false);
			}, 100);
		}
		return () => clearTimeout(timer);
	}, [show]);

	console.log(show, timing, "show");

	return (
		<div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-16 px-5'>
			<div className='relative col-span-2'>
				<h1
					className={`text-7xl md:text-9xl -rotate-12 text-transparent bg-gradient-to-r ${
						show ? "bg-gray-600/30 animate-gradient" : ""
					} to-accent/20 from-gray-600/30 bg-clip-text font-neonderthaw`}
				>
					Experience
				</h1>

				<div className='flex items-center justify-around'>
					<div className='text-2xl'>
						<h1 className='text-7xl font-semibold text-highlight pb-2'>7+</h1>{" "}
						Years of <br /> Experience
					</div>
					<div className='text-2xl'>
						<h1 className='text-7xl font-semibold text-highlight pb-2'>22+</h1>{" "}
						Projects <br /> Completed
					</div>
				</div>
			</div>
			<div className='col-span-2'>
				<h1 className='text-3xl text-highlight font-medium mb-8'>Experience</h1>
				<h3 className='text-lg'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
					assumenda corrupti exercitationem excepturi neque dolore rem, delectus
					cum quam dicta! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Nihil, consectetur. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Esse eaque maiores molestias rerum? Non aut
					accusantium aliquam vitae incidunt et.
				</h3>

				<div className='mt-10 space-y-5'>
					<div className='px-10 py-6 rounded-xl flex items-center justify-between border border-gray-700'>
						<div>
							<h1>2020 - Present</h1>
						</div>
						<div className='space-y-1'>
							<h3 className='text-lg'>Designflow Agency</h3>
							<h6 className='text-gray-500'>Founder, Lead Designer</h6>
						</div>
					</div>
					<div className='px-10 py-6 rounded-xl flex items-center justify-between border border-gray-700'>
						<div>
							<h1>2020 - Present</h1>
						</div>
						<div className='space-y-1'>
							<h3 className='text-lg'>Designflow Agency</h3>
							<h6 className='text-gray-500'>Founder, Lead Designer</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;

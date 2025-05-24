"use client";
import gridLine from "@/assets/elements/grid-lines.png";
import React from "react";

const Footer = () => {
	return (
		<footer className='relative pt-16'>
			<div
				className='absolute inset-0 bg-secondary bg-blend-overlay [mask-image:radial-gradient(60%_60%_at_50%_70%,black,transparent)]'
				style={{
					backgroundImage: `url(${gridLine.src})`,
				}}
			/>

			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-8 gap-3'>
					<div className='col-span-6'>
						<h5 className='font-bold text-lg'>Mohammad Arif</h5>
						<h6 className='text-gray-400'>Full Stack Developer</h6>
						<p className='text-gray-400'>
							Open for side-projects & collaborations
						</p>
					</div>
					<div className='col-span-2 grid grid-cols-2 gap-5'>
						<div>
							<h4 className='mb-5 text-lg font-semibold'>Me</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>Home</li>
								<li>About</li>
								<li>Gallery</li>
								<li>Works</li>
								<li>Blog</li>
								<li>FAQ</li>
							</ul>
						</div>
						<div>
							<h4 className='mb-5 text-lg font-semibold'>Connect</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>Facebook</li>
								<li>Instagram</li>
								<li>Linkedin</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='font-jaro flex  items-center text-center  font-medium  '>
					<div className='mx-auto group translate-x-16 hover:translate-x-0 text-[14rem] transition-all duration-300 ease-linear flex'>
						<span className=' duration-300 ease-linear group-hover:mr-10'>
							damn
						</span>
						<span className=''>it</span>
						<span className='w-0 translate-y-[50px]  opacity-0 duration-300 ease-out group-hover:w-5 group-hover:translate-y-0 group-hover:opacity-100'>
							,
						</span>
						<span className='inline-flex w-0 delay-75 duration-200 ease-in group-hover:w-20'></span>
						<span className=' duration-300 ease-linear'>arif</span>
						<span className='translate-y-[30px]  opacity-0 duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100'>
							!!
						</span>
					</div>
				</div>

				<div className='h-[2px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>

				<div className='py-7 flex items-center justify-between text-gray-400'>
					<div>© 2025 Mohammad Arif</div>
					<div>It's not a bug, it's a feature</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

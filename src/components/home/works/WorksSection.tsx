"use client";

import Image from "next/image";
import React from "react";
import demo from "./../../../assets/images/web-demo1.png";
import demo2 from "@/assets/images/web-demo1.png";
import Link from "next/link";
import WorkCard from "./WorkCard";
import { ArrowUpRight } from "lucide-react";
import thumb from "@/assets/images/image3.jpg";

const WorksSection = () => {
	const workList = {
		id: 1,
		project_name: "Speechify",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum.",
		thumbnail: thumb,
		links: {
			github: "",
			demo: "",
		},
		live: true,
		skills: [
			"React",
			"Typescript",
			"Tailwind",
			"Framer Motion",
			"React Router",
			"Zod",
			"React Icons",
		],
	};

	return (
		<section className='container mx-auto'>
			<h1 className='text-[300px] tracking-widest font-extrabold text-center text-gray-300/20'>
				WORK
			</h1>
			{/* <div className='flex items-center justify-between'>
				<h1 className='text-xl'>Selected Projects</h1>
				<Link
					href='/contact'
					className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'
				>
					Explore Projects
				</Link>
			</div> */}

			<div className='bg-zinc-100 text-black h-[90vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden  relative'>
				<div className='col-span-1 p-10'>
					<div className='flex items-center justify-between'>
						<h1 className='text-4xl font-semibold'>
							Oscar Project <span className='text-2xl'>- 2023</span>
						</h1>
						<div className='absolute top-10 left-[35%] w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white'>
							<ArrowUpRight />
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						debitis sit laudantium in sapiente. Ut quis voluptas modi nostrum
						tempore.
					</p>

					<div className='pt-1'>
						{workList?.skills?.map(skill => {
							return (
								<span className='m-1 ml-0 mr-2 text-xs px-2 py-1 rounded-full bg-gray-500 inline-block text-white'>
									{skill}
								</span>
							);
						})}
					</div>
				</div>
				<div className='col-span-2 p-10 overflow-hidden'>
					<div className='p-10 overflow-hidden'>
						<Image
							src={workList?.thumbnail}
							alt='demo'
							width={1500}
							height={1500}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</div>
			{/* <div className='grid grid-cols-2 2xl:grid-cols-3 gap-10 2xl:gap-5 mt-5'>
				{[...Array(6)].map((item, idx) => {
					return <WorkCard key={idx} idx={idx} item={workList} />;
				})}
			</div> */}
		</section>
	);
};

export default WorksSection;

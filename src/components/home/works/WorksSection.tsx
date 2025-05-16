"use client";

import Image from "next/image";
import React from "react";
import demo from "./../../../assets/images/web-demo1.png";
import demo2 from "@/assets/images/web-demo1.png";

const WorksSection = () => {
	const workList = {
		id: 1,
		project_name: "Speechify",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum.",
		thumbnail: "/img/works/works-1.png",
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
			"Email.js",
			"Resend",
			"React Email",
		],
	};

	return (
		<section className='container mx-auto'>
			<div className='flex justify-center flex-col items-center'>
				<div className='text-sm px-3 py-1 rounded-full border inline-block'>
					<span>WORK</span>
				</div>
				<h2 className='text-3xl font-bold text-center uppercase mt-2'>
					Lorem ipsum dolor <br /> sit amet consectetur.
				</h2>
			</div>

			<div className='grid grid-cols-2 gap-5 mt-16'>
				{[...Array(4)].map((item, idx) => {
					return (
						<div
							key={item}
							className='p-6 bg-primary/80 overflow-hidden border-white/20 border rounded-lg'
						>
							<h1 className='text-2xl font-bold'>{workList.project_name}</h1>
							<p className='mt-2'>{workList.description}</p>

							<div className='mt-2'>
								{workList.skills?.map(skill => {
									return (
										<span className='m-1 text-sm px-3 py-1 rounded-full bg-gray-500 inline-block'>
											{skill}
										</span>
									);
								})}
							</div>

							<div className='rounded-lg overflow-hidden h-[400px] top-8 relative'>
								<Image src={demo2} alt='' width={1000} height={1500} />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default WorksSection;

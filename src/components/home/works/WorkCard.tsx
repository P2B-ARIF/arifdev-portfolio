import React, { useRef } from "react";

import demo from "./../../../assets/images/web-demo1.png";
import demo2 from "@/assets/images/web-demo1.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import thumb from "@/assets/images/image3.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

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

const WorkCard = ({ idx, list, range, targetScale, progress }: any) => {
	const cardRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "start start"],
	});

	const cardScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
	const y = useTransform(progress, [0, 1], ["0px", "-80px"]);
	const titleY = useTransform(progress, [0, 1], ["0px", "-45px"]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<motion.div
			ref={cardRef}
			// style={{ top: `calc(-10% + ${idx * 50}px)` }}
			// style={{ top: idx === 0 ? "80px" : `${idx * 50 + 80}px` }}
			style={{ top: idx === 0 ? "80px" : `${idx * 25 + 80}px`, scale, y }}
			className={`sticky border border-gray-200`}
		>
			<div className='bg-zinc-100 text-black h-[90vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden  relative'>
				<div className='col-span-1 p-5 md:p-10'>
					<div className='flex items-center justify-between'>
						<motion.h1 className='text-3xl md:text-4xl font-semibold'>
							{idx + 1} Oscar Project <span className='text-2xl'>- 2023</span>
						</motion.h1>
						<div className='absolute top-5 md:top-10 right-5 md:left-[35%] w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white'>
							<ArrowUpRight />
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						debitis sit laudantium in sapiente. Ut quis voluptas modi nostrum
						tempore.
					</p>

					<div className='pt-1'>
						{workList?.skills?.map((skill, idx) => {
							return (
								<span
									key={idx}
									className='m-1 ml-0 mr-2 text-xs px-2 py-1 rounded-full bg-gray-500 inline-block text-white'
								>
									{skill}
								</span>
							);
						})}
					</div>
				</div>
				<div className='col-span-2 p-5 md:p-10 overflow-hidden'>
					<div className='md:m-10 overflow-hidden'>
						<motion.div style={{ scale: cardScale }} className='w-full h-full'>
							<Image
								src={workList?.thumbnail}
								alt='demo'
								width={1500}
								height={1500}
								className='w-full h-full object-cover'
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default WorkCard;

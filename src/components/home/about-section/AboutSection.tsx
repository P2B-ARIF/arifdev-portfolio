"use client";

import React, { useRef } from "react";
import { FileDown, Sparkles } from "lucide-react";
import Image from "next/image";
import img from "@/assets/images/image1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
	const containRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containRef,
		offset: ["start 80%", "start start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["120px", "-80px"]);
	const text = useTransform(scrollYProgress, [0, 1], ["0px", "140px"]);

	return (
		<div
			ref={containRef}
			className='py-32 container mx-auto grid grid-cols-2 gap-16'
		>
			<div>
				<h1 className='text-6xl font-bold uppercase'>
					Hi! I'm Arif, I love making things that
				</h1>

				<motion.div
					style={{ y }}
					className='w-full self-end mr-auto justify-end flex h-[380px] rounded-md overflow-hidden mt-10'
				>
					<Image
						src={img}
						width={400}
						height={400}
						alt='Picture of the author'
						className='w-[300px] h-full object-cover'
					/>
				</motion.div>
			</div>
			<motion.div style={{ y: text }}>
				<div className='w-fit self-center-safe flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
					<Sparkles className='w-4 h-4 mr-2' />
					<span className='text-sm font-medium tracking-wide'>About Me</span>
				</div>

				<h5 className='text-lg mt-10 text-gray-400'>
					I'm a <span className='text-highlight'>junior web developer</span> and
					I have a lot of knowledge, every day I'm pushing my learning skills.
					Adaptable quickly, and organized well. Interested in learning the
					latest web & software technologies quickly.
				</h5>
				<h5 className='text-lg mt-5 text-gray-400'>
					I'm a junior web developer and I have a lot of knowledge, every day
					I'm pushing <span className='text-highlight'>my learning skills</span>
					. Adaptable quickly, and organized well. Interested in learning the
					latest web & software technologies quickly. Able to work well in teams
					as well as individually.{" "}
					<span className='text-highlight'>
						My future goal is to become a senior full-stack developer!
					</span>
				</h5>

				<h4 className='my-5 mt-10'>
					Next Js | Prisma | Typescript | MongoDB | MySql | Framer-Motion
				</h4>

				<div className='flex items-center gap-4'>
					<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
						<FileDown />
						Download Resume
					</div>
					<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
						<FileDown />
						Explore About me
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutSection;

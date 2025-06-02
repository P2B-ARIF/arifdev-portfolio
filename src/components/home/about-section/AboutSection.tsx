"use client";

import React, { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import { FileDown, Sparkles, Telescope } from "lucide-react";
=======
import { FileDown, Sparkles } from "lucide-react";
>>>>>>> 1424e0b (asdf)
import Image from "next/image";
import img from "@/assets/images/image1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
	const containRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { scrollYProgress } = useScroll({
		target: containRef,
		offset: ["start 80%", "start start"],
	});

	const y = useTransform(
		scrollYProgress,
		[0, 1],
<<<<<<< HEAD
		isMobile ? ["150px", "-20px"] : ["200px", "-100px"],
	);
	const text = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ["1000px", "20px"] : ["0px", "220px"],
	);
=======
		isMobile ? ["150px", "-20px"] : ["120px", "-80px"],
	);
	const text = useTransform(scrollYProgress, [0, 1], ["0px", "140px"]);
>>>>>>> 1424e0b (asdf)

	return (
		<div
			ref={containRef}
			className='py-32 max-w-screen-xl 2xl:max-w-screen-2xl container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 px-5'
		>
			<div>
				<h1 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold uppercase'>
<<<<<<< HEAD
					Ambitious build? Delivered with precision and speed.
=======
					Hi! I'm Arif, I love making things that
>>>>>>> 1424e0b (asdf)
				</h1>

				<motion.div
					style={{ y }}
					className='w-full self-end mr-auto justify-end flex h-[380px] rounded-md overflow-hidden mt-10 '
				>
					<Image
						src={img}
						width={400}
						height={400}
						alt='Picture of the author'
						className='w-[300px] h-full object-cover rounded-md '
					/>
				</motion.div>
			</div>
			<motion.div style={{ y: text }}>
				<div className='w-fit self-center-safe flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
					<Sparkles className='w-4 h-4 mr-2' />
					<span className='text-sm font-medium tracking-wide'>About Me</span>
				</div>

				<h5 className='text-lg mt-10 text-gray-400'>
					{/* I'm a <span className='text-highlight'>junior web developer</span> and
					I have a lot of knowledge, every day I'm pushing my learning skills.
					Adaptable quickly, and organized well. Interested in learning the
					latest web & software technologies quickly. */}
					Hello!{" "}
					<span className='text-highlight'>
						I’m Arif, a Full Stack Web Developer
					</span>{" "}
					from Bangladesh who loves building clean, fast, and scalable web
					applications. I work with{" "}
					<span className='text-highlight'>modern</span> technologies like
					React, Next.js, TypeScript, Node.js, MongoDB, and Prisma — from
					frontend UI design to backend logic, I bring{" "}
					<span className='text-highlight'>complete solutions</span> to life
					with attention to performance and detail.
				</h5>
				<h5 className='text-lg mt-5 text-gray-400'>
					Whether you’re a startup looking to launch your first product, or an
					established business wanting to{" "}
					<span className='text-highlight'>
						{" "}
						optimize your platform — I’m here to help.
					</span>{" "}
					I care deeply about writing clean code, creating{" "}
					<span className='text-highlight'>smooth user experiences,</span> and
					delivering results that meet real-world needs. Let’s collaborate and
					build something{" "}
					<span className='text-highlight'>impactful together.</span>
				</h5>

<<<<<<< HEAD
				<h4 className='my-5 mt-5 md:mt-8 text-sm md:text-base'>
=======
				<h4 className='my-5 mt-5 md:mt-10'>
>>>>>>> 1424e0b (asdf)
					Next Js | Prisma | Typescript | MongoDB | MySql | Framer-Motion
				</h4>

				<div className='flex items-center gap-2 md:gap-4'>
					<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
						<FileDown size={18} />
						Download <span className={"md:hidden"}>CV</span>
						<span className='max-md:hidden'>Resume</span>
					</div>
					<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
						<Telescope size={18} />
						Explore About me
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutSection;

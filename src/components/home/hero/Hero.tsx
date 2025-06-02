"use client";

import { Facebook, FileDown, Instagram, Linkedin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import starsBg from "@/assets/elements/stars.png";
import gridLine from "@/assets/elements/grid-lines.png";
import Dots from "@/components/common/Dots";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MousePosition {
	x: number;
	y: number;
}

const Hero = () => {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});
	// const [scrollPosition, setScrollPosition] = useState(0);
	const [cursorVariant, setCursorVariant] = useState("default");

	const handleMouseMove = (event: MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const variants: any = {
		default: {
			x: mousePosition.x - 4,
			y: mousePosition.y - 4,
			// boxShadow: "0 0 20px #6fe6cc, 0 0 40px #6fe6cc",
			// filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))",
		},
		hovered: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,

			boxShadow: "0 0 20px transparent, 0 0 40px transparent",
			filter: "drop-shadow(0 0 8px transparent",
			//   backgroundColor: "#1a1a40",
			mixBlendMode: "difference",
		},
	};

	const textEnter = () => {
		setCursorVariant("hovered");
	};
	const textLeave = () => {
		setCursorVariant("default");
	};

	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const backgroundPositionY = useTransform(
		scrollYProgress,
		[0, 1],
		[-300, 300],
	);
	const textPositionY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 150]);
	const textPositionY2 = useTransform(scrollYProgress, [0, 1], [-100, 70]);

	const agencySlogans: string[] = [
		"Building Digital Dreams, One Pixel at a Time",
		"Code. Create. Captivate",
		"Where Ideas Transform into Stunning Websites",
		"Your Vision, Our Code – Seamless & Stunning",
		"Websites That Work as Hard as You Do",
	];

	return (
		<motion.div
			ref={sectionRef}
			style={{
				backgroundImage: `url(${starsBg.src})`,
				backgroundPositionY: backgroundPositionY,
			}}
			animate={{ backgroundPositionX: starsBg?.width }}
			transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
			className='min-h-screen relative overflow-hidden'
		>
			<div
				className='absolute inset-0 bg-secondary bg-blend-overlay [mask-image:radial-gradient(40%_40%_at_50%_20%,black,transparent)]'
				style={{
					backgroundImage: `url(${gridLine.src})`,
				}}
			/>

			<div className='absolute bottom-20 md:bottom-0 right-0 md:right-20 flex flex-col items-center gap-10'>
				<div className='md:hidden relative flex flex-col mb-5 items-center gap-4 mt-3 max-md:justify-center'>
					<a
						href='https://www.facebook.com/mohammad.arif280'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Facebook size={18} />
					</a>
					<a
						href='https://www.instagram.com/mohammad.arif280'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Instagram size={18} />
					</a>
					<a
						href='https://www.linkedin.com/in/mdarif319/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Linkedin size={18} />
					</a>
				</div>

				<h1 className='rotate-90 text-sm '>Scroll Down</h1>
				<div className='w-[1px] h-10 bg-accent rounded-full mr-1'></div>
			</div>

			<div className='absolute md:hidden top-5 right-0 px-5 justify-between flex items-center gap-4 w-full'>
				<Link href='/' className='font-semibold uppercase text-2xl'>
					<Image
						src='/logo.png'
						alt='logo'
						className='w-[40px] aspect-square object-contain'
						width={50}
						height={50}
					/>
				</Link>

				<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
					<FileDown />
					Download CV
				</div>
			</div>

			<div className='h-full w-full container mx-auto mt-48 md:mt-40 2xl:mt-60'>
				<div className='relative '>
					<motion.div
						variants={variants}
						animate={cursorVariant}
						className='pointer-events-none fixed top-0 left-0 h-2 w-2 rounded-full bg-white cursor-none'
					/>
					<h1
						// style={{ y: textPositionY }}
						className='text-5xl lg:text-7xl xl:text-[120px] 2xl:text-[140px] font-extrabold uppercase flex flex-col items-center justify-center mx-auto max-w-[1100px] w-full'
					>
						<motion.span
							onMouseEnter={textEnter}
							onMouseLeave={textLeave}
							className='text-center '
						>
							{/* <span className='text-start mr-0 md:mr-40'> */}
							Build <br /> with{" "}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700 tracking-tighter'>
								Code
							</span>
							,
						</motion.span>
<<<<<<< HEAD
						<span className='flex'>
							<motion.span
								onMouseEnter={textEnter}
								onMouseLeave={textLeave}
								// initial={{ x: -200 }}
								// animate={{ x: 0 }}
								className='text-end 2xl:ml-32 text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl max-md:leading-6'
							>
								{/* <span className='text-end ml-0 md:ml-48'> */}
								Design with
								<br />
								Precision
							</motion.span>
							<span className='max-sm:hidden text-[25.5px] mt-[6px]'>
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700 '>
									Deliver{" "}
								</span>
								with
								<br />
								Passion
							</span>
							{/* <span className='text-[25.5px] top-10 right-8  relative -rotate-90 text-right'>
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700 '>
									Deliver{" "}
								</span>
								with
								<br />
								Passion
							</span> */}
						</span>
=======
						<motion.span
							onMouseEnter={textEnter}
							onMouseLeave={textLeave}
							// initial={{ x: -200 }}
							// animate={{ x: 0 }}
							className='text-end 2xl:ml-32 text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl'
						>
							{/* <span className='text-end ml-0 md:ml-48'> */}
							Create with
							<br />
							Passion
						</motion.span>
>>>>>>> 1424e0b (asdf)
					</h1>
				</div>

				<div className='text-center relative z-10 md:text-left mt-10 2xl:mt-40 max-md:w-[90%] mx-auto'>
					<div className='text-sm md:text-lg 2xl:text-xl'>
						<h3>
							Hi, I'm <span className='text-blue-400'>Mohammad Arif</span> 👋
						</h3>
						<h4>A passionate Full Stack Developer & Problem Solver </h4>
						<h4>through clean code and intuitive design</h4>
					</div>
					<div className='hidden md:flex items-center gap-4 mt-3 max-md:justify-center'>
						<a
							href='https://www.facebook.com/mohammad.arif280'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Facebook size={22} />
						</a>
						<a
							href='https://www.instagram.com/mohammad.arif280'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Instagram size={22} />
						</a>
						<a
							href='https://www.linkedin.com/in/mdarif319/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Linkedin size={22} />
						</a>
					</div>
				</div>

				<div className='flex md:hidden items-center gap-5 justify-center mt-5'>
					<div className=' relative rounded-lg bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100%'>
						<div className='absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700 rounded-lg blur-md filter group-hover:opacity-100 group-hover:duration-200 animate-rotate-border'></div>
						<Link
							href='/contact'
							className='relative flex items-center gap-2 px-4 py-2 bg-dark text-accent rounded-lg'
						>
							Get In Touch
							<svg
								aria-hidden='true'
								viewBox='0 0 10 10'
								height='10'
								width='10'
								fill='none'
								className='mt-0.5 hover:ml-2 transition-all duration-300 ease-linear -mr-1 stroke-white stroke-2 '
							>
								<path
									d='M0 5h7'
									className='transition opacity-0 group-hover:opacity-100'
								></path>
								<path
									d='M1 1l4 4-4 4'
									className='transition group-hover:translate-x-[3px]'
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			{/* <Dots /> */}
		</motion.div>
	);
};

export default Hero;

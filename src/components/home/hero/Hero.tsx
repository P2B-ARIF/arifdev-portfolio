"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
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

	const variants = {
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
				// backgroundRepeat: "no-repeat",
				// backgroundPosition: "center",
				// backgroundSize: "cover",
				// cursor: "none",
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

			<div className='h-full w-full container mx-auto  mt-40'>
				<div className='relative'>
					<motion.div
						variants={variants}
						animate={cursorVariant}
						className='pointer-events-none fixed top-0 left-0 h-2 w-2 rounded-full bg-white cursor-none'
					/>
					<motion.h1
						style={{ y: textPositionY }}
						className='text-7xl md:text-9xl font-extrabold uppercase flex flex-col items-center justify-center max-w-[1100px] w-full'
					>
						<motion.span
							onMouseEnter={textEnter}
							onMouseLeave={textLeave}
							className='text-center ml-32 '
						>
							{/* <span className='text-start mr-0 md:mr-40'> */}
							Build <br /> with{" "}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700 tracking-tighter'>
								Code
							</span>
							,
						</motion.span>
						<motion.span
							onMouseEnter={textEnter}
							onMouseLeave={textLeave}
							initial={{ x: -200 }}
							animate={{ x: 0 }}
							className='text-end ml-32 text-6xl'
						>
							{/* <span className='text-end ml-0 md:ml-48'> */}
							Create with
							<br />
							Passion
						</motion.span>
					</motion.h1>
				</div>

				<motion.div
					style={{
						y: textPositionY2,
					}}
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className='text-lg md:text-xl'>
						<h3>
							Hi, I'm <span className='text-blue-400'>Mohammad Arif</span> 👋
						</h3>
						<h4>A passionate Full Stack Developer & Problem Solver </h4>
						<h4>through clean code and intuitive design</h4>
					</div>
					<div className='flex items-center gap-4 mt-3'>
						<Facebook />
						<Instagram />
						<Linkedin />
					</div>
				</motion.div>
			</div>
			{/* <Dots /> */}
		</motion.div>
	);
};

export default Hero;

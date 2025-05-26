"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MovingTitle = () => {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start center", "end end"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], ["-200%", "200%"]);
	const x2 = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);

	const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);
	const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "130vh"]);

	return (
		<div ref={container} className='overflow-x-hidden relative h-[250vh]'>
			<motion.h1
				style={{ x: x1, y: y1 }}
				className='text-[100px] md:text-[200px] text-center text-gray-200/80 whitespace-nowrap'
			>
				Crafting Unique Interfaces with Code & Creativity
			</motion.h1>
			<motion.h1
				style={{ x: x2, y: y2 }}
				className='text-[100px] md:text-[200px] text-center text-gray-300/80 whitespace-nowrap'
			>
				Modern Web Experiences by Mohammad Arif
			</motion.h1>
		</div>
	);
};

export default MovingTitle;

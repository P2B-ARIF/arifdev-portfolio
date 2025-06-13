"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useResponsive } from "@/hook/useResponsive";

const MovingTitle = () => {
	const container = useRef(null);
	const { mobile, tablet, laptop, desktop, monitor } = useResponsive();

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 60%", "end end"],
	});

	const x1 = useTransform(
		scrollYProgress,
		[0, 1],
		mobile
			? ["-650%", "200%"]
			: tablet
			? ["-350%", "200%"]
			: laptop
			? ["-350%", "200%"]
			: desktop
			? ["-350%", "200%"]
			: monitor
			? ["-250%", "200%"]
			: ["-350%", "200%"],
	);
	const x2 = useTransform(
		scrollYProgress,
		[0, 1],
		mobile
			? ["200%", "-600%"]
			: tablet
			? ["200%", "-350%"]
			: laptop
			? ["350%", "-280%"]
			: desktop
			? ["250%", "-220%"]
			: monitor
			? ["200%", "-180%"]
			: ["200%", "-350%"],
	);

	const y1 = useTransform(
		scrollYProgress,
		[0, 1],
		mobile
			? ["0vh", "200vh"]
			: tablet
			? ["0vh", "150vh"]
			: laptop
			? ["0vh", "150vh"]
			: desktop
			? ["10vh", "130vh"]
			: monitor
			? ["0vh", "150vh"]
			: ["0vh", "150vh"],
	);
	const y2 = useTransform(
		scrollYProgress,
		[0, 1],
		mobile
			? ["0vh", "200vh"]
			: tablet
			? ["0vh", "150vh"]
			: laptop
			? ["0vh", "150vh"]
			: desktop
			? ["0vh", "145vh"]
			: monitor
			? ["0vh", "170vh"]
			: ["0vh", "130vh"],
	);

	return (
		<div
			ref={container}
			className='overflow-x-hidden relative h-[270vh] 2xl:h-[250vh]'
		>
			<motion.h1
				style={{ x: x1, y: y1 }}
				className='max-sm:-rotate-12 text-[100px] md:text-[200px] text-center text-gray-200/80 whitespace-nowrap font-semibold'
			>
				Crafting Unique Interfaces with Code & Creativity
			</motion.h1>
			<motion.h1
				style={{ x: x2, y: y2 }}
				className='max-sm:-rotate-12 text-[100px] md:text-[200px] text-center text-gray-300/80 whitespace-nowrap font-semibold'
			>
				Modern Web Experiences by Mohammad Arif
			</motion.h1>
		</div>
	);
};

export default MovingTitle;

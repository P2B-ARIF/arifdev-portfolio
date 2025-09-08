"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ColorThief from "colorthief";

interface Project {
	id: number;
	title: string;
	imageUrl: string | any;
	description?: string;
	keywords?: string[];
}
// oaky..
// finally work...
const ProjectCard = ({ project }: { project: Project }) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const [bgColor, setBgColor] = useState<string>("#0b1323");

	useEffect(() => {
		const img = imgRef.current;
		if (!img) return;

		const extractColor = () => {
			try {
				const colorThief = new ColorThief();
				const color = colorThief.getColor(img);
				setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`);
			} catch (error) {
				console.error("Color extraction failed:", error);
				setBgColor("#0b1323"); // Fallback color
			}
		};

		if (img.complete) {
			extractColor();
		} else {
			img.addEventListener("load", extractColor);
			return () => img.removeEventListener("load", extractColor);
		}
	}, [project.imageUrl]); // Add dependency

	return (
		<motion.div
			className='w-[350px] md:w-[430px] 2xl:w-[600px] rounded-2xl flex-shrink-0 overflow-hidden p-5 2xl:p-8 text-accent border border-gray-500 flex flex-col justify-between'
			initial={{ opacity: 0.6 }}
			whileInView={{ opacity: 1 }}
			whileHover={{ y: -10 }}
			transition={{ duration: 0.3 }}
			style={{
				backgroundColor: bgColor,
				boxShadow: `0 2px 25px ${bgColor}`,
			}}
		>
			<div className='pb-5 space-y-3'>
				<h3 className='font-medium text-xl lg:text-2xl text-shadow-lg leading-6'>
					{project.title}
				</h3>
				<h3 className='text-sm md:text-base text-shadow-lg'>
					{project?.description}
				</h3>
			</div>

			<div className='w-full h-[280px] md:h-[300px] 2xl:h-[40vh] bg-white rounded-2xl overflow-hidden'>
				<Image
					ref={imgRef}
					src={project?.imageUrl || "/placeholder.svg"}
					alt={project.title}
					crossOrigin='anonymous'
					className='w-full h-full object-cover'
					width={600}
					height={400}
					onLoadingComplete={() => {
						// Alternative color extraction trigger
						const img = imgRef.current;
						if (img?.complete) {
							const colorThief = new ColorThief();
							try {
								const color = colorThief.getColor(img);
								setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`);
							} catch (error) {
								console.error("Color extraction failed:", error);
							}
						}
					}}
				/>
			</div>
		</motion.div>
	);
};

export default ProjectCard;

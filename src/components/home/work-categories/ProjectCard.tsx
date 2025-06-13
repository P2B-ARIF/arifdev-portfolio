"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ColorThief from "color-thief-browser";
import Image from "next/image";

const ProjectCard = ({ project }: any) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const [bgColor, setBgColor] = useState<string>("#f3f3f3");

	useEffect(() => {
		const img = imgRef.current;

		const extractColor = () => {
			if (!img) return;

			const colorThief = new ColorThief();

			// Wait a bit to make sure image is loaded/rendered
			setTimeout(() => {
				try {
					const color = colorThief.getColor(img);
					setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`);
				} catch (error) {
					console.error("Color extraction failed:", error);
				}
			}, 100);
		};

		if (img?.complete) {
			extractColor();
		} else {
			img?.addEventListener("load", extractColor);
			return () => img?.removeEventListener("load", extractColor);
		}
	}, []);

	return (
		<motion.div
			className='w-[400px] md:w-[450px] 2xl:w-[600px] rounded-2xl flex-shrink-0 overflow-hidden p-5 md:p-8 text-accent border border-gray-500'
			initial={{ opacity: 0.6 }}
			whileInView={{ opacity: 1 }}
			whileHover={{ y: -10 }}
			transition={{ duration: 0.3 }}
			style={{
				backgroundColor: bgColor,
				boxShadow: `0 2px 25px ${bgColor}`,
			}}
		>
			<div className='pb-5 flex justify-between items-center'>
				<h3 className='font-medium text-2xl text-shadow-lg'>{project.title}</h3>
				<div className='flex items-center text-sm text-gray-400'>
					<div className='ml-1 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center -rotate-45 shadow-lg'>
						<ArrowRight size={14} />
					</div>
				</div>
			</div>

			{/* Real image used for color extraction */}
			<div className='w-full h-[320px] md:h-[400px] 2xl:h-[50vh] bg-white rounded-2xl overflow-hidden'>
				<Image
					ref={imgRef}
					src={project?.imageUrl || "/placeholder.svg"}
					alt={project.title}
					crossOrigin='anonymous'
					className='w-full h-full object-cover'
					width={600}
					height={400}
				/>
			</div>
		</motion.div>
	);
};

export default ProjectCard;

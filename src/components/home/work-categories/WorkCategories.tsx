"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";

import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";

const projects = [
	{
		id: 1,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: image1,
		description: "",
	},
	{
		id: 2,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: image2,
		description: "",
	},
	{
		id: 3,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: image3,
		description: "",
	},
	{
		id: 4,
		title: "TechVista mobile app",
		category: "Case study",
		imageUrl: image4,
		description: "",
	},
	{
		id: 5,
		title: "ZenSys branding",
		category: "Case study",
		imageUrl: image5,
		description: "",
	},
	{
		id: 6,
		title: "InnovateTech campaign",
		category: "Case study",
		imageUrl: image6,
		description: "",
	},
];

const WorkCategories = () => {
	const targetRef = useRef(null);

	const { scrollYProgress, scrollXProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", `-${(projects.length - 1) * 12}%`],
	);

	return (
		<section ref={targetRef} className='h-[300vh] pb-10'>
			<div className='sticky pt-32 top-0 h-[60vh] md:min-h-screen flex flex-col justify-start'>
				<div className='relative flex-1 flex items-center overflow-hidden'>
					<motion.div
						style={{ x }}
						drag='x'
						dragConstraints={{
							left: -(projects.length * 450),
							right: 0,
						}}
						className='flex gap-6 xl:gap-10 px-[10vw]'
					>
						<div className='w-[400px] 2xl:w-[450px] flex-shrink-0 bg-gray overflow-hidden p-5 md:p-8 text-accent items-center h-full mt-5'>
							<h1 className='text-4xl md:text-5xl font-semibold leading-[1.2] sm:leading-9 md:leading-[46px] 2xl:leading-[55px] font-secondary text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary/50'>
								We let our work speak for itself.
							</h1>
							<p className='my-5 text-lg text-accent/80'>
								Our experts develop customized native apps and software
								solutions with innovative technologies for your success.
							</p>

							<div className='flex-shrink-0 inline-flex border border-gray-800 overflow-hidden rounded-full shadow-[5px_0px_20px_rgba(0,0,0,0.2)] shadow-blue-500/30'>
								<div className='bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100% rounded-full'>
									<div className='flex items-center gap-2 text-sm p-2 px-3 bg-dark rounded-full'>
										<div className='w-2 h-2 rounded-full bg-green-500  relative'>
											<div className='animate-ping absolute inset-0 w-2 h-2 rounded-full bg-green-500'></div>
										</div>
										<span>Hire me</span>
									</div>
								</div>
							</div>
						</div>

						{projects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WorkCategories;

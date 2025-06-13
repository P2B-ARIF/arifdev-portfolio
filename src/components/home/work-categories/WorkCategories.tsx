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
import { useResponsive } from "@/hook/useResponsive";

const categories = [
	{
		id: 1,
		title: "Frontend Web Development / User Interface (UI) Development",
		description:
			"Crafting intuitive, responsive, and visually appealing user interfaces that provide seamless user experiences across all devices.",
		keywords: [
			"React.js",
			"Next.js",
			"HTML5",
			"CSS3",
			"JavaScript",
			"Responsive Design",
			"UI/UX Implementation",
			"Performance Optimization",
		],
		imageUrl: image1,
	},
	{
		id: 2,
		title: "Backend Development & APIs",
		description:
			"Building powerful, secure, and scalable server-side logic and RESTful APIs to ensure your applications function flawlessly.",
		keywords: [
			"Node.js",
			"Express.js",
			"Python",
			"Django/Flask",
			"RESTful APIs",
			"Authentication",
			"Microservices",
			"Data Integration",
		],
		imageUrl: image2,
	},
	{
		id: 3,
		title: "Database Design & Management",
		imageUrl: image3,
		description:
			"Designing and implementing optimized database schemas and ensuring efficient data storage, retrieval, and security for your applications.",
		keywords: [
			"MongoDB",
			"PostgreSQL",
			"MySQL",
			"Data Modeling",
			"Database Optimization",
			"NoSQL",
			"SQL",
		],
	},
	{
		id: 4,
		title: "Full-Stack Web Applications",
		description:
			"Developing complete, bespoke web applications from the ground up, covering both frontend and backend for comprehensive digital products.",
		keywords: [
			"MERN/MEVN Stack",
			"Custom Web Apps",
			"Scalable Solutions",
			"Product Development",
			"Agile Methodology",
		],
		imageUrl: image4,
	},
	{
		id: 5,
		title: "Deployment & Performance Optimization",
		imageUrl: image5,
		description:
			"Ensuring your applications are deployed efficiently, highly performant, and scalable on cloud platforms for a seamless user experience.",
		keywords: [
			"Vercel",
			"Netlify",
			"Docker",
			"AWS/GCP",
			"Performance Tuning",
			"Security Best Practices",
			"CI/CD",
		],
	},
];

const WorkCategories = () => {
	const targetRef = useRef(null);
	const { mobile, tablet, laptop, desktop } = useResponsive();

	const { scrollYProgress, scrollXProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		mobile
			? ["0%", `-${categories.length * 17}%`]
			: ["0%", `-${categories.length * 13}%`],
	);

	return (
		<section ref={targetRef} className='h-[300vh] pb-10'>
			<div className='sticky pt-32 top-0 h-[80vh] md:min-h-screen flex flex-col justify-start'>
				<div className='relative flex-1 flex items-center overflow-hidden'>
					<motion.div
						style={{ x }}
						drag='x'
						dragConstraints={{
							left: -(categories.length * 450),
							right: 0,
						}}
						className='flex gap-7 xl:gap-10 px-[10vw]'
					>
						<div className='w-[300px] lg:w-[400px] 2xl:w-[450px] flex-shrink-0 bg-gray overflow-hidden p-5 md:p-8 text-accent items-center h-full mt-5'>
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

						{categories.map(category => (
							<ProjectCard key={category.id} project={category} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WorkCategories;

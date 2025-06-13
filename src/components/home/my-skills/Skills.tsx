import { backend, frontend, others } from "@/assets/skills/skillwrapper";
import React from "react";

const skillsObj = {
	frontend: [
		{ label: "HTML", icon: frontend.html },
		{ label: "CSS", icon: frontend.css },
		{ label: "Sass", icon: frontend.sass },
		{ label: "Tailwind CSS", icon: frontend.tailwind },
		{ label: "JavaScript", icon: frontend.javascript },
		{ label: "React.Js", icon: frontend.reactJs },
		{ label: "Next.Js", icon: frontend?.nextjs },
		{ label: "Redux", icon: frontend.redux },
		{ label: "Typescript", icon: frontend.typescript },
	],
	backend: [
		{ label: "Node.js", icon: backend?.nodejs },
		{ label: "Express.js", icon: backend?.express },
		{ label: "MongoDB", icon: backend?.mongodb },
		{ label: "Firebase", icon: backend?.firebase },
		{ label: "JWT", icon: backend?.jwt },
		{ label: "Zod", icon: backend?.zod },
	],
	others: [
		{ label: "Framer Motion", icon: others?.framerMotion },
		{ label: "Sanity", icon: others?.sanity },
		{ label: "Puppeteer", icon: others?.puppeteer },
		{ label: "Prisma", icon: others?.prisma },
	],
};
const Skills = () => {
	return (
		<div className='p-2 relative'>
			<h1
				className='text-[80px] md:text-[100px] font-extrabold font-lato uppercase
							text-transparent bg-clip-text from-slate-600/80 to-gray/70 bg-gradient-to-r opacity-70 absolute -top-12 md:-top-16 left-[50%] translate-x-[-50%]
							'
			>
				SKIlLS
			</h1>
			<div className='py-4'>
				<div className='mb-5'>
					<h2 className='text-2xl md:text-3xl font-medium text-slate-100'>
						Crafting digital experiences with precision and passion.
						<span className='block mt-2 text-slate-300 text-base font-normal'>
							Every line of code tells a story of innovation and excellence.
						</span>
					</h2>
				</div>

				<div className=''>
					<h4 className='font-medium'>Frontend</h4>
					<div
						className='
								flex flex-wrap gap-2 mt-2
								'
					>
						{skillsObj?.frontend.map((skill, idx) => (
							<div
								key={idx}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-2 items-center text-sm'
							>
								{skill.icon && (
									<img
										src={skill.icon.src}
										alt={skill.label}
										className='w-4 h-4'
									/>
								)}

								{skill.label}
							</div>
						))}
					</div>
				</div>
				<div className='mt-5'>
					<h4 className=' font-medium '>Backend</h4>
					<div
						className='
								flex flex-wrap gap-2 mt-2
								'
					>
						{skillsObj.backend.map((skill, idx) => (
							<div
								key={idx}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-3 items-center text-sm'
							>
								{skill.icon && (
									<img
										src={skill.icon.src}
										alt={skill.label}
										className='w-4 h-4'
									/>
								)}
								{skill.label}
							</div>
						))}
					</div>
				</div>
				<div className='mt-5'>
					<h4 className=' font-medium'>I have Sweet Skills </h4>
					<div
						className='
								flex flex-wrap gap-2 mt-2
								'
					>
						{skillsObj.others.map((skill, idx) => (
							<div
								key={idx}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-3 items-center text-sm'
							>
								{skill.icon && (
									<img
										src={skill.icon.src}
										alt={skill.label}
										className='w-4 h-4'
									/>
								)}
								{skill.label}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

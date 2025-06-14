"use client";

import { backend, frontend, others } from "@/assets/skills/skillwrapper";
import React from "react";
import SkillIcon from "./SkillIcon";

const SkillSection = () => {
	const skillsObj = [
		{ label: "HTML", icon: frontend.html },
		{ label: "CSS", icon: frontend.css },
		{ label: "Sass", icon: frontend.sass },
		{ label: "Tailwind CSS", icon: frontend.tailwind },
		{ label: "JavaScript", icon: frontend.javascript },
		{ label: "React.Js", icon: frontend.reactJs },
		{ label: "Next.Js", icon: frontend?.nextjs },
		{ label: "Redux", icon: frontend.redux },
		{ label: "Typescript", icon: frontend.typescript },
		{ label: "Node.js", icon: backend?.nodejs },
		{ label: "Express.js", icon: backend?.express },
		{ label: "MongoDB", icon: backend?.mongodb },
		{ label: "Firebase", icon: backend?.firebase },
		{ label: "JWT", icon: backend?.jwt },
		{ label: "Zod", icon: backend?.zod },
		{ label: "Framer Motion", icon: others?.framerMotion },
		{ label: "Sanity", icon: others?.sanity },
		{ label: "Puppeteer", icon: others?.puppeteer },
		{ label: "Prisma", icon: others?.prisma },

		{ label: "HTML", icon: frontend.html },
		{ label: "CSS", icon: frontend.css },
		{ label: "Sass", icon: frontend.sass },
		{ label: "Tailwind CSS", icon: frontend.tailwind },
		{ label: "JavaScript", icon: frontend.javascript },
		{ label: "React.Js", icon: frontend.reactJs },
		{ label: "Next.Js", icon: frontend?.nextjs },
		{ label: "Redux", icon: frontend.redux },
		{ label: "Typescript", icon: frontend.typescript },
		{ label: "Node.js", icon: backend?.nodejs },
		{ label: "Express.js", icon: backend?.express },
		{ label: "MongoDB", icon: backend?.mongodb },
		{ label: "Firebase", icon: backend?.firebase },
		{ label: "JWT", icon: backend?.jwt },
		{ label: "Zod", icon: backend?.zod },
		{ label: "Framer Motion", icon: others?.framerMotion },
		{ label: "Sanity", icon: others?.sanity },
		{ label: "Puppeteer", icon: others?.puppeteer },
		{ label: "Prisma", icon: others?.prisma },

		{ label: "HTML", icon: frontend.html },
		{ label: "CSS", icon: frontend.css },
		{ label: "Sass", icon: frontend.sass },
		{ label: "Tailwind CSS", icon: frontend.tailwind },
		{ label: "JavaScript", icon: frontend.javascript },
		{ label: "React.Js", icon: frontend.reactJs },
		{ label: "Next.Js", icon: frontend?.nextjs },
		{ label: "Redux", icon: frontend.redux },
		{ label: "Typescript", icon: frontend.typescript },
		{ label: "Node.js", icon: backend?.nodejs },
		{ label: "Express.js", icon: backend?.express },
		{ label: "MongoDB", icon: backend?.mongodb },
		{ label: "Firebase", icon: backend?.firebase },
		{ label: "JWT", icon: backend?.jwt },
		{ label: "Zod", icon: backend?.zod },
		{ label: "Framer Motion", icon: others?.framerMotion },
		{ label: "Sanity", icon: others?.sanity },
		{ label: "Puppeteer", icon: others?.puppeteer },
		{ label: "Prisma", icon: others?.prisma },
	];

	//
	//

	// console.log(randomSize(), "randomSize");

	return (
		<section className='relative'>
			{/* <div className='bg-secondary bg-gradient-to-b mix-blend-luminosity from-transparent to-primary absolute left-0 -top-52 h-32 w-full'></div> */}

			<div className='container mx-auto mt-40 mb-20 '>
				<div className='absolute inset-0 bg-primary bg-blend-overlay [mask-image:radial-gradient(80%_80%_at_50%_40%,transparent,black)]'></div>

				<div className='grid grid-cols-6 md:grid-cols-10 divide-x divide-y divide-gray-700/80 border-4 border-primary inset-2 relative'>
					{[...Array(50)].map((_, i) => {
						return <SkillIcon key={i} idx={i} skillsObj={skillsObj} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;

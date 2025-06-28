// "use client";
// import React, { useEffect, useRef } from "react";
// import profile from "@/assets/images/profile.jpg";
// import starsBg from "@/assets/elements/stars.png";
// import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import { FileDown, FileUser } from "lucide-react";

// const string =
// 	"I'm Mohammad Arif, a web developer focused on creating clean, user-friendly, and functional websites. With over [3 Years] of experience in frontend development, I specialize in JavaScript frameworks like React and have a keen eye for design and user experience.";

// const AboutSection2 = () => {
// 	const container = useRef(null);

// 	const { scrollYProgress } = useScroll({
// 		target: container,
// 		offset: ["start 0.5", "start start"],
// 	});

// 	return (
// 		<motion.div
// 			style={{ backgroundImage: `url(${starsBg.src})` }}
// 			animate={{ backgroundPositionX: starsBg?.width }}
// 			transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
// 			className='relative py-32'
// 		>
// 			<div className='container mx-auto max-w-4xl'>
// 				{/* <div
// 					className='min-h-[130vh] bg-gradient-to-r from-primary to-secondary flex flex-col items-center container justify-center mix-blend-screen'
// 					style={{
// 						backgroundImage: `url(${profile.src})`,
// 						backgroundSize: "contain",
// 						backgroundRepeat: "no-repeat",
// 						backgroundPosition: "left",
// 					}}
// 				> */}
// 				<div className='grid grid-cols-1'>
// 					{/* <div></div> */}
// 					<div ref={container} className='px-5'>
// 						{/* <h1 className='text-5xl font-bold mb-8 text-blue-400 whitespace-nowrap'>
// 							Who Am I?
// 						</h1> */}
// 						<h5 className='text-lg font-medium mb-4'>
// 							A Developer Who Finds Passion in Code
// 						</h5>

// 						<div className='text-xl md:text-2xl lg:text-[45px] flex flex-wrap leading-5 md:leading-12'>
// 							{string?.split(" ").map((word, idx) => {
// 								const start = idx / string.length;
// 								const end = start + 1 / string.length;

// 								return (
// 									<Word
// 										key={idx}
// 										children={word}
// 										range={[start, end]}
// 										progress={scrollYProgress}
// 									/>
// 								);
// 							})}
// 						</div>

// 						<h4 className='my-5 mt-10'>
// 							Next Js | Prisma | Typescript | MongoDB | MySql | Framer-Motion
// 						</h4>
// 						<div className='mt-6 flex items-center gap-5'>
// 							<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
// 								<FileDown />
// 								Download Resume
// 							</div>
// 							{/* <div className='relative rounded-lg bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100%'>
// 								<div className='absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700 rounded-lg blur-md filter group-hover:opacity-100 group-hover:duration-200 animate-rotate-border'></div>
// 								<Link
// 									href='/contact'
// 									className='relative flex items-center gap-2 px-4 py-2 bg-dark text-accent rounded-lg'
// 								>
// 									Hire Me
// 									<svg
// 										aria-hidden='true'
// 										viewBox='0 0 10 10'
// 										height='10'
// 										width='10'
// 										fill='none'
// 										className='mt-0.5 hover:ml-2 transition-all duration-300 ease-linear -mr-1 stroke-white stroke-2 '
// 									>
// 										<path
// 											d='M0 5h7'
// 											className='transition opacity-0 group-hover:opacity-100'
// 										></path>
// 										<path
// 											d='M1 1l4 4-4 4'
// 											className='transition group-hover:translate-x-[3px]'
// 										></path>
// 									</svg>
// 								</Link>
// 							</div> */}
// 						</div>
// 					</div>
// 				</div>
// 				{/* </div> */}
// 			</div>
// 		</motion.div>
// 	);
// };

// export default AboutSection2;

// const Word = ({
// 	children,
// 	range,
// 	progress,
// }: {
// 	children: string;
// 	range: number[];
// 	progress: MotionValue<number>;
// }) => {
// 	const characters = children.split("");
// 	const amount = range[1] - range[0];
// 	const step = amount / children.length;

// 	return (
// 		<span
// 			className={`mr-3 mt-3 relative ${
// 				(children === "[3" && "text-blue-500") ||
// 				(children == "Years]" && "text-blue-500")
// 			}
// 			}`}
// 		>
// 			{characters.map((char, idx) => {
// 				const start = range[0] + idx * step;
// 				const end = range[0] + (idx + 1) * step;
// 				return (
// 					<Character key={idx} range={[start, end]} progress={progress}>
// 						{char}
// 					</Character>
// 				);
// 			})}
// 		</span>
// 	);
// };

// const Character = ({
// 	children,
// 	range,
// 	progress,
// }: {
// 	children: string;
// 	range: number[];
// 	progress: MotionValue<number>;
// }) => {
// 	const opacity = useTransform(progress, range, [0, 1]);

// 	return (
// 		<>
// 			<span className='absolute opacity-[0.1]'>{children}</span>
// 			<motion.span style={{ opacity }} className='tracking-wide'>
// 				{children}
// 			</motion.span>
// 		</>
// 	);
// };

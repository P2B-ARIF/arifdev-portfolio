"use client";
import React, { useRef } from "react";
import profile from "@/assets/images/profile.jpg";
import starsBg from "@/assets/elements/stars.png";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const string =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat iste nemo accusamus at illo quasi? odi libero reiciendis cupiditate!";

const AboutSection = () => {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.5", "start start"],
	});

	return (
		<motion.div
			style={{ backgroundImage: `url(${starsBg.src})` }}
			animate={{ backgroundPositionX: starsBg?.width }}
			transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
			className='relative'
		>
			<div className='container mx-auto '>
				<div
					className='min-h-[130vh] bg-gradient-to-r from-primary to-secondary flex flex-col items-center container justify-center mix-blend-screen'
					style={{
						backgroundImage: `url(${profile.src})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "left",
					}}
				>
					<div className='grid grid-cols-2'>
						<div></div>
						<div className=''>
							<div
								ref={container}
								className='text-5xl font-bold flex flex-wrap'
							>
								{string?.split(" ").map((word, idx) => {
									const start = idx / string.length;
									const end = start + 1 / string.length;

									return (
										<Word
											key={idx}
											children={word}
											range={[start, end]}
											progress={scrollYProgress}
										/>
									);
								})}
							</div>
							<br />
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								iste quos, quibusdam et unde rerum labore. Illo modi laborum
								libero error amet quidem corrupti aut magnam non dolore eveniet
								fugit recusandae, nostrum, possimus necessitatibus aliquam
								voluptatibus? Id, obcaecati molestias. Molestias reprehenderit
								maiores ab porro, doloribus delectus vel nostrum ducimus
								aspernatur.
							</p>

							<div>
								<div>download resume</div>
								<div className=' relative rounded-lg bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100%'>
									<div className='absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700 rounded-lg blur-md filter group-hover:opacity-100 group-hover:duration-200 animate-rotate-border'></div>
									<Link
										href='/contact'
										className='relative flex items-center gap-2 px-4 py-2 bg-dark text-accent rounded-lg'
									>
										Get In Touch
										<svg
											aria-hidden='true'
											viewBox='0 0 10 10'
											height='10'
											width='10'
											fill='none'
											className='mt-0.5 hover:ml-2 transition-all duration-300 ease-linear -mr-1 stroke-white stroke-2 '
										>
											<path
												d='M0 5h7'
												className='transition opacity-0 group-hover:opacity-100'
											></path>
											<path
												d='M1 1l4 4-4 4'
												className='transition group-hover:translate-x-[3px]'
											></path>
										</svg>
									</Link>
								</div>
								F
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default AboutSection;

const Word = ({
	children,
	range,
	progress,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
}) => {
	const characters = children.split("");
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className='mr-3 mt-3 relative'>
			{characters.map((char, idx) => {
				const start = range[0] + idx * step;
				const end = range[0] + (idx + 1) * step;
				return (
					<Character key={idx} range={[start, end]} progress={progress}>
						{char}
					</Character>
				);
			})}
		</span>
	);
};

const Character = ({
	children,
	range,
	progress,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
}) => {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<>
			<span className='absolute opacity-[0.1]'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</>
	);
};

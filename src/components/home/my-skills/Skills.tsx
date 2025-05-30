import React from "react";

const skills = {
	Frontend: [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Next.js",
		"Tailwind CSS",
		"Redux",
		"Vue",
	],
	Backend: [
		"Node.js",
		"Express.js",
		"Python",
		"Django",
		"PostgreSQL",
		"MongoDB",
		"Firebase",
	],
	"Sweet Skills": [
		"Communication",
		"Problem-solving",
		"Teamwork",
		"Adaptability",
	],
};
const Skills = () => {
	return (
		<div className='p-2 relative'>
			<h1
				className='text-[100px] font-extrabold font-lato uppercase
							text-transparent bg-clip-text from-slate-600/80 to-gray/70 bg-gradient-to-r opacity-70 absolute -top-16 left-[50%] translate-x-[-50%]
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
						{skills.Frontend.map(skill => (
							<div
								key={skill}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-3 items-center text-sm'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 128 128'
									className='w-4 h-4'
								>
									<path
										d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
										fill='#38bdf8'
									/>
								</svg>
								{skill}
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
						{skills.Backend.map(skill => (
							<div
								key={skill}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-3 items-center text-sm'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 128 128'
									className='w-4 h-4'
								>
									<path
										d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
										fill='#38bdf8'
									/>
								</svg>
								{skill}
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
						{skills["Sweet Skills"].map(skill => (
							<div
								key={skill}
								className='border border-dashed border-gray-500 p-1.5 px-4 rounded-md flex gap-3 items-center text-sm'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 128 128'
									className='w-4 h-4'
								>
									<path
										d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
										fill='#38bdf8'
									/>
								</svg>
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

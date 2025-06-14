import React from "react";
import profile2 from "@/assets/images/profile2.jpg";
import profile3 from "@/assets/images/profile3.jpg";
import { Facebook, FileDown, Globe, Instagram, Smile } from "lucide-react";
import Experience from "./_components/Experience";
import SkillSection from "./_components/SkillSection";

export const metadata = {
	title: "About Me",
};

const page = () => {
	return (
		<section className='min-h-screen '>
			<div
				style={{
					backgroundImage: `url(${profile3.src})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className='h-screen relative mix-blend-screen bg-[#03163c] [mask-image:radial-gradient(100%_80%_at_50%_40%,#03163c,transparent)]'
			>
				{/* <div className='absolute h-20 w-full left-0 bottom-0 bg-secondary bg-blend-screen [mask-image:linear-gradient(50%_50%_at_50%_50%,transparent,black)]'></div> */}

				<div className='bg-secondary/50 absolute inset-0 h-screen w-full mix-blend-screen z-[-1]'></div>

				<div className='px-5 relative items-center h-full grid grid-cols-1 md:grid-cols-2 gap-32 container mx-auto '>
					<div className='space-y-5 w-3/4'>
						<h4 className='text-6xl font-bold'>About</h4>
						<h1 className='text-2xl font-bold'>Hi, I'm Mohammad Arif</h1>
						<p className='text-gray-300'>
							Passionate Full-Stack Developer. I craft intuitive, scalable web
							applications, transforming ideas into functional, valuable digital
							solutions.
						</p>
					</div>
					<div className='text-right space-y-5'>
						<h4 className='text-6xl font-bold'>Me</h4>
						<h3 className='text-2xl font-bold'>Full Stack Developer</h3>

						<div className='flex items-center gap-5 justify-end'>
							<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
								<FileDown />
								Download Resume
							</div>
							<div className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'>
								<Smile />
								Lets' Talk
							</div>
						</div>

						<div className='flex items-center gap-4 justify-end mt-6'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-blue-500 transition-colors duration-200'
							>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-pink-500 transition-colors duration-200'
							>
								<Instagram className='w-5 h-5' />
							</a>
							<a
								href='https://fiverr.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-green-500 transition-colors duration-200'
							>
								<Globe className='w-5 h-5' /> {/* or any Fiverr-like icon */}
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* my skills */}
			<SkillSection />

			<Experience />
		</section>
	);
};

export default page;

import React from "react";
import profile2 from "@/assets/images/profile2.jpg";
import profile3 from "@/assets/images/profile3.jpg";
import { Facebook, FileDown, Globe, Instagram, Smile } from "lucide-react";

export const metadata = {
	title: "About Me",
};

const page = () => {
	return (
		<section className='min-h-screen'>
			<div
				style={{
					backgroundImage: `url(${profile3.src})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className='h-screen mix-blend-screen bg-blue-600 grayscale-[0.5] [mask-image:radial-gradient(100%_80%_at_50%_20%,#03163c,transparent)]'
			>
				<div className='items-center h-full grid grid-cols-1 md:grid-cols-2 gap-32 container mx-auto'>
					<div className='space-y-5 w-3/4'>
						<h4 className='text-6xl font-bold'>About</h4>
						<h1 className='text-2xl font-bold'>Hi, I'm Mohammad Arif</h1>
						<p className='text-gray-300'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ipsam
							dolorum accusamus dolore, suscipit autem quibusdam libero
							nesciunt. Aut, veritatis?
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
				{/* <div>
					<img src={profile2.src} alt='' className='mix-blend-screen' />
				</div> */}
			</div>

			<div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-16'>
				<div className='relative col-span-2'>
					<h1 className='text-9xl -rotate-12 text-transparent bg-gradient-to-r to-accent/20 from-gray-600/30 bg-clip-text font-neonderthaw'>
						Experience
					</h1>

					<div className='flex items-center justify-around'>
						<div className='text-2xl'>
							<h1 className='text-7xl font-semibold text-highlight pb-2'>7+</h1>{" "}
							Years of <br /> Experience
						</div>
						<div className='text-2xl'>
							<h1 className='text-7xl font-semibold text-highlight pb-2'>
								22+
							</h1>{" "}
							Projects <br /> Completed
						</div>
					</div>
				</div>
				<div className='col-span-2'>
					<h1 className='text-3xl text-highlight font-medium mb-8'>
						Experience
					</h1>
					<h3 className='text-lg'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
						assumenda corrupti exercitationem excepturi neque dolore rem,
						delectus cum quam dicta! Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Nihil, consectetur. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Esse eaque maiores molestias rerum?
						Non aut accusantium aliquam vitae incidunt et.
					</h3>

					<div className='mt-10 space-y-5'>
						<div className='px-10 py-6 rounded-xl flex items-center justify-between border border-gray-700'>
							<div>
								<h1>2020 - Present</h1>
							</div>
							<div className='space-y-1'>
								<h3 className='text-lg'>Designflow Agency</h3>
								<h6 className='text-gray-500'>Founder, Lead Designer</h6>
							</div>
						</div>
						<div className='px-10 py-6 rounded-xl flex items-center justify-between border border-gray-700'>
							<div>
								<h1>2020 - Present</h1>
							</div>
							<div className='space-y-1'>
								<h3 className='text-lg'>Designflow Agency</h3>
								<h6 className='text-gray-500'>Founder, Lead Designer</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;

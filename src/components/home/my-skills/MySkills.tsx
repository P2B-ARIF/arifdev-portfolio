"use client";

import {
	Github,
	MapPin,
	Keyboard,
	Facebook,
	Linkedin,
	MessageSquare,
	BrainCircuit,
	ArrowRight,
	Clock,
	CheckCircle2,
	User,
	Sparkle,
	Sparkles,
} from "lucide-react";
import { FaFileUpload, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import GitHubCalendarCard from "./GitHubCalendarCard";
import Skills from "./Skills";
import { Arrow } from "@radix-ui/react-select";
import { config } from "@/utils/constants";

const MySkills = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='max-w-7xl container mx-auto w-full relative text-white px-3'>
				<div
					className={
						"w-32 h-[500px] bg-gradient-to-t from-blue-400/70 to-primary rotate-[30deg] absolute top-0 right-0 blur-2xl"
					}
				></div>

				<div className='md:grid md:grid-cols-12 md:grid-rows-7 gap-4 h-full w-full'>
					<div className='md:col-span-7 md:row-span-7 grid md:grid-cols-7 md:grid-rows-7 gap-3 max-md:mb-3'>
						<div className='col-span-7 row-span-3 grid md:grid-cols-7 gap-3'>
							{/* location */}
							<div className='col-span-4 rounded-lg overflow-hidden  relative border border-gray-600 p-2 bg-slate-500/20 backdrop-blur-lg max-md:h-[250px]'>
								<div className='rounded-md overflow-hidden h-full'>
									<div className='absolute top-4 left-4 z-10 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center'>
										<MapPin className='w-3 h-3 mr-1 text-emerald-400' />
										<span className='text-sm'>Location</span>
									</div>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235974.6623681058!2d91.8951175405021!3d22.462722061470426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad33a5b42ea935%3A0xcdfee774a246f04d!2sRangunia%20Upazila!5e0!3m2!1sen!2sbd!4v1747758772621!5m2!1sen!2sbd'
										width='100%'
										height='100%'
										style={{
											border: 0,
										}}
										// allowFullScreen=''
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										className='grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
									></iframe>
									<div className='absolute bottom-4 left-4 z-10 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-full'>
										<span className='text-sm'>Rangunia, Bangladesh</span>
									</div>
								</div>
							</div>

							{/* speed */}
							<div className='col-span-4 md:col-span-3 rounded-lg overflow-hidden relative border border-gray-600 p-2 bg-slate-500/20 backdrop-blur-lg max-md:h-[250px]'>
								<div className='rounded-md overflow-hidden h-full flex flex-col justify-between p-2'>
									<div className='flex items-center mb-4'>
										<Keyboard className='w-5 h-5 mr-2 text-emerald-400' />
										<span className='font-medium'>Typing speed</span>
									</div>
									<div className='flex items-end h-full relative'>
										<div className=''>
											<div className='absolute top-10 -z-1 right-0 text-[160px] font-bold leading-none text-transparent bg-clip-text from-slate-600/80 to-primary/70 bg-gradient-to-r opacity-70'>
												62
											</div>
											<span className='text-[80px] font-bold leading-none'>
												62
											</span>
										</div>
										<span className='text-2xl mb-4 ml-2'>wpm</span>
									</div>
									<div className='flex items-center space-x-4 mt-2'>
										<div className='flex items-center'>
											<Clock className='w-4 h-4 mr-1 text-gray-400' />
											<span className='text-gray-400'>60s</span>
										</div>
										<div className='flex items-center'>
											<CheckCircle2 className='w-4 h-4 mr-1 text-gray-400' />
											<span className='text-gray-400'>98%</span>
										</div>
										<div className='flex items-center'>
											<User className='w-4 h-4 mr-1 text-gray-400' />
											<span className='text-gray-400'>Type Faster</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-span-7 row-span-1 grid grid-cols-6 md:grid-cols-7 gap-3'>
							<div className='col-span-3 md:col-span-1 '>
								<a
									href={config.facebook}
									target='_blank'
									rel='noreferrer'
									className='bg-primary border_style rounded-md h-full w-full flex items-center justify-center'
								>
									<Facebook size={36} className='text-[#0866ff]' />
								</a>
							</div>
							<div className='col-span-3 md:col-span-1 '>
								<a
									href={config.linkedin}
									target='_blank'
									rel='noreferrer'
									className='bg-primary border_style rounded-md h-full w-full flex items-center justify-center'
								>
									<Linkedin size={36} className='text-[#0076b5]' />
								</a>
							</div>
							<div className='col-span-4 md:col-span-3 border_style'>
								<a
									href='#works'
									className='group bg-primary border_style rounded-md h-full w-full flex items-center gap-5 text-sm md:text-base lg:text-lg justify-center'
								>
									Discover more projects{" "}
									<ArrowRight className='w-5 lg:w-6 aspect-square group-hover:rotate-90 group-hover:w-7 group-hover:h-7 mt-1 transition-all duration-200 ease-linear' />
								</a>
							</div>
							<div className='col-span-2 md:col-span-2 '>
								<div className='gradient_text bg-primary border_style rounded-md h-full w-full flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-lg justify-center font-medium'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-sparkles-icon lucide-sparkles text-blue-200'
									>
										<path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
										<path d='M20 3v4' />
										<path d='M22 5h-4' />
										<path d='M4 17v2' />
										<path d='M5 18H3' />
									</svg>{" "}
									<span>Thinking.....</span>
								</div>
							</div>
						</div>

						{/* github map */}
						<div className='col-span-7 md:row-span-3 border_style h-full'>
							<GitHubCalendarCard />
						</div>
					</div>

					<div className='md:col-span-5 row-span-7 grid md:grid-rows-7 gap-3'>
						<div className='row-span-6 border_style'>
							<Skills />
						</div>
						<div className='row-span-1 grid grid-cols-2 gap-3'>
							<div className='border_style'>
								<div className='bg-primary border_style rounded-md h-full w-full space-y-2 flex flex-col justify-between'>
									<h6 className='text-xs md:text-sm md:ml-1'>
										Ready to Connect & Collaborate?
									</h6>
									<a
										href={config.whatsapp}
										target='_blank'
										className='w-full bg-gray-800/50 border-gray-700 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'
									>
										<FaWhatsapp size={18} />
										<span className='hidden md:block'>Connect on</span> WhatsApp
									</a>
								</div>
							</div>
							<div className='border_style'>
								<div className='bg-primary border_style rounded-md h-full w-full space-y-2 flex flex-col justify-between'>
									<h6 className='text-sm ml-1'>Ready for Impact?</h6>
									<a
										href={"/full_stack_developer.pdf"}
										target='_blank'
										rel='noopener noreferrer'
										download={"full_stack_developer.pdf"}
										className='w-full bg-gray-800/50 border-gray-700 flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'
									>
										<FaFileUpload size={18} />
										<span className='hidden md:block'>Download Resume</span>
										<span className='md:hidden'> Download CV</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;

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
} from "lucide-react";

const MySkills = () => {
	return (
		<div className='max-w-7xl container mx-auto w-full text-white'>
			<div className='grid grid-cols-12 grid-rows-7 gap-4 h-full w-full'>
				<div className='col-span-7 row-span-7 grid grid-cols-7 grid-rows-7 gap-3'>
					<div className='col-span-7 row-span-3 grid grid-cols-7 gap-3'>
						<div className='col-span-4 rounded-lg overflow-hidden  relative border border-gray-600 p-2 bg-slate-500/20 backdrop-blur-lg h-[300px] 2xl:h-[400px]'>
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
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
								></iframe>
								<div className='absolute bottom-4 left-4 z-10 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-full'>
									<span className='text-sm font-medium'>
										Rangunia, Bangladesh
									</span>
								</div>
							</div>
						</div>
						<div className='col-span-3 rounded-lg overflow-hidden relative border border-gray-600 p-2 bg-slate-500/20 backdrop-blur-lg'>
							<div className='rounded-md overflow-hidden h-full flex flex-col justify-between'>
								<div className='flex items-center mb-4'>
									<Keyboard className='w-5 h-5 mr-2 text-emerald-400' />
									<span className='font-medium'>Typing speed</span>
								</div>
								<div className='flex items-end'>
									<div className='relative'>
										<span className='text-[100px] font-bold leading-none'>
											140
										</span>
										<div className='absolute top-0 right-0 text-[100px] font-bold leading-none text-zinc-800'>
											000
										</div>
									</div>
									<span className='text-2xl mb-4 ml-2'>wpm</span>
								</div>
								<div className='flex items-center space-x-4 mt-2'>
									<div className='flex items-center'>
										<Clock className='w-4 h-4 mr-1 text-gray-400' />
										<span className='text-gray-400'>15s</span>
									</div>
									<div className='flex items-center'>
										<CheckCircle2 className='w-4 h-4 mr-1 text-gray-400' />
										<span className='text-gray-400'>100%</span>
									</div>
									<div className='flex items-center'>
										<User className='w-4 h-4 mr-1 text-gray-400' />
										<span className='text-gray-400'>ID</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-7 row-span-1 grid grid-cols-7 gap-3'>
						<div className='col-span-1 border_style'>facebook</div>
						<div className='col-span-1 border_style'>linkedin</div>
						<div className='col-span-3 border_style'>whatsapp</div>
						<div className='col-span-2 border_style'>thinking</div>
					</div>
					<div className='col-span-7 row-span-3 border_style'>map</div>
				</div>

				<div className='col-span-5 row-span-7 grid grid-rows-7 gap-3'>
					<div className='row-span-6  border_style'>skills</div>
					<div className='row-span-1  grid grid-cols-2 gap-3'>
						<div className='border_style'>Contact</div>
						<div className='border_style'>resume</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;

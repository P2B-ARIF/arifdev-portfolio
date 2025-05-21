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
		<div className='min-h-screen max-h-[900px] max-w-7xl container mx-auto w-full bg-black text-white'>
			<div className='grid grid-cols-12 grid-rows-7 gap-4 h-full w-full p-4 md:p-8 lg:p-12'>
				{/* Location Map */}
				<div className='col-span-4 row-span-3 rounded-3xl overflow-hidden bg-zinc-900 relative'>
					<div className='absolute top-4 left-4 z-10 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center'>
						<MapPin className='w-4 h-4 mr-2 text-emerald-400' />
						<span className='font-medium'>Location</span>
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
						<span className='text-sm font-medium'>Rangunia, Bangladesh</span>
					</div>
				</div>

				{/* Typing Speed */}
				<div className='col-span-3 row-span-3 rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between'>
					<div className='flex items-center mb-4'>
						<Keyboard className='w-5 h-5 mr-2 text-emerald-400' />
						<span className='font-medium'>Typing speed</span>
					</div>
					<div className='flex items-end'>
						<div className='relative'>
							<span className='text-[100px] font-bold leading-none'>140</span>
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

				{/* Skills */}
				<div className='col-span-5 row-span-6 rounded-3xl bg-zinc-900 p-6 flex flex-col'>
					<div className='inline-flex items-center px-4 py-2 bg-zinc-800 rounded-full mb-6 self-start'>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 mr-2 text-emerald-400'
						>
							<path
								d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span className='font-medium'>Tech stack</span>
					</div>

					<h3 className='text-2xl font-bold mb-6'>
						Tech stacks I'm familiar with
					</h3>

					<div className='grid grid-cols-3 gap-4 mb-8'>
						{/* Tech icons */}
						{[
							{ name: "React", bg: "bg-blue-900/20" },
							{ name: "Next.js", bg: "bg-zinc-800" },
							{ name: "TypeScript", bg: "bg-blue-800/20" },
							{ name: "Node.js", bg: "bg-green-900/20" },
							{ name: "Tailwind", bg: "bg-cyan-900/20" },
							{ name: "MongoDB", bg: "bg-green-800/20" },
							{ name: "GraphQL", bg: "bg-pink-900/20" },
							{ name: "Docker", bg: "bg-blue-900/20" },
							{ name: "AWS", bg: "bg-yellow-900/20" },
						].map((tech, index) => (
							<div
								key={index}
								className={`${tech.bg} rounded-lg p-4 flex items-center justify-center`}
							>
								<span className='font-medium'>{tech.name}</span>
							</div>
						))}
					</div>

					<h3 className='text-xl font-bold mb-4'>Skills breakdown</h3>

					{/* Skill bars */}
					{[
						{ name: "Frontend Development", percentage: 90 },
						{ name: "Backend Development", percentage: 85 },
						{ name: "UI/UX Design", percentage: 75 },
						{ name: "DevOps", percentage: 65 },
						{ name: "Mobile Development", percentage: 70 },
					].map((skill, index) => (
						<div key={index} className='mb-4'>
							<div className='flex justify-between mb-1'>
								<span className='text-sm text-gray-400'>{skill.name}</span>
								<span className='text-sm text-gray-400'>
									{skill.percentage}%
								</span>
							</div>
							<div className='w-full bg-zinc-800 h-2 rounded-full'>
								<div
									className='bg-emerald-500 h-2 rounded-full'
									style={{ width: `${skill.percentage}%` }}
								></div>
							</div>
						</div>
					))}

					<p className='text-gray-400 mt-auto'>
						Primarily focused on the JavaScript ecosystem, but always eager to
						explore and learn new technologies.
					</p>
				</div>

				{/* Social Media */}
				<div className='col-span-2 row-span-1 grid grid-cols-2 gap-3'>
					<div className='bg-zinc-900 rounded-3xl flex items-center justify-center p-4 hover:bg-zinc-800 transition-colors cursor-pointer'>
						<Facebook className='w-6 h-6 text-blue-400' />
					</div>
					<div className='bg-zinc-900 rounded-3xl flex items-center justify-center p-4 hover:bg-zinc-800 transition-colors cursor-pointer'>
						<Linkedin className='w-6 h-6 text-blue-500' />
					</div>
				</div>

				{/* WhatsApp */}
				<div className='col-span-3 row-span-1 bg-zinc-900 rounded-3xl p-4 flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mr-3'>
							<MessageSquare className='w-5 h-5 text-green-500' />
						</div>
						<div>
							<p className='font-medium'>WhatsApp</p>
							<p className='text-sm text-gray-400'>Available for chat</p>
						</div>
					</div>
					<div className='h-3 w-3 bg-green-500 rounded-full'></div>
				</div>

				{/* Thinking */}
				<div className='col-span-2 row-span-1 bg-zinc-900 rounded-3xl p-4 flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3'>
							<BrainCircuit className='w-5 h-5 text-purple-400' />
						</div>
						<span className='font-medium'>Thinking</span>
					</div>
					<div className='flex space-x-1'>
						<div className='h-2 w-2 bg-purple-500 rounded-full animate-pulse'></div>
						<div className='h-2 w-2 bg-purple-500 rounded-full animate-pulse delay-100'></div>
						<div className='h-2 w-2 bg-purple-500 rounded-full animate-pulse delay-200'></div>
					</div>
				</div>

				{/* GitHub */}
				<div className='col-span-7 row-span-3 bg-zinc-900 rounded-3xl p-6'>
					<div className='inline-flex items-center px-4 py-2 bg-zinc-800 rounded-full mb-4'>
						<Github className='w-5 h-5 mr-2 text-gray-400' />
						<span className='font-medium'>Github activity</span>
					</div>
					<div className='mb-4'>
						<h3 className='text-xl font-medium'>
							2,100 contributions in the last year
						</h3>
					</div>
					<div className='grid grid-cols-12 gap-1 mb-4'>
						{Array.from({ length: 120 }).map((_, i) => (
							<div
								key={i}
								className={`aspect-square rounded-sm ${
									Math.random() > 0.6
										? "bg-emerald-400"
										: Math.random() > 0.4
										? "bg-emerald-700"
										: "bg-zinc-800"
								}`}
							></div>
						))}
					</div>
					<div className='flex items-center justify-between'>
						<div className='w-full bg-zinc-800 h-2 rounded-full relative'>
							<div className='absolute left-0 top-0 h-full w-3/4 bg-gray-400 rounded-full'></div>
						</div>
					</div>
					<p className='text-gray-400 mt-4'>
						Last pushed on Saturday, May 17th 2025
					</p>
				</div>

				{/* Bottom Row */}
				<div className='col-span-5 row-span-1 grid grid-cols-5 gap-3'>
					<div className='col-span-3 bg-zinc-900 rounded-3xl p-4 flex items-center justify-between'>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-3'>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-5 h-5 text-blue-400'
								>
									<path
										d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<div>
								<p className='font-medium'>Contact</p>
								<p className='text-sm text-gray-400'>+880 123 456 7890</p>
							</div>
						</div>
						<div className='h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center'>
							<ArrowRight className='w-5 h-5' />
						</div>
					</div>

					<div className='col-span-2 bg-zinc-900 rounded-3xl p-4 flex items-center justify-between'>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center mr-3'>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-5 h-5 text-yellow-400'
								>
									<path
										d='M12 15V3m0 12l-4-4m4 4l4-4'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<span className='font-medium'>Resume</span>
						</div>
						<div className='h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center'>
							<ArrowRight className='w-5 h-5' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;

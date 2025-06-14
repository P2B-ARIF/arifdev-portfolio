// import Image from "next/image";
// import {
// 	ArrowRight,
// 	Clock,
// 	Github,
// 	Minus,
// 	AirplayIcon as Spotify,
// } from "lucide-react";
// import Link from "next/link";

// const MySkills = () => {
// 	return (
// 		<div className='min-h-screen  p-4 md:p-8'>
// 			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
// 				{/* Location Card */}
// 				<div className='bg-zinc-900 rounded-3xl overflow-hidden relative'>
// 					<div className='absolute top-4 left-4 z-10 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center'>
// 						<div className='w-5 h-5 mr-2 flex items-center justify-center'>
// 							<div className='w-2.5 h-2.5 bg-white rounded-full'></div>
// 						</div>
// 						<span className='font-medium'>Location</span>
// 					</div>
// 					<div className='absolute bottom-4 left-4 z-10'>
// 						<button className='bg-zinc-900/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center'>
// 							<Minus className='w-5 h-5' />
// 						</button>
// 					</div>
// 					<div className='h-[280px] w-full relative'>
// 						<Image
// 							src='/placeholder.svg?height=280&width=400'
// 							alt='Map of Jakarta with location marker'
// 							fill
// 							className='object-cover'
// 						/>
// 						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500/50 rounded-full blur-xl'></div>
// 						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-full'></div>
// 					</div>
// 				</div>

// 				{/* Featured Work Card */}
// 				<div className='bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between'>
// 					<div>
// 						<div className='inline-flex items-center px-4 py-2 bg-zinc-800 rounded-full mb-4'>
// 							<div className='w-5 h-5 mr-2'>
// 								<svg
// 									viewBox='0 0 24 24'
// 									fill='none'
// 									xmlns='http://www.w3.org/2000/svg'
// 									className='w-full h-full'
// 								>
// 									<rect
// 										x='4'
// 										y='4'
// 										width='16'
// 										height='16'
// 										rx='2'
// 										stroke='currentColor'
// 										strokeWidth='2'
// 									/>
// 									<path
// 										d='M16 2V4'
// 										stroke='currentColor'
// 										strokeWidth='2'
// 										strokeLinecap='round'
// 									/>
// 									<path
// 										d='M8 2V4'
// 										stroke='currentColor'
// 										strokeWidth='2'
// 										strokeLinecap='round'
// 									/>
// 								</svg>
// 							</div>
// 							<span className='font-medium'>Featured work</span>
// 						</div>
// 						<h2 className='text-2xl font-bold mb-2'>Bookmarked</h2>
// 						<p className='text-gray-400 mb-6'>
// 							Effortlessly save and organize your favorite tweets in Notion
// 							using a Telegram bot.
// 						</p>
// 					</div>

// 					<div className='space-y-2'>
// 						<div className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-3 flex items-start'>
// 							<div className='bg-zinc-700 rounded-lg p-2 mr-3'>
// 								<svg
// 									width='24'
// 									height='24'
// 									viewBox='0 0 24 24'
// 									fill='none'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path
// 										d='M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z'
// 										stroke='white'
// 										strokeWidth='2'
// 										strokeLinecap='round'
// 										strokeLinejoin='round'
// 									/>
// 								</svg>
// 							</div>
// 							<div className='flex-1'>
// 								<div className='flex justify-between items-start'>
// 									<div>
// 										<p className='font-medium'>Bookmarked</p>
// 										<p className='text-sm text-gray-400'>
// 											Your bookmark has been saved
// 										</p>
// 									</div>
// 									<span className='text-xs text-gray-400'>Just now</span>
// 								</div>
// 							</div>
// 						</div>

// 						<div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-3 flex items-start'>
// 							<div className='bg-zinc-700/50 rounded-lg p-2 mr-3'>
// 								<svg
// 									width='24'
// 									height='24'
// 									viewBox='0 0 24 24'
// 									fill='none'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path
// 										d='M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z'
// 										stroke='white'
// 										strokeWidth='2'
// 										strokeLinecap='round'
// 										strokeLinejoin='round'
// 									/>
// 								</svg>
// 							</div>
// 							<div className='flex-1'>
// 								<p className='text-sm text-gray-400'>Bookmarking this thread</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Typing Speed Card */}
// 				<div className='bg-zinc-900 rounded-3xl p-6'>
// 					<div className='flex items-center mb-4'>
// 						<div className='w-5 h-5 mr-2'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-full h-full'
// 							>
// 								<rect
// 									x='2'
// 									y='6'
// 									width='20'
// 									height='12'
// 									rx='2'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 								/>
// 								<path
// 									d='M6 10H8'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 								/>
// 								<path
// 									d='M11 10H13'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 								/>
// 								<path
// 									d='M16 10H18'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 								/>
// 								<path
// 									d='M7 14H17'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 								/>
// 							</svg>
// 						</div>
// 						<span className='font-medium'>Typing speed</span>
// 					</div>
// 					<div className='flex items-end'>
// 						<div className='relative'>
// 							<span className='text-[120px] font-bold leading-none'>140</span>
// 							<div className='absolute top-0 right-0 text-[120px] font-bold leading-none text-zinc-800'>
// 								000
// 							</div>
// 						</div>
// 						<span className='text-2xl mb-4 ml-2'>wpm</span>
// 					</div>
// 					<div className='flex items-center space-x-4 mt-2'>
// 						<div className='flex items-center'>
// 							<Clock className='w-4 h-4 mr-1' />
// 							<span>15s</span>
// 						</div>
// 						<div className='flex items-center'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-4 h-4 mr-1'
// 							>
// 								<path
// 									d='M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M22 4L12 14.01L9 11.01'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 							<span>100%</span>
// 						</div>
// 						<div className='flex items-center'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-4 h-4 mr-1'
// 							>
// 								<path
// 									d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 							<span>ID</span>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Discover More Projects */}
// 				<div className='bg-zinc-900 rounded-3xl p-6 flex items-center justify-between'>
// 					<h3 className='text-xl font-medium'>Discover more projects</h3>
// 					<div className='w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center'>
// 						<ArrowRight className='w-5 h-5' />
// 					</div>
// 				</div>

// 				{/* Social Links */}
// 				<div className='flex gap-4'>
// 					<Link
// 						href='#'
// 						className='bg-zinc-900 rounded-3xl flex-1 flex items-center justify-center p-6'
// 					>
// 						<svg
// 							viewBox='0 0 24 24'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 							className='w-8 h-8'
// 						>
// 							<path
// 								d='M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.38 4.49 19.03 2.56 19C2.22 19 1.88 18.98 1.54 18.96C3.44 20.15 5.7 20.83 8 20.83C16 20.83 20.33 14.25 20.33 8.58C20.33 8.39 20.33 8.2 20.32 8.01C21.16 7.41 21.88 6.66 22.46 5.8V6Z'
// 								fill='currentColor'
// 							/>
// 						</svg>
// 					</Link>
// 					<Link
// 						href='#'
// 						className='bg-zinc-900 rounded-3xl flex-1 flex items-center justify-center p-6'
// 					>
// 						<svg
// 							viewBox='0 0 24 24'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 							className='w-8 h-8'
// 						>
// 							<path
// 								d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z'
// 								fill='currentColor'
// 							/>
// 						</svg>
// 					</Link>
// 					<Link
// 						href='#'
// 						className='bg-zinc-900 rounded-3xl flex-1 flex items-center justify-center p-6'
// 					>
// 						<svg
// 							viewBox='0 0 24 24'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 							className='w-8 h-8'
// 						>
// 							<path
// 								d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM11 8H9V16H11V8ZM13 8H15V16H13V8Z'
// 								fill='currentColor'
// 							/>
// 						</svg>
// 					</Link>
// 				</div>

// 				{/* Github Activity Card */}
// 				<div className='bg-zinc-900 rounded-3xl p-6 md:col-span-2'>
// 					<div className='inline-flex items-center px-4 py-2 bg-zinc-800 rounded-full mb-4'>
// 						<Github className='w-5 h-5 mr-2' />
// 						<span className='font-medium'>Github activity</span>
// 					</div>
// 					<div className='mb-4'>
// 						<h3 className='text-xl font-medium'>
// 							2,100 contributions in the last year
// 						</h3>
// 					</div>
// 					<div className='grid grid-cols-12 gap-1 mb-4'>
// 						{Array.from({ length: 120 }).map((_, i) => (
// 							<div
// 								key={i}
// 								className={`aspect-square rounded-sm ${
// 									Math.random() > 0.6
// 										? "bg-emerald-400"
// 										: Math.random() > 0.4
// 										? "bg-emerald-700"
// 										: "bg-zinc-800"
// 								}`}
// 							></div>
// 						))}
// 					</div>
// 					<div className='flex items-center justify-between'>
// 						<div className='w-full bg-zinc-800 h-2 rounded-full relative'>
// 							<div className='absolute left-0 top-0 h-full w-3/4 bg-gray-400 rounded-full'></div>
// 						</div>
// 					</div>
// 					<p className='text-gray-400 mt-4'>
// 						Last pushed on Saturday, May 17th 2025
// 					</p>
// 				</div>

// 				{/* Tech Stack Card */}
// 				<div className='bg-zinc-900 rounded-3xl p-6'>
// 					<div className='inline-flex items-center px-4 py-2 bg-zinc-800 rounded-full mb-6'>
// 						<svg
// 							viewBox='0 0 24 24'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 							className='w-5 h-5 mr-2'
// 						>
// 							<path
// 								d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
// 								stroke='currentColor'
// 								strokeWidth='2'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 							/>
// 							<path
// 								d='M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z'
// 								stroke='currentColor'
// 								strokeWidth='2'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 							/>
// 						</svg>
// 						<span className='font-medium'>Tech stack</span>
// 					</div>
// 					<div className='grid grid-cols-3 gap-4 mb-6'>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-10 h-10 text-gray-400'
// 							>
// 								<path
// 									d='M3 3L21 21'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M21 3L3 21'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-10 h-10 text-gray-400'
// 							>
// 								<path
// 									d='M12 2L2 7L12 12L22 7L12 2Z'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M2 17L12 22L22 17'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M2 12L12 17L22 12'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-10 h-10 text-gray-400'
// 							>
// 								<path
// 									d='M21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M3 9H21'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M9 20V9'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<div className='w-10 h-10 flex items-center justify-center text-gray-400 font-bold text-xl'>
// 								TS
// 							</div>
// 						</div>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<div className='w-10 h-10 flex items-center justify-center text-gray-400 font-bold text-xl'>
// 								N
// 							</div>
// 						</div>
// 						<div className='flex items-center justify-center bg-zinc-800 rounded-lg p-4'>
// 							<svg
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='w-10 h-10 text-gray-400'
// 							>
// 								<circle
// 									cx='12'
// 									cy='12'
// 									r='10'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<circle
// 									cx='12'
// 									cy='12'
// 									r='4'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 								<path
// 									d='M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11'
// 									stroke='currentColor'
// 									strokeWidth='2'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 					</div>
// 					<h3 className='text-xl font-bold mb-2'>
// 						Tech stacks I'm familiar with
// 					</h3>
// 					<p className='text-gray-400'>
// 						Primarily focused on the JavaScript ecosystem, but always eager to
// 						explore and learn new technologies.
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default MySkills;

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import thumb from "@/assets/images/image3.jpg";

export default function BlogSection() {
	return (
		<div className='py-16 px-4 md:px-8 lg:px-16 mt-10'>
			<div className='max-w-6xl mx-auto'>
				{/* Blog Label */}
				<div className='inline-flex items-center px-3 py-1 rounded-full bg-emerald-900 text-emerald-400 mb-6'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='mr-2'
					>
						<path d='M12 20h9' />
						<path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
					</svg>
					<span className='text-sm font-medium'>Blog</span>
				</div>

				{/* Header Section */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
					<div>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Learning, Building, and
							<br />
							Documenting
						</h2>
						<p className='text-gray-400 max-w-2xl'>
							Insights and experiences from my journey as a developer—exploring
							ideas, overcoming challenges, and sharing lessons learned along
							the way.
						</p>
					</div>
					<Link
						href='/blog'
						className='mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors'
					>
						View all articles
						<ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>

				{/* Blog Posts */}
				<div className='space-y-12'>
					{/* Blog Post 1 */}
					<div className='flex flex-col md:flex-row gap-6'>
						<div className='md:w-1/3 lg:w-1/4'>
							<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
								<Image
									src={thumb}
									alt='Exit sign with arrow'
									fill
									className='object-cover'
									priority
								/>
							</div>
						</div>
						<div className='md:w-2/3 lg:w-3/4'>
							<div className='flex items-center text-sm text-gray-400 mb-2'>
								<span>December 15, 2024</span>
								<span className='mx-2'>•</span>
								<span>5 min read</span>
							</div>
							<h3 className='text-xl md:text-2xl font-bold mb-2'>
								<Link
									href='/blog/hacky-way-to-customize-shadcns-tooltip-arrows'
									className='hover:text-gray-300 transition-colors'
								>
									Hacky Way to Customize Shadcn's Tooltip Arrows
								</Link>
							</h3>
							<p className='text-gray-400 mb-4'>
								A workaround for displaying a custom SVG arrow in shadcn's
								tooltip.
							</p>
							<div className='flex items-center justify-between'>
								<Link
									href='/blog/hacky-way-to-customize-shadcns-tooltip-arrows'
									className='inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
								>
									Read more
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
								<div className='flex gap-2'>
									<span className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'>
										react
									</span>
									<span className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'>
										css
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Blog Post 2 */}
					<div className='flex flex-col md:flex-row gap-6'>
						<div className='md:w-1/3 lg:w-1/4'>
							<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
								<Image
									src={thumb}
									alt='Starfish in clear water'
									fill
									className='object-cover'
								/>
							</div>
						</div>
						<div className='md:w-2/3 lg:w-3/4'>
							<div className='flex items-center text-sm text-gray-400 mb-2'>
								<span>December 12, 2024</span>
								<span className='mx-2'>•</span>
								<span>3 min read</span>
							</div>
							<h3 className='text-xl md:text-2xl font-bold mb-2'>
								<Link
									href='/blog/setting-dynamic-default-values-with-zod-schema'
									className='hover:text-gray-300 transition-colors'
								>
									Setting Dynamic Default Values with Zod Schema
								</Link>
							</h3>
							<p className='text-gray-400 mb-4'>
								Leverage Zod's powerful features to set dynamic default values
								and enhance data validation with flexibility and ease.
							</p>
							<div className='flex items-center justify-between'>
								<Link
									href='/blog/setting-dynamic-default-values-with-zod-schema'
									className='inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
								>
									Read more
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
								<div className='flex gap-2'>
									<span className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'>
										zod
									</span>
									<span className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'>
										typescript
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Blog Post 3 */}
					<div className='flex flex-col md:flex-row gap-6'>
						<div className='md:w-1/3 lg:w-1/4'>
							<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
								<Image
									src={thumb}
									alt='Person taking photos by a lake'
									fill
									className='object-cover'
								/>
							</div>
						</div>
						<div className='md:w-2/3 lg:w-3/4'>
							<div className='flex items-center text-sm text-gray-400 mb-2'>
								<span>January 3, 2025</span>
								<span className='mx-2'>•</span>
								<span>4 min read</span>
							</div>
							<h3 className='text-xl md:text-2xl font-bold mb-2'>
								<Link
									href='/blog/level-up-obs-recordings-with-zoom-to-mouse'
									className='hover:text-gray-300 transition-colors'
								>
									Level Up OBS Recordings with Zoom-to-Mouse
								</Link>
							</h3>
							<p className='text-gray-400 mb-4'>
								Enhance your recordings and presentations with dynamic zoom
								effects.
							</p>
							<div className='flex items-center justify-between'>
								<Link
									href='/blog/level-up-obs-recordings-with-zoom-to-mouse'
									className='inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
								>
									Read more
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
								<div className='flex gap-2'>
									<span className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'>
										other
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

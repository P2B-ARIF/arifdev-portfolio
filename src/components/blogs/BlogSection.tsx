import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import thumb from "@/assets/images/image3.jpg";
import { newBlogPosts } from "@/app/(frontend)/blogs/page";
import { format } from "date-fns";

export default function BlogSection() {
	return (
		<div className='py-16 px-4 md:px-8 lg:px-16 mt-10'>
			<div className='max-w-6xl mx-auto'>
				{/* Blog Label */}
				<div className='w-fit self-center-safe flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
					<Sparkles className='w-4 h-4 mr-2' />
					<span className='text-sm font-medium tracking-wide'>Blog</span>
				</div>

				{/* Header Section */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12 mt-5 max-md:w-[90%]'>
					<div>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary/50 pb-2'>
							Learning, Building, and
							<br />
							Documenting
						</h2>
						<p className='text-gray-400 max-w-2xl '>
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
					{newBlogPosts?.slice(0, 3).map((post, idx) => {
						return (
							<div key={idx} className='flex flex-col md:flex-row gap-6'>
								<div className='md:w-1/3 lg:w-1/4'>
									<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
										<Image
											src={post.img}
											alt='Exit sign with arrow'
											fill
											className='object-cover'
											priority
										/>
									</div>
								</div>
								<div className='md:w-2/3 lg:w-3/4'>
									<div className='flex items-center text-sm text-gray-400 mb-2'>
										<span>
											{format(new Date(post.createdAt), "MMMM dd, yyyy")}
										</span>
										{/* <span>December 15, 2024</span> */}
										<span className='mx-2'>•</span>
										<span>{post.readTime} read</span>
									</div>
									<h3 className='text-xl md:text-2xl font-bold mb-2'>
										<Link
											href={`/blogs/${post?.slug}`}
											className='hover:text-gray-300 transition-colors'
										>
											{post?.title}
										</Link>
									</h3>
									<p className='text-gray-400 mb-4'>{post?.metaDescription}</p>
									<div className='flex items-center justify-between'>
										<Link
											href={`/blogs/${post?.slug}`}
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
						);
					})}

					{/* Blog Post 2 */}
					{/* <div className='flex flex-col md:flex-row gap-6'>
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
					</div> */}

					{/* Blog Post 3 */}
					{/* <div className='flex flex-col md:flex-row gap-6'>
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
					</div> */}
				</div>
			</div>
		</div>
	);
}

import React from "react";
import demo from "@/assets/images/image1.jpg";
import thumb from "@/assets/images/image1.jpg";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Mail, Tag } from "lucide-react";
import Image from "next/image";
import BlogCard from "@/components/blogs/BlogCard";
import HorizontalBlogCard from "@/components/blogs/HorizantalBlogCard";

const blogPosts2 = [
	{
		id: 1,
		title: "Hacky Way to Customize Shadcn's Tooltip Arrows",
		excerpt:
			"A workaround for displaying a custom SVG arrow in shadcn's tooltip component with detailed implementation.",
		date: "December 15, 2024",
		readTime: "5 min read",
		slug: "/blogs/hacky-way-to-customize-shadcns-tooltip-arrows",
		tags: ["react", "css", "shadcn"],
		image: "/placeholder.svg?height=300&width=400",
		featured: true,
	},
	{
		id: 2,
		title: "Setting Dynamic Default Values with Zod Schema",
		excerpt:
			"Leverage Zod's powerful features to set dynamic default values and enhance data validation with flexibility and ease.",
		date: "December 12, 2024",
		readTime: "3 min read",
		slug: "/blogs/setting-dynamic-default-values-with-zod-schema",
		tags: ["zod", "typescript", "validation"],
		image: "/placeholder.svg?height=300&width=400",
		featured: false,
	},
	{
		id: 3,
		title: "Level Up OBS Recordings with Zoom-to-Mouse",
		excerpt:
			"Enhance your recordings and presentations with dynamic zoom effects that follow your mouse cursor.",
		date: "January 3, 2025",
		readTime: "4 min read",
		slug: "/blogs/level-up-obs-recordings-with-zoom-to-mouse",
		tags: ["obs", "recording", "productivity"],
		image: "/placeholder.svg?height=300&width=400",
		featured: false,
	},
	{
		id: 4,
		title: "Building Scalable React Applications",
		excerpt:
			"Best practices and patterns for building large-scale React applications that are maintainable and performant.",
		date: "November 28, 2024",
		readTime: "8 min read",
		slug: "/blogs/building-scalable-react-applications",
		tags: ["react", "architecture", "best-practices"],
		image: "/placeholder.svg?height=300&width=400",
		featured: false,
	},
	{
		id: 5,
		title: "Next.js 15: What's New and Exciting",
		excerpt:
			"Exploring the latest features and improvements in Next.js 15, including performance enhancements and new APIs.",
		date: "November 20, 2024",
		readTime: "6 min read",
		slug: "/blogs/nextjs-15-whats-new",
		tags: ["nextjs", "javascript", "web-development"],
		image: "/placeholder.svg?height=300&width=400",
		featured: true,
	},
];

const allTags = [
	"react",
	"nextjs",
	"typescript",
	"javascript",
	"css",
	"tailwind",
	"shadcn",
	"zod",
	"validation",
	"architecture",
	"best-practices",
	"obs",
	"recording",
	"productivity",
	"web-development",
];

const blogPosts = [
	{
		id: 1,
		featured: true,
		title: "Hacky Way to Customize Shadcn's Tooltip Arrows",
		slug: "/blogs/hacky-way-to-customize-shadcns-tooltip-arrows",
		date: "December 15, 2024",
		readTime: "5 min read",
		excerpt:
			"A workaround for displaying a custom SVG arrow in shadcn's tooltip.",
		tags: ["react", "css"],
		thumbnail: "thumb",
	},
	{
		id: 2,
		featured: false,
		title: "Setting Dynamic Default Values with Zod Schema",
		slug: "/blogs/setting-dynamic-default-values-with-zod-schema",
		date: "December 12, 2024",
		readTime: "3 min read",
		excerpt:
			"Leverage Zod's powerful features to set dynamic default values and enhance data validation with flexibility and ease.",
		tags: ["zod", "typescript"],
		thumbnail: "thumb",
	},
	{
		id: 3,
		featured: false,
		title: "Level Up OBS Recordings with Zoom-to-Mouse",
		slug: "/blogs/level-up-obs-recordings-with-zoom-to-mouse",
		date: "January 3, 2025",
		readTime: "4 min read",
		excerpt:
			"Enhance your recordings and presentations with dynamic zoom effects.",
		tags: ["other"],
		thumbnail: "thumb",
	},
	{
		id: 4,
		featured: true,
		title: "Making Headless UI Popovers Smarter with React State",
		slug: "/blogs/smarter-headless-ui-popovers-react-state",
		date: "January 10, 2025",
		readTime: "6 min read",
		excerpt:
			"Combine Headless UI and state management to create intelligent, responsive popovers for modern interfaces.",
		tags: ["react", "headlessui", "ux"],
		thumbnail: "thumb",
	},
];

const page = () => {
	const featuredPosts = blogPosts2.filter(post => post.featured);
	// const regularPosts = blogPosts.filter(post => !post.featured);

	return (
		<section className='min-h-screen pt-32'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-12 gap-5 relative'>
					{/* 1st column */}
					<div className='col-span-7 grid grid-rows-12 gap-5'>
						<div
							style={{
								backgroundImage: `url(${demo.src})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
							className='row-span-8 rounded-lg overflow-hidden flex items-end p-5 bg-gradient-to-t from-primary/30 to-transparent relative  border border-gray-600'
						>
							<div className='bg-gradient-to-t from-primary/30 to-transparent bg-primary/20 absolute bottom-0 left-0  w-full h-full from-20%'></div>
							<div className='relative'>
								<h1>Lorem ipsum dolor sit amet.</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
									adipisci delectus cum voluptatem quidem deleniti atque? Quasi
									odio exercitationem ratione!
								</p>
								<Link href=''>Read More</Link>
							</div>
						</div>
						<div className='row-span-4 rounded-lg overflow-hidden  grid grid-cols-3 border border-gray-600'>
							<div>
								<img src={demo.src} alt='' className='w-full h-full' />
							</div>
							<div className='col-span-2 p-3'>
								<div className='flex items-center text-gray-400 text-xs'>
									<span>December 15, 2024</span>
									<span className='mx-2'>•</span>
									<span>5 min read</span>
								</div>
								<h3 className='font-medium'>
									<Link
										href='/blogs/hacky-way-to-customize-shadcns-tooltip-arrows'
										className='hover:text-gray-800 transition-colors'
									>
										Hacky Way to Customize Shadcn's Tooltip Arrows
									</Link>
								</h3>
								<p className='text-gray-400 mb-1 text-sm'>
									A workaround for displaying a custom SVG arrow in shadcn's
									tooltip.
								</p>
								<div className='flex items-center justify-between'>
									<Link
										href='/blogs/hacky-way-to-customize-shadcns-tooltip-arrows'
										className='inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm transition-colors'
									>
										Read more
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className='col-span-5 grid grid-cols-1 gap-5'>
						{[1, 2, 3].map(item => (
							<div
								key={item}
								className='col-span-1 border-gray-600 border rounded-lg overflow-hidden'
							>
								<div className='flex flex-col md:flex-row '>
									{/* Image Section */}
									<div className='md:w-1/3 lg:w-1/4'>
										<div className='relative md:h-full'>
											<Image
												src={demo.src}
												alt={"item.title"}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full'
											/>
										</div>
									</div>
									<div className='md:w-2/3 lg:w-3/4 p-3'>
										<div className='flex items-center text-gray-400 text-xs'>
											<span>December 15, 2024</span>
											<span className='mx-2'>•</span>
											<span>5 min read</span>
										</div>
										<h3 className='font-medium'>
											<Link
												href='/blogs/hacky-way-to-customize-shadcns-tooltip-arrows'
												className='hover:text-gray-800 transition-colors'
											>
												Hacky Way to Customize Shadcn's Tooltip Arrows
											</Link>
										</h3>
										<p className='text-gray-400 mb-1 text-sm'>
											A workaround for displaying a custom SVG arrow in shadcn's
											tooltip.
										</p>
										<div className='flex items-center justify-between'>
											<Link
												href='/blogs/hacky-way-to-customize-shadcns-tooltip-arrows'
												className='inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm transition-colors'
											>
												Read more
												<ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
						{/* <div className='col-span-1 bg-gray-800 border'>2</div>
						<div className='col-span-1 bg-gray-300 border'>3</div>
						<div className='col-span-1 bg-gray-300 border'>4</div> */}
					</div>
					{/* 2nd column */}
				</div>

				<div className='mt-20'>
					<div className='inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
						<Tag className='w-4 h-4 mr-2' />
						<span className='text-sm font-medium'>Blog & Articles</span>
					</div>

					<p className='text-lg my-5 mb-10 max-w-lg text-gray-400 leading-relaxed'>
						Thoughts, tutorials, and insights about web development, design, and
						technology. Stay updated with the latest trends and best practices.
					</p>

					{/* <div className='flex items-center gap-3'>
						{[...Array(5)].map((_, index) => (
							<div
								key={index}
								className='inline-flex items-center px-4 py-1 rounded-full bg-emerald-900 text-emerald-400 mb-6'
							>
								<span className='text-sm font-medium'>Blog</span>
							</div>
						))}
					</div> */}

					<div className='grid grid-cols-7 gap-10'>
						{/* Blog Posts */}
						{/* <HorizontalBlogCard post={blogPosts[0]} thumb={thumb}  /> */}

						<div className='col-span-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-5 gap-8'>
							{blogPosts2.map((post, idx) => (
								<BlogCard key={idx} post={post} />
							))}
						</div>

						{/* side bar */}
						<div className='col-span-2 space-y-5'>
							{/* Tags */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Popular Tags
								</h3>
								<div className='flex flex-wrap gap-2'>
									{allTags.map(tag => (
										<span
											key={tag}
											className='bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs px-2 py-1  transition-colors cursor-pointer rounded-md'
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Stats */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Blog Stats
								</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>
											Total Articles
										</span>
										<span className='text-white font-semibold'>
											{blogPosts.length}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>Categories</span>
										<span className='text-white font-semibold'>
											{allTags.length}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>Featured</span>
										<span className='text-white font-semibold'>
											{featuredPosts.length}
										</span>
									</div>
								</div>
							</div>

							{/* Newsletter */}
							<div className='bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-2 text-white'>
									Stay Updated
								</h3>
								<p className='text-gray-400 text-sm mb-4'>
									Get notified when I publish new articles and tutorials.
								</p>
								<div className='space-y-3'>
									<input
										type='email'
										placeholder='Enter your email'
										className='w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder:text-gray-500'
									/>
									<button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center'>
										<Mail className='w-4 h-4 mr-2' />
										Subscribe
									</button>
								</div>
							</div>

							{/* Recent Posts */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Recent Posts
								</h3>
								<div className='space-y-4'>
									{blogPosts.slice(0, 3).map(post => (
										<div key={post.id} className='group'>
											<Link href={post.slug} className='block'>
												<h4 className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 mb-1'>
													{post.title}
												</h4>
												<p className='text-xs text-gray-500'>{post.date}</p>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;

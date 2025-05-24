import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalBlogCard = ({ post, thumb, index }) => {
	return (
		<div className='flex flex-col md:flex-row gap-6'>
			<div className='md:w-1/3 lg:w-1/4'>
				<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
					<Image
						src={thumb.src}
						alt={post.title}
						fill
						className='object-cover'
					/>
				</div>
			</div>
			<div className='md:w-2/3 lg:w-3/4'>
				<div className='flex items-center text-sm text-gray-400 mb-2'>
					<span>{post.date}</span>
					<span className='mx-2'>•</span>
					<span>{post.readTime}</span>
				</div>
				<h3 className='text-xl md:text-2xl font-bold mb-2'>
					<Link
						href={post.slug}
						className='hover:text-gray-300 transition-colors'
					>
						{post.title}
					</Link>
				</h3>
				<p className='text-gray-400 mb-4'>{post.excerpt}</p>
				<div className='flex items-center justify-between'>
					<Link
						href={post.slug}
						className='inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors'
					>
						Read more
						<ArrowRight className='ml-2 h-4 w-4' />
					</Link>
					<div className='flex gap-2'>
						{post.tags.map((tag, i) => (
							<span
								key={i}
								className='px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalBlogCard;

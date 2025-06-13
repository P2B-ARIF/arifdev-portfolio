import Image from "next/image";
import demo from "@/assets/images/image1.jpg";
import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ post }: any) => {
	return (
		<div className='bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden group hover:border-gray-600 transition-all duration-300'>
			<div className='relative aspect-[16/10] overflow-hidden'>
				<Image
					src={post?.img}
					alt={post.title}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-300'
				/>
				<div className='absolute top-4 left-4'>
					<span className='bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded'>
						Featured
					</span>
				</div>
			</div>
			<div className='p-6'>
				<div className='flex items-center text-sm text-gray-400 mb-3'>
					<Calendar className='w-4 h-4 mr-1' />
					<span>{format(new Date(post.createdAt), "MMMM dd, yyyy")}</span>
					<span className='mx-2'>•</span>
					<Clock className='w-4 h-4 mr-1' />
					<span>{post.readTime}</span>
				</div>

				<h3 className='text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors'>
					<Link href={`/blogs/${post?.slug}`} className='hover:text-gray-200'>
						{post.title}
					</Link>
				</h3>

				<p className='text-gray-400 mb-4 line-clamp-2'>{post.excerpt}</p>

				<div className='flex items-center justify-between'>
					<Link
						href={`/blogs/${post?.slug}`}
						className='inline-flex items-center text-blue-400 hover:text-blue-300 text-xs md:text-sm transition-colors font-medium'
					>
						Read more
						<ArrowRight className='ml-2 h-4 w-4' />
					</Link>
					<div className='flex gap-2'>
						{post.keywords.slice(0, 2).map((tag: any, i: number) => (
							<span
								key={i}
								className='bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs px-2 py-1 rounded transition-colors cursor-pointer'
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

export default BlogCard;

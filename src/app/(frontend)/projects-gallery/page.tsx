"use client";

import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import { useResponsiveColumns } from "@/hook/use-responsive-columns";
import { Sparkles } from "lucide-react";

const defaultImages: ImageProps[] = [
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
		alt: "Gallery image 1",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
		alt: "Gallery image 2",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
		alt: "Gallery image 3",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
		alt: "Gallery image 4",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
		alt: "Gallery image 5",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
		alt: "Gallery image 6",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
		alt: "Gallery image 7",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
		alt: "Gallery image 8",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
		alt: "Gallery image 9",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
		alt: "Gallery image 10",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
		alt: "Gallery image 11",
	},
	{
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
		alt: "Gallery image 12",
	},
];

interface ImageProps {
	src: string;
	alt: string;
}
interface GalleryProps {
	images?: ImageProps[];
	gap?: number; // Gap size in pixels
	defaultColumns?: number;
}

const GalleryPage: React.FC<GalleryProps> = ({
	images = defaultImages,
	gap = 16,
	defaultColumns = 3,
}: GalleryProps) => {
	const columnCount = useResponsiveColumns(defaultColumns);

	const createBalancedColumns = (
		images: ImageProps[],
		count: number,
	): ImageProps[][] => {
		const columns: ImageProps[][] = Array.from({ length: count }, () => []);

		images.forEach((image: ImageProps, index: number) => {
			const columnIndex = index % count;
			columns[columnIndex].push(image);
		});

		return columns;
	};

	const columns: ImageProps[][] = createBalancedColumns(images, columnCount);

	const responsiveGap =
		typeof window !== "undefined" && window.innerWidth < 640
			? Math.max(8, gap / 2)
			: gap;

	return (
		<div className='container mx-auto px-4 py-20 pt-32'>
			<div className='flex flex-col gap-5 max-w-xl mx-auto text-center mb-16'>
				<div className='w-fit self-center-safe flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
					<Sparkles className='w-4 h-4 mr-2' />
					<span className='text-sm font-medium tracking-wide'>
						Our Work Gallery
					</span>
				</div>

				<h1 className='text-xl md:text-5xl font-semibold leading-[1.2] sm:leading-9 md:leading-[46px] 2xl:leading-[55px] font-secondary text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary/50 '>
					Explore My Crafted Code & Creative Builds
				</h1>

				<p className='text-xs md:text-base text-gray-400 font-secondary leading-tight'>
					Dive into a curated collection of real-world web applications and
					digital solutions I’ve built from the ground up. From sleek UIs to
					robust backends, each project reflects my passion for clean code,
					performance, and user experience. Get inspired by what’s possible with
					full-stack development.
				</p>
			</div>

			<div
				className='grid w-full'
				style={{
					gap: `${responsiveGap}px`,
					gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
				}}
			>
				{columns.map((column: ImageProps[], columnIndex) => (
					<div
						key={`column-${columnIndex}`}
						className='flex flex-col'
						style={{ gap: `${responsiveGap}px` }}
					>
						{column.map((image, imageIndex) => (
							<div
								key={`image-${columnIndex}-${imageIndex}`}
								className='w-full overflow-hidden rounded-lg'
							>
								<img
									className='h-auto w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105'
									src={image.src || "/placeholder.svg"}
									alt={image.alt}
									loading='lazy'
									sizes={`(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw`}
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default GalleryPage;

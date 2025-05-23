"use client";

import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import { useResponsiveColumns } from "@/hook/use-responsive-columns";

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
		<div className='container mx-auto px-4 py-20'>
			<div className='flex flex-col gap-5 max-w-xl mx-auto text-center mb-16'>
				<h3 className='text-primary tracking-widest uppercase'>Our Work</h3>
				<h1 className='text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-secondary font-semibold text-secondary leading-tight max-sm:w-[80%]'>
					Discover the Beauty We’ve Created
				</h1>
				<p className='text-xs md:text-base text-secondary font-secondary leading-tight'>
					Browse through our gallery of completed landscaping and home
					improvement projects. Each image tells a story of transformation,
					creativity, and quality craftsmanship. Let these visuals inspire your
					next project.
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

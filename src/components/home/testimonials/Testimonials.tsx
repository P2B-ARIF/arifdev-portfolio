"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import thumb from "@/assets/images/image3.jpg";

type Testimonial = {
	quote: string;
	name: string;
	title: string;
	company: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		quote: "Spellbook probably helps me bill an extra hour a day. Maybe more.",
		name: "Todd Strang",
		title: "Partner",
		company: "KMSC Law LLP",
		image: thumb,
	},
	{
		quote:
			"This tool has completely transformed how our legal team drafts documents.",
		name: "Sarah Johnson",
		title: "Legal Director",
		company: "Apex Partners",
		image: thumb,
	},
	{
		quote:
			"The time savings are incredible. What used to take hours now takes minutes.",
		name: "Michael Chen",
		title: "Associate",
		company: "Global Legal Solutions",
		image: thumb,
	},
	{
		quote:
			"Our clients have noticed the improvement in turnaround time since we started using Spellbook.",
		name: "Rachel Williams",
		title: "Senior Counsel",
		company: "Westfield & Associates",
		image: thumb,
	},
];

export default function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		skipSnaps: false,
	});
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi],
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi],
	);
	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi],
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, setScrollSnaps, onSelect]);

	return (
		<section className=' text-white py-24 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12 max-w-xl mx-auto'>
					<p className='text-3xl font-bold mb-4'>
						No More Frustration –{" "}
						<span className='text-highlight'>Just Smiles</span>
					</p>
					<h2 className='text-lg mb-6'>
						Don’t just take our word for it – here’s how our work made a
						difference for those we’ve partnered with.
					</h2>
				</div>
				<div className='relative'>
					<div className='overflow-hidden' ref={emblaRef}>
						<div className='flex'>
							{testimonials.map((testimonial, index) => (
								<div key={index} className='flex-[0_0_100%] min-w-0'>
									<div className='text-center px-4'>
										<blockquote className='mb-12'>
											<p className='text-4xl md:text-5xl font-serif leading-tight'>
												"{testimonial.quote}"
											</p>
										</blockquote>

										<div className='flex flex-col items-center'>
											<div className='w-16 h-16 rounded-full overflow-hidden mb-4'>
												<Image
													src={testimonial.image || "/placeholder.svg"}
													alt={testimonial.name}
													width={64}
													height={64}
													className='object-cover'
												/>
											</div>
											<div className='mb-8'>
												<p className='font-medium'>
													{testimonial.name},{" "}
													<span className='text-gray-400'>
														{testimonial.title}, {testimonial.company}
													</span>
												</p>
											</div>
											<Link
												href='#'
												className='inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors'
											>
												Read {testimonial.company.split(" ")[0]}'s Story
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-zinc-800 hover:bg-zinc-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center focus:outline-none text-highlight'
						onClick={scrollPrev}
						aria-label='Previous testimonial'
					>
						<ChevronLeft className='w-6 h-6' />
					</button>
					<button
						className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-zinc-800 hover:bg-zinc-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center focus:outline-none text-highlight'
						onClick={scrollNext}
						aria-label='Next testimonial'
					>
						<ChevronRight className='w-6 h-6' />
					</button>
				</div>

				{/* Dots */}
				<div className='flex justify-center gap-2 mt-8'>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							className={`w-2.5 h-2.5 rounded-full transition-colors ${
								index === selectedIndex
									? "bg-white"
									: "bg-zinc-700 hover:bg-zinc-600"
							}`}
							onClick={() => scrollTo(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

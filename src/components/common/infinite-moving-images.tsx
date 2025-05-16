"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
	items: {
		src: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}

export const InfiniteMovingImages = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse",
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "120s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "140s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "180s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items?.map((item, idx) => {
					return (
						<li
							className='relative md:w-[350px] max-w-full shrink-0 rounded-xl border border-zinc-500 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] w-[250px] overflow-hidden'
							key={"item.name" + idx}
						>
							<blockquote>
								<div
									aria-hidden='true'
									className='user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
								></div>

								<div className='relative z-20 h-60 w-full'>
									<Image
										width={1000}
										height={1000}
										src={item.src}
										alt={"image" + idx}
										className='h-full w-full object-cover'
									/>
								</div>
							</blockquote>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

{
	/* <span className='relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100'>
								{item.quote}
							</span>
							<div className='relative z-20 mt-6 flex flex-row items-center'>
								<span className='flex flex-col gap-1'>
									<span className='text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400'>
										{item.name}
									</span>
									<span className='text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400'>
										{item.title}
									</span>
								</span>
							</div> */
}

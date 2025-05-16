import Image from "next/image";
import React from "react";
import sideImage from "@/assets/images/man-with-laptop.avif";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import noise from "@/assets/elements/noise-overlay.351e13a3.png";

const CallToAction = () => {
	return (
		<section>
			<div
				// style={{
				// 	backgroundImage: `url(${noise.src})`,
				// 	backgroundSize: "cover",
				// 	backgroundRepeat: "no-repeat",
				// 	backgroundPosition: "center",
				// }}
				className='py-32'
			>
				<div className='p-10 rounded-3xl overflow-hidden border grid grid-cols-[2.5fr_0.5fr_1.5fr] max-w-4xl mx-auto box_gradient'>
					<div className='space-y-7'>
						<div className='flex-shrink-0 inline-flex border border-gray-800 overflow-hidden rounded-full'>
							<div className='bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100% rounded-full'>
								<div className='flex items-center gap-2 text-sm p-2 px-3 bg-dark rounded-full'>
									<div className='w-2 h-2 rounded-full bg-green-500  relative'>
										<div className='animate-ping absolute inset-0 w-2 h-2 rounded-full bg-green-500'></div>
									</div>

									<span>Available For Work</span>
								</div>
							</div>
						</div>
						<h1 className='text-5xl font-bold'>
							Book a call, and I'll take care of the rest
						</h1>

						<Link
							href='/contact'
							className='bg-gray-800/50 border-gray-700 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-800 text-center border justify-center'
						>
							Let's Discuss Your Idea
							<CalendarDays size={18} />
						</Link>
						<div>
							mohammadarif4319@gmail.com
							<button className='ml-5 bg-dark py-1 px-3 text-sm rounded-full'>
								Copy
							</button>
						</div>
					</div>
					<div></div>
					<div className='w-full h-full'>
						<Image
							width={1500}
							height={1500}
							src={sideImage}
							alt=''
							className='w-full h-full object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;

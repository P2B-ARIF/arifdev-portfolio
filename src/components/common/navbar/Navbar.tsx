"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Home, User, LayoutGrid, FileText, Handshake } from "lucide-react";

const navLinks = [
	{ id: 1, href: "/", label: "Home", icon: Home },
	{ id: 2, href: "/about-me", label: "About Me", icon: User },
	{ id: 4, href: "/works", label: "Works", icon: LayoutGrid },
	{
		id: 3,
		href: "/projects-gallery",
		label: "Projects Gallery",
		icon: FileText,
	},
	{ id: 5, href: "/blogs", label: "Blogs", icon: Handshake },
	// { id: 5, href: "/contact", label: "Contact" },
];

const Navbar = () => {
	const [isScroll, setIsScroll] = useState(false);
	const [hide, setHide] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const pathname = usePathname();

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", latest => {
		const previous: any = scrollY.getPrevious();
		setIsScroll(latest > 200);
		setHide(latest > previous);
		setScrollPosition(latest);
	});

	return (
		<div className=''>
			<div
				className={`${
					hide
						? "translate-y-[-100px]"
						: isScroll
						? "-translate-y-[100px] bg-primary/80 backdrop-blur-lg border-b border-secondary/80 shadow-lg"
						: ""
				} absolute top-0 left-0 w-full z-50 transition-all duration-300 ease-linear max-md:hidden `}
			>
				<div className='flex items-center justify-between container mx-auto py-8 2xl:py-10'>
					<Link href='/' className='font-semibold uppercase text-2xl'>
						<Image
							src='/logo.png'
							alt='logo'
							className='w-[40px] md:w-[50px] aspect-square object-contain'
							width={50}
							height={50}
						/>
					</Link>
					<div className='flex items-center gap-5 perspective-normal'>
						<div className='flex items-center gap-10'>
							{navLinks?.map((list, idx) => (
								<Link key={idx} href={list.href}>
									{list.label}
								</Link>
							))}
						</div>

						<div className='ml-10 relative rounded-lg bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border from-80% via-90% to-100%'>
							<div className='absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700 rounded-lg blur-md filter group-hover:opacity-100 group-hover:duration-200 animate-rotate-border'></div>
							<Link
								href='/contact'
								className='relative flex items-center gap-2 px-4 py-2 bg-dark text-accent rounded-lg'
							>
								Get In Touch
								<svg
									aria-hidden='true'
									viewBox='0 0 10 10'
									height='10'
									width='10'
									fill='none'
									className='mt-0.5 hover:ml-2 transition-all duration-300 ease-linear -mr-1 stroke-white stroke-2 '
								>
									<path
										d='M0 5h7'
										className='transition opacity-0 group-hover:opacity-100'
									></path>
									<path
										d='M1 1l4 4-4 4'
										className='transition group-hover:translate-x-[3px]'
									></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`md:hidden 
			${
				hide ? "translate-y-[100px]" : isScroll ? "translate-y-[100px]" : ""
			} fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md px-10 py-3 rounded-full bg-gradient-to-r from-primary/70 to-secondary/70 backdrop-blur-lg border border-gray-700 shadow-lg z-50`}
			>
				<nav className='flex gap-6 items-center justify-between transition-all duration-300 ease-linear'>
					{navLinks?.map(({ href, icon: Icon }) => {
						const isActive = pathname === href;

						return (
							<Link
								key={href}
								href={href}
								className={`flex flex-col items-center gap-1 text-xs transition-all duration-300 ease-linear p-2 ${
									isActive
										? "text-white scale-110 bg-secondary/50  rounded-full border border-accent/20"
										: "text-gray-300 hover:text-white"
								}`}
							>
								<Icon className='w-5 h-5' />
								{/* Optional text below icons */}
								{/* <span className='text-[10px]'>{label}</span> */}
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

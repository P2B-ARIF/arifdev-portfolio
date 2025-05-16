import { FileDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const navLists = [
	{ id: 1, href: "/", label: "Home" },
	{ id: 2, href: "/about", label: "About" },
	{ id: 3, href: "/gallery", label: "Gallery" },
	{ id: 4, href: "/works", label: "Works" },
	{ id: 5, href: "/blog", label: "Blog" },
	// { id: 5, href: "/contact", label: "Contact" },
];

const Navbar = () => {
	return (
		<div className='absolute top-0 left-0 w-full z-50'>
			<div className='flex items-center justify-between container mx-auto py-10'>
				<Link href='/' className='font-extrabold text-2xl'>
					Arif
				</Link>
				<div className='flex items-center gap-5 perspective-normal'>
					<div className='flex items-center gap-10'>
						{navLists?.map((list, idx) => (
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
	);
};

export default Navbar;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function FAQSection() {
	const [openItem, setOpenItem] = useState<null | number | any>(2);

	const faqItems = [
		{
			question:
				"What technologies do you specialize in for frontend development?",
			answer:
				"I specialize in modern frontend technologies including React.js, Next.js, TypeScript, and responsive design with HTML5/CSS3. I focus on building intuitive, high-performance user interfaces that work seamlessly across all devices.",
		},
		{
			question:
				"Can you handle both backend and database development for my project?",
			answer:
				"Absolutely! I provide end-to-end backend solutions using Node.js, Express.js, and Python (Django/Flask), along with database design for MongoDB, PostgreSQL, or MySQL. I ensure secure, scalable APIs and optimized data management tailored to your needs.",
		},
		{
			question: "Do you build complete full-stack applications from scratch?",
			answer:
				"Yes! I develop custom full-stack web applications using the MERN/MEVN stack (or other preferred frameworks). From UI design to server logic and deployment, I deliver comprehensive solutions with clean code and agile methodologies.",
		},
		{
			question:
				"How do you ensure performance and scalability for deployed applications?",
			answer:
				"I optimize performance through code efficiency, caching strategies, and modern deployment tools like Vercel, Docker, or AWS. Every project follows security best practices and CI/CD pipelines for reliability and scalability",
		},
		{
			question:
				"Can you work with startups or existing businesses to improve their platforms?",
			answer:
				"Definitely. Whether you're launching a new product or optimizing an existing platform, I collaborate closely to align with your goals. My focus is on clean code, user experience, and measurable results—let’s discuss how I can add value to your project!",
		},
	];

	const toggleItem = (index: number) => {
		setOpenItem(openItem === index ? null : index);
	};

	return (
		<div className='max-w-4xl mx-auto px-3 lg:px-5 py-16'>
			<SectionHeader
				subtitle={"FAQ"}
				title={"Frequently asked questions"}
				titleColor={"text-accent"}
			/>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className='space-y-0 mt-12'
			>
				{faqItems.map((item, index) => (
					<motion.div
						key={index}
						className='border-b border-gray-500'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
					>
						<motion.div
							className='py-6 flex justify-between items-center cursor-pointer text-accent/80'
							onClick={() => toggleItem(index)}
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className='max-w-[86%] max-sm:leading-6 text-lg md:text-xl font-medium'>
								{item.question}
							</h3>
							<motion.button
								className={`flex items-center justify-center aspect-square w-10 h-10 rounded-full`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								<motion.div
									animate={{ rotate: openItem === index ? 180 : 0 }}
									transition={{ duration: 0.3, type: "spring" }}
								>
									{/* <Plus size={18}/>	 */}
									<ChevronDown size={20} />
								</motion.div>
							</motion.button>
						</motion.div>
						<AnimatePresence>
							{openItem === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className='overflow-hidden'
								>
									<motion.p
										className='pb-6 text-gray-300 text-base md:text-lg leading-relaxed'
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.1 }}
									>
										{item.answer}
									</motion.p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

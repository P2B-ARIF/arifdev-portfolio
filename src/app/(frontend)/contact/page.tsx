"use client";

import LogoTicker from "@/components/common/LogoTicker";
import {
	ArrowUpRight,
	Instagram,
	Linkedin,
	Send,
	MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import cartoon from "@/assets/images/cartoon.png";
import img from "@/assets/images/image1.jpg";
import ImageGallerySlider from "@/components/contact/ImageGallerySlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { InfiniteMovingImages } from "@/components/common/infinite-moving-images";

import wp_profile from "@/assets/images/picture1.jpg";
import FAQSection from "@/components/home/FAQSection";
import { imageConfig } from "@/utils/imageConfig";

const Contact = () => {
	const images = [
		{ src: imageConfig.photo1 },
		{ src: imageConfig.photo2 },
		{ src: imageConfig.photo3 },
		{ src: imageConfig.photo4 },
		{ src: imageConfig.photo5 },
		{ src: imageConfig.photo6 },
		{ src: imageConfig.photo7 },
		{ src: imageConfig.photo8 },
		{ src: imageConfig.photo9 },
		{ src: imageConfig.photo10 },
		{ src: imageConfig.photo11 },
		{ src: imageConfig.photo12 },
		{ src: imageConfig.photo13 },
		{ src: imageConfig.photo14 },
		{ src: imageConfig.photo15 },
		{ src: imageConfig.photo16 },
		{ src: imageConfig.photo17 },
		{ src: imageConfig.photo18 },
		{ src: imageConfig.photo19 },
	];

	return (
		<section className='min-h-screen py-32 bg-gradient-to-b from-gray-950 to-gray-900'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex flex-col items-center justify-center gap-12 max-w-5xl mx-auto'
				>
					{/* Header Section */}
					<div className='space-y-4 text-center'>
						<div className='h-[12rem] flex justify-center'>
							<motion.img
								src={cartoon.src}
								alt='Cartoon character'
								className='h-full object-contain'
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								transition={{
									duration: 0.5,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
									repeatDelay: 2,
								}}
							/>
						</div>
						<h1 className='gradient_text text-4xl font-bold mt-5 '>
							Let's have a chat!
						</h1>
						<p className='text-gray-400 max-w-md mx-auto'>
							Enter your details below and I'll get back to you as soon as
							possible.
						</p>
					</div>

					{/* Contact Cards */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl'>
						<motion.div
							whileHover={{ scale: 1.03 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
							className='p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-lg hover:shadow-purple-900/20'
						>
							<div className='flex items-center justify-between gap-5'>
								<div className='flex items-center gap-3'>
									<div className='bg-green-900/50 border border-green-700/50 p-2 rounded-lg text-green-400'>
										<FaWhatsapp size={20} />
									</div>
									<span className='font-medium text-gray-200'>WhatsApp</span>
								</div>
								<a
									href='https://wa.me/8801953424319'
									className='p-2 rounded-full bg-green-900/30 hover:bg-green-800/50 transition-colors duration-200 text-green-400'
								>
									<ArrowUpRight size={18} />
								</a>
							</div>
							<div className='flex items-center gap-3 mt-5'>
								<img
									src={wp_profile.src || "/placeholder.svg"}
									alt='Profile'
									className='w-8 h-8 rounded-full object-cover border-2 border-purple-600/30'
								/>
								<a
									href='https://wa.me/8801953424319'
									className='text-gray-400 hover:text-purple-400 transition-colors duration-200'
								>
									+8801953424319
								</a>
							</div>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.03 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
							className='p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-lg hover:shadow-blue-900/20'
						>
							<div className='flex items-center justify-between gap-5'>
								<div className='flex items-center gap-3'>
									<div className='bg-blue-900/50 border border-blue-700/50 p-2 rounded-lg text-blue-400'>
										<Linkedin size={20} />
									</div>
									<span className='font-medium text-gray-200'>LinkedIn</span>
								</div>
								<a
									href='https://www.linkedin.com/in/mdarif319/'
									className='p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 transition-colors duration-200 text-blue-400'
								>
									<ArrowUpRight size={18} />
								</a>
							</div>
							<div className='flex items-center gap-3 mt-5'>
								<img
									src={wp_profile.src || "/placeholder.svg"}
									alt='Profile'
									className='w-8 h-8 rounded-full object-cover border-2 border-blue-600/30'
								/>
								<a
									href='https://www.linkedin.com/in/mdarif319/'
									className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
								>
									linkedin.com/in/mdarif319/
								</a>
							</div>
						</motion.div>
					</div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='w-full max-w-2xl p-8 rounded-xl box_gradient shadow-xl'
					>
						<div className='flex items-center gap-3 mb-6'>
							<div className='p-2 rounded-lg bg-gray-700 text-white'>
								<MessageSquare size={20} />
							</div>
							<h2 className='text-xl font-semibold text-white'>
								Send a Message
							</h2>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='space-y-2'>
								<label
									htmlFor='name'
									className='text-sm text-gray-400 font-medium ml-1'
								>
									Name
								</label>
								<Input
									type='text'
									id='name'
									placeholder='Enter your name'
									className='bg-gray-800/50 border-gray-700 focus:border-accent/50 focus:ring-accent/10'
								/>
							</div>

							<div className='space-y-2'>
								<label
									htmlFor='email'
									className='text-sm text-gray-400 font-medium ml-1'
								>
									Email
								</label>
								<Input
									type='email'
									id='email'
									placeholder='Enter your email'
									className='bg-gray-800/50 border-gray-700 focus:border-accent/50 focus:ring-accent/10'
								/>
							</div>

							<div className='space-y-2 col-span-2'>
								<label
									htmlFor='budget'
									className='text-sm text-gray-400 font-medium ml-1'
								>
									What's your budget?
								</label>
								<Select>
									<SelectTrigger className='bg-gray-800/50 border-gray-700  w-full'>
										<SelectValue placeholder='Select your budget' />
									</SelectTrigger>
									<SelectContent className='!bg-gray-800 border-gray-700 !hover:bg-gray-800 '>
										<SelectItem value='less-than-1k'>
											Less than $1,000
										</SelectItem>
										<SelectItem value='1k-5k'>$1,000 - $5,000</SelectItem>
										<SelectItem value='5k-10k'>$5,000 - $10,000</SelectItem>
										<SelectItem value='10k-20k'>$10,000 - $20,000</SelectItem>
										<SelectItem value='more-than-20k'>
											More than $20,000
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className='space-y-2 col-span-2'>
								<label
									htmlFor='message'
									className='text-sm text-gray-400 font-medium ml-1'
								>
									How can I help you?
								</label>
								<Textarea
									id='message'
									placeholder='Enter your message...'
									rows={10}
									className='bg-gray-800/50 border-gray-700 focus:border-accent/50 focus:ring-accent/10 resize-none min-h-40'
								/>
							</div>

							<div className='col-span-2'>
								<Button className='w-full bg-primary hover:bg-primary/70 text-white font-medium py-6'>
									<Send size={18} className='mr-2' /> Send Your Message
								</Button>
							</div>
						</div>
					</motion.div>

					{/* Logo Ticker */}
					<div className='w-full py-8'>
						<LogoTicker />
					</div>

					{/* Instagram Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className='flex flex-col gap-6 text-center items-center'
					>
						<h2 className='text-4xl font-light font-secondary text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary/50'>
							Life beyond work
						</h2>
						<a
							href=''
							className='border rounded-lg p-1.5 text-sm px-3 flex items-center gap-2 hover:text-pink-400 border-gray-700 hover:border-pink-500/50 transition-all duration-300'
						>
							<Instagram size={18} /> Follow me
						</a>
					</motion.div>
				</motion.div>
				{/* Image Gallery */}
				<div className='w-full mt-10'>
					<InfiniteMovingImages
						items={images}
						direction='right'
						speed='normal'
					/>

					<InfiniteMovingImages items={images} direction='left' speed='slow' />
				</div>

				<FAQSection />
			</div>
		</section>
	);
};

export default Contact;

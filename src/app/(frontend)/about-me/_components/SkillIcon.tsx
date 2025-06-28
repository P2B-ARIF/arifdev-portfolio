"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
	label: string;
	icon: string | any;
}
interface Props {
	skillsObj: Skill[];
	idx: number;
}

const SkillIcon = ({ skillsObj, idx }: Props) => {
	const cols = 6;
	const mdCols = 10;

	const [size, setSize] = useState<number>(64);
	const [icon, setIcon] = useState<Skill | null>(null);
	const [show, setShow] = useState<boolean>(true);
	const [duration, setDuration] = useState<number>(0.5);

	const randomSize = () => {
		let total = 0;
		while (total < 24 || total > 96) {
			total = Math.floor(Math.random() * 120) + 24;
		}
		return total;
	};

	const updateIcon = () => {
		const randomIcon = skillsObj[Math.floor(Math.random() * skillsObj.length)];
		const newSize = randomSize();
		const animDuration = parseFloat((Math.random() * 1.5 + 0.5).toFixed(2)); // 0.3s - 1.8s

		setIcon(randomIcon);
		setSize(newSize);
		setDuration(animDuration);
		setShow(true);

		// Auto-hide after animation ends + small delay
		setTimeout(() => setShow(false), animDuration * 1000 + 800);
	};

	useEffect(() => {
		updateIcon();

		let intervalId: NodeJS.Timeout;

		const setupRandomInterval = () => {
			const randomDelay = Math.floor(Math.random() * 15000) + 3000; // 3000ms to 20000ms
			intervalId = setTimeout(() => {
				updateIcon();
				setupRandomInterval(); // re-trigger with new interval
			}, randomDelay);
		};

		setupRandomInterval();

		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div
			className={`
				col-span-1 h-20 md:h-32
				border-b border-r border-gray-700/60 flex items-center justify-center
				${(idx + 1) % cols === 0 ? "border-r-0" : ""}
				${Math.floor(idx / cols) === Math.floor((51 - 1) / cols) ? "border-b-0" : ""}
				md:${(idx + 1) % mdCols === 0 ? "border-r-0" : ""}
				md:${
					Math.floor(idx / mdCols) === Math.floor((51 - 1) / mdCols)
						? "border-b-0"
						: ""
				}
			`}
		>
			<AnimatePresence>
				{show && icon && (
					<motion.img
						key={icon.label}
						src={icon?.icon?.src}
						alt={icon.label}
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration }}
						style={{
							width: size,
							height: size,
							objectFit: "contain",
						}}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SkillIcon;

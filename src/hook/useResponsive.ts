import { useEffect, useState } from "react";

type Responsive = {
	mobile: boolean;
	tablet: boolean;
	laptop: boolean;
	desktop: boolean;
	monitor: boolean;
};

const getResponsive = (width: number): Responsive => ({
	mobile: width < 640,
	tablet: width >= 640 && width <= 1024,
	laptop: width >= 1025 && width <= 1280,
	desktop: width >= 1281 && width <= 1600,
	monitor: width >= 1621,
});

export const useResponsive = (): Responsive => {
	const [responsive, setResponsive] = useState<Responsive>(() =>
		getResponsive(typeof window !== "undefined" ? window.innerWidth : 1280)
	);

	useEffect(() => {
		const handleResize = () => {
			setResponsive(getResponsive(window.innerWidth));
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return responsive;
};

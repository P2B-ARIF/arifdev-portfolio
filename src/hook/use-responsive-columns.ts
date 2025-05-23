"use client";

import { useState, useEffect } from "react";

/**
 * Hook to determine the number of columns based on screen width
 * @param defaultColumns Default number of columns
 * @returns Current number of columns based on screen width
 */
export function useResponsiveColumns(defaultColumns = 3) {
	const [columns, setColumns] = useState(defaultColumns);

	useEffect(() => {
		const updateColumns = () => {
			const width = window.innerWidth;
			if (width < 640) {
				setColumns(1); // Mobile: 1 column
			} else if (width < 768) {
				setColumns(2); // Small tablets: 2 columns
			} else {
				setColumns(defaultColumns); // Default columns
			}
		};

		// Set initial value
		updateColumns();

		// Add event listener for resize
		window.addEventListener("resize", updateColumns);

		// Clean up
		return () => window.removeEventListener("resize", updateColumns);
	}, [defaultColumns]);

	return columns;
}

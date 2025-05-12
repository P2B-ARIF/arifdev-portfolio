import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<main>
			<nav className='text-regal-blue'>Hello</nav>
			{children}
			<footer>Footer</footer>
		</main>
	);
};

export default Layout;

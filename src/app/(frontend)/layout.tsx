import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import React from "react";
// import SmoothLayout from "@/layouts/SmoothLayout";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<main>
			<Navbar />
			{/* <SmoothLayout> */}
			{children}
			{/* </SmoothLayout> */}
			<Footer />
		</main>
	);
};

export default Layout;

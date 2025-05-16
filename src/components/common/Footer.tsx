import React from "react";

const Footer = () => {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-8 gap-3'>
				<div className='col-span-6'>
					<h5>Mohammad Arif</h5>
					<h6>Full Stack Developer</h6>
					<p>Open for side-projects & collaborations</p>
				</div>
				<div className='col-span-2 grid grid-cols-2 gap-5'>
					<div>
						<h4>Me</h4>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Gallery</li>
							<li>Works</li>
							<li>Blog</li>
							<li>FAQ</li>
						</ul>
					</div>
					<div>
						<h4>Connect</h4>
						<ul>
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Linkedin</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='text-9xl font-bold text-center py-16'>
				damn it<span>,</span>Arif<span>!!</span>
			</div>

			<div className='border-t py-5 flex items-center justify-between'>
				<div>© 2025 Mohammad Arif</div>
				<div>Arif</div>
			</div>
		</div>
	);
};

export default Footer;

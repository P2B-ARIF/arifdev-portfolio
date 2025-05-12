import Link from "next/link";

const Home = () => {
	return (
		<div className='container mx-auto min-h-screen flex items-center justify-center'>
			<h1 className='text-3xl font-bold'>Home</h1>

			<section className='border rounded-2xl p-10'>
				<div>
					<div>Available For Work</div>
					<h1>Book a call, and I’ll take care of the rest</h1>
					<Link href='/contact'>Let's discuss Your Idea </Link>
					<div></div>
					<h1>mohammadarif4319@gmail.com</h1>
					<button>copy</button>
				</div>
			</section>
		</div>
	);
};

export default Home;

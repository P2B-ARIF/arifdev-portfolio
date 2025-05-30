import Image from "next/image";
import "./../blog.style.css";
import img from "@/assets/images/image1.jpg";

const post = {
	title: "Why You Should Use Next.js for Your Next Web Application",
	slug: "why-nextjs-for-web-app",
	author: "Your Name/Amake Technology",
	publishDate: "2025-05-30T22:30:00.000Z",
	tags: [
		"Next.js",
		"React.js",
		"Web Development",
		"SSR",
		"SSG",
		"API Routes",
		"Image Optimization",
		"Routing",
	],
	metaDescription:
		"Discover the powerful features of Next.js like SSR, SSG, API routes, and image optimization that make it an ideal choice for modern web applications.",
	sections: [
		{
			heading: "Introduction",
			content:
				"In the rapidly evolving world of web development, choosing the right framework can feel like navigating a maze. With so many powerful tools available, how do you decide which one is best suited for your project? If you're building a modern web application, especially with React, then Next.js should be at the top of your list.\n\nNext.js is an open-source React framework that enables powerful features for building production-ready web applications. It takes the core strengths of React and supercharges them with a focus on performance, developer experience, and scalability. Let's dive into some of the key reasons why Next.js is a game-changer for your next project.",
		},
		{
			heading:
				"Superior Performance with Server-Side Rendering (SSR) and Static Site Generation (SSG)",
			content:
				"One of the biggest advantages of Next.js lies in its versatile rendering capabilities. Unlike traditional React applications that primarily render on the client-side (meaning the browser downloads all the JavaScript and then builds the page), Next.js offers:\n\n* **Server-Side Rendering (SSR):** With SSR, your React components are rendered into HTML on the server *before* they are sent to the user's browser. This means the user gets a fully formed HTML page almost instantly.\n    * **Benefits:**\n        * **Faster Initial Load Times:** Users see content much quicker, leading to a better first impression.\n        * **Improved SEO:** Search engine crawlers (like Google's) can easily read the pre-rendered HTML, which is crucial for higher search rankings.\n        * **Better User Experience on Slower Networks:** Even with limited bandwidth, users receive a usable page faster.\n\n* **Static Site Generation (SSG):** For pages whose content doesn't change frequently (like blog posts, documentation, or marketing pages), Next.js can pre-render them into static HTML files at *build time*. These static files can then be served directly from a CDN (Content Delivery Network).\n    * **Benefits:**\n        * **Unparalleled Performance:** Static files are incredibly fast to deliver, as there's no server processing required on each request.\n        * **Enhanced Security:** No server-side logic means a reduced attack surface.\n        * **Lower Hosting Costs:** CDNs are often cheaper for serving static content.\n\nNext.js allows you to choose the appropriate rendering method for each page, giving you immense flexibility to optimize for performance and user experience.",
		},
		{
			type: "image",
			src: img, // Example image path
			alt: "Next.js Architecture Diagram",
			caption:
				"A simplified diagram showing Next.js's rendering capabilities: SSR, SSG, and ISR.",
		},
		{
			heading: "Built-in API Routes: Your Backend, Simplified",
			content:
				"Gone are the days when you needed a separate backend server for simple API endpoints. Next.js introduces **API Routes**, which allow you to create serverless API endpoints directly within your Next.js project.\n\n* **How it works:** You create files inside the `pages/api` directory, and each file maps to an API endpoint. For example, `pages/api/users.js` would become an API endpoint at `/api/users`.\n* **Benefits:**\n    * **Full-Stack in One Repository:** You can manage both your frontend and backend logic within a single Next.js application, streamlining development.\n    * **Faster Development:** No need to set up and configure a separate server, database connection, or deployment pipeline for simple APIs.\n    * **Serverless Ready:** API Routes are designed to work seamlessly with serverless functions (like AWS Lambda, Vercel Functions), scaling automatically as your traffic grows.\n\nThis feature is incredibly powerful for handling form submissions, fetching data from external services, or performing server-side operations without the overhead of a dedicated backend.",
		},
		{
			heading: "Automatic Image Optimization: High Quality, Low Size",
			content:
				"Images often account for a significant portion of a website's page weight, leading to slower load times if not handled correctly. Next.js addresses this challenge with its powerful **`next/image` component**.\n\n* **What it does:** The `next/image` component automatically optimizes images on demand, serving them in modern formats (like WebP) and at the correct sizes for different devices.\n* **Key features:**\n    * **Responsive Images:** Images are automatically scaled to fit the user's screen size.\n    * **Lazy Loading:** Images outside the viewport are not loaded until the user scrolls near them, speeding up initial page load.\n    * **Format Optimization:** Images are converted to more efficient formats, such as WebP, which offer better compression without sacrificing quality.\n    * **Automatic Sizing:** Prevents layout shifts (Cumulative Layout Shift - CLS) by automatically determining image dimensions.\n\nBy simply using the `next/image` component instead of a standard `<img>` tag, you can significantly improve your website's performance and Core Web Vitals without manual optimization efforts.",
		},
		{
			type: "image",
			src: img, // Example GIF path
			alt: "Next.js Image Optimization in action",
			caption: "The `next/image` component handles optimization effortlessly.",
		},
		{
			heading: "Intuitive File-Based Routing: No More Complex Configurations",
			content:
				"One of the most user-friendly features of Next.js is its **file-based routing system**. If you've ever struggled with configuring routing libraries in traditional React apps, you'll appreciate this simplicity.\n\n* **How it works:** In Next.js, every file inside the `pages` directory automatically becomes a route.\n    * `pages/index.js` becomes the root route (`/`).\n    * `pages/about.js` becomes the `/about` route.\n    * `pages/blog/[slug].js` creates dynamic routes, so `/blog/my-first-post` will load the `[slug].js` component, with `my-first-post` accessible as a parameter.\n* **Benefits:**\n    * **Extremely Easy to Understand:** The file structure directly reflects your application's routes, making navigation intuitive.\n    * **Less Boilerplate Code:** You don't need to write extensive routing configurations.\n    * **Consistent Structure:** Promotes a consistent and organized project structure.\n\nThis convention-over-configuration approach allows developers to focus on building features rather than spending time on routing setup.",
		},
		{
			heading: "Beyond the Core: A Thriving Ecosystem and Developer Experience",
			content:
				"While the features above are compelling, Next.js offers much more:\n\n* **Hot Module Replacement (HMR):** Changes to your code are reflected instantly in the browser without a full page reload, speeding up development.\n* **Fast Refresh:** A more robust and resilient version of HMR, preserving component state when you make edits.\n* **TypeScript Support:** Excellent built-in support for TypeScript, providing type safety and better code maintainability.\n* **Vercel Integration:** Developed by Vercel, Next.js has seamless integration with Vercel's platform for incredibly easy deployments.\n* **Large Community & Resources:** A vibrant community, extensive documentation, and countless tutorials make learning and troubleshooting a breeze.",
		},
		{
			heading: "Conclusion",
			content:
				"Next.js is more than just a React framework; it's a comprehensive solution for building performant, scalable, and SEO-friendly web applications. By abstracting away complex configurations and providing powerful features like Server-Side Rendering, API Routes, Image Optimization, and intuitive File-Based Routing, Next.js empowers developers to focus on what matters most: creating exceptional user experiences.\n\nIf you're looking to build your next web application with React and want to ensure it's fast, efficient, and future-proof, Next.js is undoubtedly a technology you should embrace. Give it a try, and you'll quickly see why it's become a favorite among developers worldwide.",
		},
	],
};

const BlogPostPage = () => {
	// Helper function to render content with bolding, line breaks, and basic lists
	const renderContent = contentString => {
		let htmlContent = contentString;

		// Bold text (**)
		htmlContent = htmlContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
		const paragraphs = htmlContent.split(/\n{2,}/).map(paragraph => {
			if (paragraph.trim().startsWith("* ")) {
				const listItems = paragraph
					.split("\n")
					.map(line => {
						if (line.trim().startsWith("* ")) {
							return `<li>${line.trim().substring(2)}</li>`;
						}
						return line;
					})
					.filter(Boolean); // Remove empty strings

				if (listItems.length > 0) {
					return `<ul>${listItems.join("")}</ul>`;
				}
			}
			return `<p>${paragraph.replace(/\n/g, "<br />")}</p>`;
		});

		return { __html: paragraphs.join("") };
	};

	// Helper for rendering tags
	const renderTags = tagsArray => {
		return (
			<div className='blog-tags'>
				{tagsArray.map((tag, index) => (
					<span key={index} className='tag-badge'>
						{tag}
					</span>
				))}
			</div>
		);
	};

	return (
		<div className='blog-container container mx-auto mt-32'>
			<h1 className='blog-title'>{post.title}</h1>
			<div className='blog-meta'>
				<span className='blog-author'>By {post.author}</span>
				<span className='blog-date'>
					| Published on{" "}
					{new Date(post.publishDate).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</span>
				{renderTags(post.tags)}
			</div>

			{/* Loop through sections and render content or images */}
			{post.sections.map((section, index) => (
				<div key={index} className='blog-section'>
					{section.type === "image" ? (
						<figure className='blog-image-container'>
							<Image
								src={section.src}
								alt={section.alt}
								width={800} // Set intrinsic width for optimization
								height={450} // Set intrinsic height for optimization
								layout='responsive' // Make image responsive
								objectFit='contain' // Ensures the image fits within its container
								className='blog-image' // Apply CSS class for styling
							/>
							{section.caption && (
								<figcaption className='blog-image-caption'>
									{section.caption}
								</figcaption>
							)}
						</figure>
					) : (
						<>
							{section.heading && (
								<h2 className='section-heading'>{section.heading}</h2>
							)}
							{/* Use a div instead of p for dangerouslySetInnerHTML to allow block elements */}
							<div
								className='section-content'
								dangerouslySetInnerHTML={renderContent(section.content)}
							></div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default BlogPostPage;

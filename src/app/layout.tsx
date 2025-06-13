import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Arif | Full Stack Developer | React, Next.js, Node.js Expert",
	description:
		"Arif is a Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable and modern web applications.",
	icons: {
		icon: "/favicon.png",
	},
	metadataBase: new URL("https://arifdev.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Arif | Full Stack Web Developer",
		description:
			"I build modern, scalable web applications using React, Next.js, Node.js & MongoDB.",
		images: "/og-image.png",
		url: "/",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-arp=''>
			<body className={`antialiased`}>
				{children}
				<script type='application/ld+json'>
					{`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arif",
              "jobTitle": "Full Stack Developer",
              "url": "https://arifdev.vercel.app",
              "sameAs": [
                "https://github.com/P2B-ARIF/",
                "https://www.linkedin.com/in/mdarif319/"
              ]
            }
          `}
				</script>
			</body>
		</html>
	);
}

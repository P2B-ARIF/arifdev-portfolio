import CallToAction from "@/components/home/CallToAction";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/hero/Hero";
import LogoTicker from "@/components/common/LogoTicker";
import SuccessStories from "@/components/home/success-stories/SuccessStories";
import WorksSection from "@/components/home/works/WorksSection";
import Blogs from "@/components/blogs/Blogs";
import AboutSection from "@/components/home/about-section/AboutSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import MySkills from "@/components/home/my-skills/MySkills";

const Home = () => {
	return (
		<main>
			<Hero />
			<LogoTicker />
			<AboutSection />
			<SuccessStories />
			<MySkills />
			<WorksSection />
			<Blogs />
			<CallToAction />
			<Testimonials />
			<FAQSection />
		</main>
	);
};

export default Home;

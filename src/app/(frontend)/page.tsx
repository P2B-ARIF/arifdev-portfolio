import CallToAction from "@/components/home/CallToAction";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/hero/Hero";
import LogoTicker from "@/components/common/LogoTicker";
import WorksSection from "@/components/home/works/WorksSection";
import AboutSection from "@/components/home/about-section/AboutSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import MySkills from "@/components/home/my-skills/MySkills";
import WorkCategories from "@/components/home/work-categories/WorkCategories";
import BlogSection from "@/components/blogs/BlogSection";
import MovingTitle from "@/components/home/moving-title/MovingTitle";

const Home = () => {
	return (
		<main className='min-h-screen'>
			<Hero />
			<LogoTicker />
			<AboutSection />
			<MySkills />
			<WorkCategories />
			<MovingTitle />
			<WorksSection />
			<BlogSection />
			<CallToAction />
			<Testimonials />
		</main>
	);
};

// ============

export default Home;

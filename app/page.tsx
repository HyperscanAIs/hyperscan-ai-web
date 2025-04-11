import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import AboutSection from "./components/about-section";
import GallerySection from "./components/gallery-section";
import PricingSection from "./components/pricing-section";
import FeedbackSection from "./components/feedback-section";
import LogoScrollSection from "./components/logo-scroll-section";
import BlogSection from "./components/blog-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-background dark:text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <GallerySection />
      <PricingSection />
      <FeedbackSection />
      <LogoScrollSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

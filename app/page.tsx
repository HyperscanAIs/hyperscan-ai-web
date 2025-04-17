import BlogSection from "./components/blog-section";
import FeaturesSection from "./components/features-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import PricingSection from "./components/pricing-section";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-background dark:text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <AboutSection /> */}
      {/* <GallerySection /> */}
      <PricingSection />
      {/* <FeedbackSection /> */}
      {/* <LogoScrollSection /> */}
      <BlogSection />
      <Footer />
    </main>
  );
}

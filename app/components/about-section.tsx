"use client";

import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    "Founded by blockchain and AI experts",
    "5+ years of industry experience",
    "Trusted by over 500 companies globally",
    "Processing $10M+ in transactions daily",
    "99.9% uptime guarantee",
    "24/7 dedicated support team",
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            ref={ref}
            className={`w-full lg:w-1/2 opacity-0 ${
              inView ? "animate-fade-in-right" : ""
            }`}
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-muted/30 backdrop-blur-xs rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>

                {/* Animated grid lines */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-primary/10 backdrop-blur-xs"
                      style={{
                        animation: `pulse 3s infinite ${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/30 rounded-lg animate-float"></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-accent/30 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-1/3 w-8 h-8 bg-secondary/30 rounded-lg animate-float"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-accent/30 rounded-lg"></div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 opacity-0 ${
              inView ? "animate-fade-in-left" : ""
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About Us</span>
            </h2>

            <p className="text-lg text-foreground/80 mb-6">
              HyperscanAI was founded in 2020 with a vision to bridge the gap
              between artificial intelligence and blockchain technology. Our
              team of experts has been at the forefront of both industries,
              bringing together the best of both worlds to create a platform
              that is intelligent, secure, and user-friendly.
            </p>

            <p className="text-lg text-foreground/80 mb-8">
              We believe in a future where decentralized applications are
              powered by intelligent algorithms, making them more efficient,
              secure, and accessible to everyone. Our mission is to make this
              future a reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="glow-effect bg-primary hover:bg-primary/90 text-white cursor-pointer">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

const logos = [
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
];

// Duplicate logos for seamless scrolling
const allLogos = [...logos, ...logos];

const LogoScrollSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Trusted By</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Join hundreds of leading companies using Hyperscan to power their
            Web3 applications.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className={`w-full overflow-hidden opacity-0 ${inView ? "animate-fade-in" : ""}`}
      >
        <div className="flex animate-scroll-x">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Partner logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScrollSection;

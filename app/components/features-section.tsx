"use client";
import { useInView } from "react-intersection-observer";
import { Package, Scale, FlaskConical, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "Container Tracking",
    description:
      "Track your containers in real-time to ensure transparency and efficiency in your supply chain.",
    delay: 100,
  },
  {
    icon: <Scale className="w-10 h-10 text-primary" />,
    title: "Cargo Weight Estimation",
    description:
      "Accurately estimate cargo weight to optimize load planning and reduce transportation costs.",
    delay: 200,
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
    title: "Chemical Screening",
    description:
      "Ensure compliance and safety with advanced chemical screening for transported goods.",
    delay: 300,
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Route Optimization",
    description:
      "Optimize delivery routes to save time, reduce fuel consumption, and improve efficiency.",
    delay: 400,
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Delivery Time Estimation",
    description:
      "Provide accurate delivery time estimates to enhance customer satisfaction and planning.",
    delay: 500,
  },
  {
    icon: <Scale className="w-10 h-10 text-primary" />,
    title: "Smart Contracts for Automated Payments",
    description:
      "Automate payments with blockchain smart contracts, ensuring trust and reducing delays.",
    delay: 600,
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-secondary/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Our platform offers cutting-edge solutions tailored for the
            logistics industry, ensuring efficiency, transparency, and
            reliability in global supply chain operations.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-muted/30 backdrop-blur-xs rounded-lg p-6 border border-muted transition-all duration-500 hover:border-primary/50 hover:bg-muted/50 opacity-0 ${
                inView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="mb-4 p-3 rounded-full bg-muted inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

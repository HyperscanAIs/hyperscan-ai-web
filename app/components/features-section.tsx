"use client";
import { useInView } from "react-intersection-observer";
import { Brain, Shield, Zap, BarChart3, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "AI-Powered Analytics",
    description:
      "Advanced machine learning algorithms analyze blockchain data to provide actionable insights and predictions.",
    delay: 100,
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Enhanced Security",
    description:
      "Military-grade encryption and decentralized architecture ensure your data remains secure and private.",
    delay: 200,
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Lightning Fast",
    description:
      "Optimized for speed with transaction processing times that are 10x faster than traditional systems.",
    delay: 300,
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Real-time Monitoring",
    description:
      "Monitor your assets and transactions in real-time with customizable dashboards and alerts.",
    delay: 400,
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: "Self-Custody",
    description:
      "Maintain complete control of your digital assets with our non-custodial wallet integration.",
    delay: 500,
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Global Accessibility",
    description:
      "Access your assets and data from anywhere in the world, on any device, at any time.",
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
            Our platform combines the power of artificial intelligence with
            blockchain technology to create a seamless, secure, and intelligent
            Web3 experience.
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

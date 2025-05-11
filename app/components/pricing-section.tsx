"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small logistics operations",
    price: {
      monthly: 49,
      yearly: 39,
    },
    features: [
      "Basic container tracking",
      "Up to 100 shipments/month",
      "Standard route optimization",
      "Email support",
      "1 user",
    ],
    notIncluded: [
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Buy Now",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing logistics businesses",
    price: {
      monthly: 99,
      yearly: 79,
    },
    features: [
      "Advanced container tracking",
      "Up to 1,000 shipments/month",
      "Enhanced route optimization",
      "Priority support",
      "5 users",
      "Custom integrations",
    ],
    notIncluded: ["Dedicated account manager"],
    cta: "Buy Now",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale logistics operations",
    price: {
      monthly: 249,
      yearly: 199,
    },
    features: [
      "Real-time container tracking",
      "Unlimited shipments",
      "AI-powered route optimization",
      "24/7 dedicated support",
      "Unlimited users",
      "Custom integrations",
      "Dedicated account manager",
    ],
    notIncluded: [],
    cta: "Contact Us",
    popular: false,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-secondary/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Choose the perfect plan for your logistics needs. All plans include
            core features like container tracking and route optimization.
          </p>

          <div className="flex items-center justify-center mb-8">
            <span
              className={`mr-3 ${
                !annual ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-transform ${
                  annual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`ml-3 ${
                annual ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Annual <span className="text-primary text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-muted/30 backdrop-blur-xs rounded-lg border transition-all duration-500 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-muted hover:border-primary/50"
              } opacity-0 ${inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-foreground/70">/month</span>
                </div>

                <Button
                  className={`w-full mb-6 cursor-pointer ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white glow-effect"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-foreground/50"
                    >
                      <X className="w-5 h-5 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Star } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "David Kim",
    role: "Startup Founder",
    rating: 5,
    comment:
      "The AI-powered insights have been a game-changer for our startup. We've been able to make data-driven decisions that have significantly improved our ROI.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Lisa Wong",
    role: "Data Scientist",
    rating: 5,
    comment:
      "As someone who works with data daily, I'm impressed by the accuracy and depth of Hyperscan's analytics. The platform is intuitive and the insights are actionable.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "James Peterson",
    role: "Crypto Investor",
    rating: 4,
    comment:
      "I've tried several blockchain analytics platforms, but Hyperscan stands out for its predictive capabilities. It's helped me stay ahead of market trends.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Security Specialist",
    rating: 5,
    comment:
      "The security features are top-notch. As someone responsible for protecting digital assets, I appreciate the attention to detail in the security protocols.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Robert Chen",
    role: "DeFi Developer",
    rating: 5,
    comment:
      "The API documentation is comprehensive and the integration process was smooth. The platform has significantly accelerated our development timeline.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Marketing Director",
    rating: 4,
    comment:
      "The customer insights we've gained have transformed our marketing strategy. We're now able to target our audience with much greater precision.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

const FeedbackSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Customer Feedback</span>
          </h2>
          <p className="text-lg text-foreground/80">
            See what our customers have to say about their experience with
            Hyperscan AI.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`bg-muted/30 backdrop-blur-xs rounded-lg p-6 border border-muted hover:border-primary/50 transition-all duration-300 opacity-0 ${
                inView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={feedback.avatar || "/placeholder.svg"}
                    alt={feedback.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-foreground/70">{feedback.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < feedback.rating
                        ? "text-primary fill-primary"
                        : "text-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <p className="text-foreground/80">"{feedback.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

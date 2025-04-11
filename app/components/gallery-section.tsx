"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ImageModal from "./image-modal";

const galleryImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "AI analyzing blockchain data",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Decentralized network visualization",
  },
  {
    src: "/placeholder.svg?height=250&width=400",
    alt: "Smart contract automation",
  },
  {
    src: "/placeholder.svg?height=350&width=300",
    alt: "Web3 security protocols",
  },
  {
    src: "/placeholder.svg?height=200&width=400",
    alt: "Blockchain transaction flow",
  },
  {
    src: "/placeholder.svg?height=450&width=300",
    alt: "AI prediction models",
  },
  {
    src: "/placeholder.svg?height=280&width=400",
    alt: "Decentralized application interface",
  },
  {
    src: "/placeholder.svg?height=320&width=300",
    alt: "Neural network visualization",
  },
];

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Explore the intersection of artificial intelligence and blockchain
            technology through our visual showcase.
          </p>
        </div>

        <div
          ref={ref}
          className={`opacity-0 ${inView ? "animate-fade-in" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-rows-[masonry]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  height:
                    index % 3 === 0
                      ? "300px"
                      : index % 3 === 1
                        ? "250px"
                        : "350px",
                }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
      />
    </section>
  );
};

export default GallerySection;

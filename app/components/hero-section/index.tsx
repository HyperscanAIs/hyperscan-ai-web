"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Orbit from "./orbit";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-40"></div>

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-gradient">AI-Powered</span> Web3
              <br />
              <span className="text-gradient">Logistics</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              Harness the power of artificial intelligence and blockchain
              technology to revolutionize logistic transportation, enabling
              smarter, faster, and more secure global supply chain operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/hypescan-722af.firebasestorage.app/o/Hyperscan.ipa?alt=media&token=9313a63c-0686-4553-b854-ca50f39fc966"
                className="transition-transform hover:scale-105"
              >
                <Button
                  size="lg"
                  className="glow-effect w-full h-14 bg-black hover:bg-black/90 text-white cursor-pointer px-6 flex items-center justify-center gap-2 rounded-xl"
                >
                  <Image
                    src="/apple.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-normal">Download for</span>
                    <span className="text-md font-medium leading-none mt-1">
                      iOS
                    </span>
                  </div>
                </Button>
              </a>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/hypescan-722af.firebasestorage.app/o/Hyperscan.apk?alt=media&token=935f6e84-4f76-4169-b58e-5c83a15e048b"
                className="transition-transform hover:scale-105 glow-eff"
              >
                <Button
                  size="lg"
                  className="glow-effect w-full h-14 bg-black hover:bg-black/90 text-white cursor-pointer px-6 flex items-center justify-center gap-2 rounded-xl"
                >
                  <Image
                    src="/play-store.png"
                    alt="Play Store"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-normal">Download for</span>
                    <span className="text-md font-medium leading-none mt-1">
                      Android
                    </span>
                  </div>
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm text-foreground/70">
                  Decentralized
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                <span className="text-sm text-foreground/70">Secure</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                <span className="text-sm text-foreground/70">Intelligent</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Orbit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

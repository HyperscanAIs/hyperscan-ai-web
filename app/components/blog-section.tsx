"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/blog-posts";

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get the first 3 blog posts for the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Latest Articles</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Stay up-to-date with the latest trends and insights in AI,
              blockchain, and Web3 technology.
            </p>
          </div>

          <Link href="/blog">
            <Button
              variant="outline"
              className="hidden md:flex border-primary text-primary hover:bg-primary/10 cursor-pointer"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-muted/30 backdrop-blur-xs rounded-lg overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300 opacity-0 ${
                inView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center text-sm text-foreground/70 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-foreground/80 mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog-posts";
import { Calendar, User, Clock, Tag } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen dark:bg-background dark:text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Blog</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Insights, updates, and deep dives into AI, blockchain, and Web3
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-muted/30 backdrop-blur-xs rounded-lg overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300"
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
                  <div className="flex flex-wrap items-center text-sm text-foreground/70 mb-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-foreground/80 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center text-xs bg-muted px-2 py-1 rounded"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

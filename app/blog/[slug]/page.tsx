import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { blogPosts } from "../../data/blog-posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen dark:bg-background dark:text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="bg-muted/30 backdrop-blur-xs rounded-lg overflow-hidden border border-muted p-6 md:p-8 mb-8">
              <div className="mb-6">
                <span className="inline-block bg-primary text-white text-sm font-medium py-1 px-3 rounded mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center text-sm text-foreground/70 mb-6 gap-4">
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
              </div>

              <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-sm bg-muted px-3 py-1 rounded"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-muted pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-foreground/70">Author</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/70 mb-2 md:text-right">
                      Share this article
                    </p>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

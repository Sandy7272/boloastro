import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, Share2, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { getWhatsAppLink } from "@/config/constants";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-cosmic-dark">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-12">
          <div className="absolute inset-0 nebula-bg opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">{post.author.avatar}</span>
                  <span>{post.author.name}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Featured Emoji */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-cosmic-purple/30 to-gold/10 flex items-center justify-center mb-8">
                <span className="text-5xl">{post.image}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              {/* Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gold
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-ul:text-muted-foreground prose-li:my-1
                  prose-strong:text-foreground
                  prose-blockquote:border-l-gold prose-blockquote:text-gold/80 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border/40">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted/30 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 p-6 rounded-2xl bg-glass-premium border border-gold/10">
                <div className="flex-1">
                  <h3 className="font-display font-semibold mb-2">Need personalized guidance?</h3>
                  <p className="text-sm text-muted-foreground">
                    Get expert astrological advice tailored to your birth chart.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a
                      href={getWhatsAppLink(`Hi! I just read "${post.title}" and want to learn more.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask Expert
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold mb-8">Related Articles</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, i) => (
                    <motion.article
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="block group h-full rounded-xl bg-glass-premium border border-gold/10 hover:border-gold/30 transition-all overflow-hidden"
                      >
                        <div className="h-24 bg-gradient-to-br from-cosmic-purple/30 to-gold/10 flex items-center justify-center">
                          <span className="text-4xl">{relatedPost.image}</span>
                        </div>
                        <div className="p-4">
                          <span className="text-xs text-gold">{relatedPost.category}</span>
                          <h3 className="font-display font-semibold mt-1 group-hover:text-gold transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

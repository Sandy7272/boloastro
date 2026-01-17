import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 nebula-bg opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                Astrology Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Vedic Wisdom & <br />
                <span className="text-gradient-saffron">Daily Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn about astrology, get daily rashifal tips, and discover cosmic wisdom.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/30 border border-border/40 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all text-foreground"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-gold to-saffron text-cosmic-dark"
                        : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.article
                    className="group h-full rounded-2xl bg-glass-premium border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image/Emoji Header */}
                    <div className="h-40 bg-gradient-to-br from-cosmic-purple/30 to-gold/10 flex items-center justify-center">
                      <span className="text-6xl">{post.image}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category & Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <Button variant="ghost" size="sm" className="text-gold hover:text-gold/80 p-0" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

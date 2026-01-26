/**
 * Enhanced Blog Page with Learning Hub Design
 * 
 * Features:
 * - Category navigation
 * - Featured articles
 * - Better card design
 * - SEO optimized
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogPosts";
import SEO from "@/components/SEO";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured post (first post)
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Astrology Learning Hub | BoloAstro Blog"
        description="Learn about Vedic astrology, kundali basics, planet meanings, marriage astrology, and daily horoscope tips. Free astrology education in Hindi and English."
        keywords="astrology blog, kundali guide, vedic astrology learning, rashifal tips, marriage astrology, career astrology"
      />
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Learning Hub • ज्ञान केंद्र
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
                Vedic Wisdom &
                <span className="text-primary block">Daily Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn astrology basics, understand your kundali, and discover cosmic wisdom
                <span className="block text-primary text-base mt-2">ज्योतिष सीखें, कुंडली समझें</span>
              </p>
            </motion.div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="block bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-6 lg:p-10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl flex-shrink-0">
                      {featuredPost.image}
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                        ⭐ Featured Article
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-2 transition-transform hidden lg:block" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(selectedCategory === "All" && !searchQuery ? 1 : 0).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.id}`} className="block h-full">
                      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all h-full flex flex-col">
                        {/* Image Header */}
                        <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="text-6xl">{post.image}</span>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read More <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-muted-foreground mb-4">No articles found</p>
                <Button variant="outline" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center bg-card border border-border rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Want Personalized Predictions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get your free kundali and talk to our AI Pandit on WhatsApp
              </p>
              <Button size="lg" className="btn-gold rounded-xl px-8 py-6" asChild>
                <Link to="/">
                  Get Free Kundali <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

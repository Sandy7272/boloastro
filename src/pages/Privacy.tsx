import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Privacy <span className="text-gradient-saffron">Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </div>

            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to {SITE_CONFIG.name} ("{SITE_CONFIG.name}", "we", "our", or "us"). We are committed 
                  to protecting your personal information and your right to privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  astrology services through WhatsApp and our website.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">2. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Personal Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name (as provided by you)</li>
                    <li>Date of birth</li>
                    <li>Time of birth</li>
                    <li>Place of birth</li>
                    <li>WhatsApp phone number</li>
                    <li>Email address (if provided)</li>
                  </ul>
                  
                  <p><strong className="text-foreground">Usage Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chat history with our bot</li>
                    <li>Service preferences</li>
                    <li>Payment information (processed securely via third-party providers)</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Generate personalized kundali and horoscope readings</li>
                  <li>Provide astrology predictions and guidance</li>
                  <li>Process payments for premium services</li>
                  <li>Send relevant updates and notifications</li>
                  <li>Improve our AI and service quality</li>
                  <li>Respond to your inquiries and support requests</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>End-to-end encryption for all WhatsApp communications</li>
                  <li>Secure servers with SSL/TLS encryption</li>
                  <li>Regular security audits</li>
                  <li>Access controls limiting data access to authorized personnel only</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground">
                  We do NOT sell, trade, or rent your personal information to third parties. We may share 
                  data only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Payment processors for transaction handling</li>
                  <li>Cloud service providers for data storage</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  For any privacy-related questions or requests, contact us at:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
                  <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
                  <li><strong className="text-foreground">Location:</strong> {SITE_CONFIG.location}</li>
                </ul>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

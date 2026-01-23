import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy"
        description="Learn how BoloAstro protects your personal data. We respect your privacy and never share your birth details with third parties."
        path="/privacy"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              {/* Important Notice */}
              <section className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">🔒 Privacy Commitment</h2>
                <p className="text-foreground text-lg">
                  At {SITE_CONFIG.name}, we understand that your birth details are deeply personal. 
                  We are committed to protecting your privacy and never share, sell, or misuse your information.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to {SITE_CONFIG.name} ("{SITE_CONFIG.name}", "we", "our", or "us"). This Privacy Policy 
                  explains how we collect, use, and protect your personal information when you use our 
                  AI-powered Vedic astrology services delivered via WhatsApp.
                </p>
                <p className="text-muted-foreground mt-4">
                  By using our services, you consent to the collection and use of information as described in this policy.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Personal Information (for astrology calculations):</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full name (as provided by you)</li>
                    <li>Date of birth (Janam Tithi)</li>
                    <li>Time of birth (Janam Samay)</li>
                    <li>Place of birth (Janam Sthan)</li>
                    <li>WhatsApp phone number</li>
                  </ul>
                  
                  <p className="mt-4"><strong className="text-foreground">Usage Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chat history with our AI bot (for service improvement)</li>
                    <li>Service preferences and language choice</li>
                    <li>Payment transaction details (processed securely via third-party providers)</li>
                  </ul>

                  <p className="mt-4"><strong className="text-foreground">Technical Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser type (website visits only)</li>
                    <li>Device information</li>
                    <li>Cookies for website functionality</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">Your personal data is used exclusively for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Generating your personalized Kundali (birth chart)</li>
                  <li>Providing accurate Vedic astrology predictions</li>
                  <li>Delivering Kundali Milan (compatibility) analysis</li>
                  <li>Processing payments for premium services</li>
                  <li>Sending service-related notifications via WhatsApp</li>
                  <li>Improving our AI algorithms for better accuracy</li>
                  <li>Responding to your questions and support requests</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. WhatsApp Usage</h2>
                <p className="text-muted-foreground">
                  Our primary service delivery is through WhatsApp. By initiating a conversation with our WhatsApp bot, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Receive astrology-related messages and predictions</li>
                  <li>Receive service updates and delivery notifications</li>
                  <li>Allow storage of chat history for service continuity</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Note:</strong> We will never spam you or send unrelated marketing messages. 
                  You can stop receiving messages by typing "STOP" at any time.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement robust security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>End-to-end encryption for all WhatsApp communications</li>
                  <li>SSL/TLS encryption for website and data transmission</li>
                  <li>Secure cloud servers with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Data access limited to authorized personnel only</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Data Sharing</h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">We do NOT sell, trade, or rent your personal information.</strong>
                </p>
                <p className="text-muted-foreground mt-4">We may share data only with:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Secure payment processors (for transaction handling only)</li>
                  <li>Cloud service providers (for data storage with encryption)</li>
                  <li>Legal authorities (only when required by law)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Your birth details are never shared with any third party for marketing or any other purpose.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal data for as long as necessary to provide our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Birth details: Retained to generate future predictions on request</li>
                  <li>Chat history: Retained for service continuity and improvement</li>
                  <li>Payment records: Retained for 7 years (as per legal requirements)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You may request deletion of your data at any time (see "Your Rights" below).
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your data</li>
                  <li><strong className="text-foreground">Opt-out:</strong> Stop receiving messages by typing "STOP"</li>
                  <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise any of these rights, contact us via WhatsApp or email.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect 
                  personal information from minors. If you are a parent and believe your child has provided us 
                  with personal data, please contact us immediately.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated "Last updated" date. Continued use of our services after changes constitutes 
                  acceptance of the updated policy.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  For any privacy-related questions, concerns, or requests:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
                  <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
                  <li><strong className="text-foreground">Location:</strong> {SITE_CONFIG.location}</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We respond to all privacy inquiries within 48 hours.
                </p>
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

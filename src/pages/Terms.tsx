import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service"
        description="Terms and conditions for using BoloAstro's AI-powered Vedic astrology services. Astrology is belief-based and results may vary."
        path="/terms"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Terms of <span className="text-primary">Service</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              {/* Important Notice */}
              <section className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30">
                <h2 className="text-2xl font-display font-semibold text-destructive mb-4">⚠️ Important Disclaimer</h2>
                <div className="space-y-3 text-foreground">
                  <p className="font-medium">
                    {SITE_CONFIG.name} is a <strong>paid digital astrology service</strong>. By using our services, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Astrology is <strong>belief-based</strong> and results may vary</li>
                    <li>Predictions are <strong>not guaranteed</strong> to be accurate</li>
                    <li>Services are <strong>non-refundable</strong> once delivered</li>
                    <li>This is <strong>not a substitute</strong> for professional advice (medical, legal, financial)</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using {SITE_CONFIG.name}'s services, including our WhatsApp bot and website, 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
                <p className="text-muted-foreground mt-4">
                  These terms constitute a legally binding agreement between you and {SITE_CONFIG.name}.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.name} provides AI-powered Vedic astrology services delivered exclusively via WhatsApp:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Kundali Analysis:</strong> Birth chart interpretation based on Vedic principles</li>
                  <li><strong className="text-foreground">Kundali Milan:</strong> Marriage compatibility analysis (Guna Milan)</li>
                  <li><strong className="text-foreground">Life Predictions:</strong> Career, finance, health, and relationship insights</li>
                  <li><strong className="text-foreground">Remedies:</strong> Personalized astrological suggestions</li>
                  <li><strong className="text-foreground">Ask a Question:</strong> Astrology-based answers to life questions</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All services are personalized digital products generated using AI and traditional Vedic calculations.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Nature of Astrology Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">IMPORTANT:</strong> You expressly acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Astrology is based on <strong>belief and tradition</strong>, not scientific proof</li>
                    <li>Predictions are <strong>interpretive</strong> and may not reflect actual outcomes</li>
                    <li>Results are <strong>not guaranteed</strong> to be accurate or come true</li>
                    <li>Different astrologers may provide different interpretations</li>
                    <li>Our AI uses traditional Vedic methods but <strong>accuracy is not assured</strong></li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-foreground">No Liability:</strong> {SITE_CONFIG.name} assumes no responsibility for any 
                    decisions made or actions taken based on our astrological readings.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Paid Service Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">This is a paid digital service:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All prices are in Indian Rupees (INR) and inclusive of applicable taxes</li>
                    <li>Payment is required before service delivery for premium features</li>
                    <li>Payments are processed securely through trusted payment gateways</li>
                    <li>Once payment is confirmed, service generation begins immediately</li>
                  </ul>
                  
                  <p className="mt-4"><strong className="text-foreground">No Free Kundali:</strong></p>
                  <p>
                    We do not provide free kundali or free detailed reports. A basic preview may be available, 
                    but full analysis requires payment.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">5. No Refund Policy</h2>
                <div className="space-y-4 text-foreground">
                  <p className="font-medium">
                    All services are personalized digital products. Once the service is delivered:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>No refunds</strong> will be issued after delivery</li>
                    <li><strong>No cancellations</strong> are possible after service is generated</li>
                    <li>This applies to all paid services including Kundali PDF, Kundali Milan, and Q&A</li>
                  </ul>
                  <p className="mt-4">
                    By making a payment, you acknowledge that you understand and accept this no-refund policy.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For complete refund terms, please see our <a href="/refund" className="text-primary underline">Refund Policy</a>.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. User Responsibilities</h2>
                <p className="text-muted-foreground">By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Provide <strong className="text-foreground">accurate birth details</strong> (incorrect details will result in incorrect predictions)</li>
                  <li>Use the service for <strong className="text-foreground">personal, non-commercial purposes</strong> only</li>
                  <li>Not share, redistribute, or resell our premium reports</li>
                  <li>Not attempt to reverse-engineer or abuse our AI system</li>
                  <li>Treat our support team with respect</li>
                  <li>Be at least 18 years of age or have parental consent</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Not a Substitute for Professional Advice</h2>
                <p className="text-muted-foreground">
                  Astrological readings from {SITE_CONFIG.name} should <strong className="text-foreground">NEVER</strong> be used as a substitute for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Medical advice:</strong> Always consult a qualified doctor for health issues</li>
                  <li><strong className="text-foreground">Legal advice:</strong> Always consult a qualified lawyer for legal matters</li>
                  <li><strong className="text-foreground">Financial advice:</strong> Always consult a qualified financial advisor</li>
                  <li><strong className="text-foreground">Mental health support:</strong> Always consult a qualified therapist</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our service is for spiritual guidance and entertainment purposes only.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, including but not limited to text, graphics, logos, AI algorithms, and reports, 
                  is the property of {SITE_CONFIG.name} and is protected by copyright laws.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>You may not reproduce or redistribute our content without permission</li>
                  <li>Your personalized reports are for your personal use only</li>
                  <li>Screenshots or PDFs should not be shared publicly</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Any decisions made based on our predictions</li>
                  <li>Any loss of profits, data, or opportunities</li>
                  <li>Any emotional distress caused by predictions</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our maximum liability is limited to the amount you paid for the specific service.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">10. Service Availability</h2>
                <p className="text-muted-foreground">
                  While we strive for 24/7 availability:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>We do not guarantee uninterrupted service</li>
                  <li>Technical issues may occasionally affect service delivery</li>
                  <li>We reserve the right to modify or discontinue services</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">11. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate your access to our services at any time, 
                  without notice, for conduct that we believe:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Violates these Terms</li>
                  <li>Is harmful to other users or our business</li>
                  <li>Involves abuse or misuse of our AI system</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms from time to time. Changes will be posted on this page with an 
                  updated "Last updated" date. Continued use of our services after changes constitutes 
                  acceptance of the updated terms.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">14. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
                  <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
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

export default Terms;

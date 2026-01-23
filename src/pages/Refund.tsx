import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";
import SEO from "@/components/SEO";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Refund Policy"
        description="BoloAstro refund policy. All services are personalized digital products and non-refundable after delivery."
        path="/refund"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Refund <span className="text-primary">Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              {/* Important Notice - No Refunds */}
              <section className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30">
                <h2 className="text-2xl font-display font-semibold text-destructive mb-4">⚠️ No Refund Policy</h2>
                <div className="space-y-3 text-foreground">
                  <p className="text-lg font-medium">
                    All {SITE_CONFIG.name} services are <strong>personalized digital products</strong>. 
                    Once the service is delivered, <strong>no refunds or cancellations</strong> are possible.
                  </p>
                  <p>
                    By making a payment, you acknowledge and accept this policy.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Why No Refunds?</h2>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.name} provides personalized astrology services that require:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Immediate processing:</strong> Your Kundali is generated instantly upon payment</li>
                  <li><strong className="text-foreground">Personalized content:</strong> Each report is unique to your birth details</li>
                  <li><strong className="text-foreground">Digital delivery:</strong> Once delivered, the service cannot be "returned"</li>
                  <li><strong className="text-foreground">AI computation:</strong> Resources are consumed immediately upon request</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Unlike physical products, digital personalized services cannot be resold or reused.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">2. What This Means For You</h2>
                <div className="space-y-4 text-foreground">
                  <p><strong>Before you pay, please understand:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Once payment is made, your service will be generated immediately</li>
                    <li>Refunds are <strong>not available</strong> after delivery</li>
                    <li>Cancellations are <strong>not possible</strong> once processing begins</li>
                    <li>This applies to all services: Kundali, Kundali Milan, Premium Reports, Q&A</li>
                  </ul>
                  <p className="mt-4">
                    <strong>We recommend:</strong> Review the service description carefully before purchasing. 
                    If you have questions, contact us on WhatsApp before paying.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Services Covered by This Policy</h2>
                <p className="text-muted-foreground">This no-refund policy applies to all paid services:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Kundali Analysis (₹199):</strong> Full birth chart PDF with predictions</li>
                  <li><strong className="text-foreground">Kundali Milan:</strong> Marriage compatibility analysis</li>
                  <li><strong className="text-foreground">Premium Reports:</strong> Career, health, finance-specific reports</li>
                  <li><strong className="text-foreground">VIP Consultations:</strong> Priority support and guidance</li>
                  <li><strong className="text-foreground">Ask a Question:</strong> Personalized astrology-based answers</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Exceptions (Very Limited)</h2>
                <p className="text-muted-foreground">
                  Refunds may be considered <strong>only</strong> in the following exceptional cases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li><strong className="text-foreground">Duplicate Payment:</strong> If you were charged twice for the same service</li>
                  <li><strong className="text-foreground">Technical Failure:</strong> If the service was not delivered due to our technical error</li>
                  <li><strong className="text-foreground">Non-Delivery:</strong> If you did not receive the report within 24 hours</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Note:</strong> "I don't like the predictions" or "The predictions didn't come true" 
                  are NOT valid reasons for refund. Astrology is belief-based and results vary.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. How to Report an Issue</h2>
                <p className="text-muted-foreground">
                  If you face a technical issue with service delivery, contact us immediately:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Send a WhatsApp message to <strong className="text-foreground">{SITE_CONFIG.phone}</strong></li>
                  <li>Include "PAYMENT ISSUE" in your message</li>
                  <li>Provide your payment receipt or transaction ID</li>
                  <li>Describe the issue (duplicate charge, non-delivery, etc.)</li>
                </ol>
                <p className="text-muted-foreground mt-4">
                  We will investigate and respond within 24 hours.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Chargebacks</h2>
                <p className="text-muted-foreground">
                  We strongly discourage initiating chargebacks with your bank before contacting us directly. 
                  Please understand:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Chargebacks for delivered digital services may be contested</li>
                  <li>We maintain detailed delivery records</li>
                  <li>Fraudulent chargebacks may result in legal action</li>
                  <li>Your account will be suspended pending investigation</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Contact us first — we're committed to resolving any genuine issues.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Pre-Purchase Information</h2>
                <p className="text-muted-foreground">
                  Before you make a purchase, you are informed that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>This is a paid digital service</li>
                  <li>Astrology results are belief-based and not guaranteed</li>
                  <li>No refunds after service delivery</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This information is displayed before payment confirmation. By proceeding with payment, 
                  you acknowledge you have read and accepted these terms.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Astrology Disclaimer</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Important:</strong> Astrology is a belief system. Our predictions are based on 
                    traditional Vedic calculations interpreted by AI, but:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We do not guarantee any prediction will come true</li>
                    <li>Results and interpretations may vary</li>
                    <li>Different astrologers may give different readings</li>
                    <li>Astrology should not replace professional advice</li>
                  </ul>
                  <p className="mt-4">
                    "The predictions didn't match my expectations" or "Things didn't happen as predicted" 
                    are inherent to the nature of astrology and are not grounds for refund.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Contact for Issues</h2>
                <p className="text-muted-foreground">
                  For any payment or service-related issues:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
                  <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
                  <li><strong className="text-foreground">Response Time:</strong> Within 24 hours</li>
                </ul>
              </section>

              {/* Summary Box */}
              <section className="p-6 rounded-2xl bg-muted border border-border">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">📋 Policy Summary</h2>
                <ul className="list-none space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>No refunds after service delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>No cancellations once processing begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>No refunds for "predictions didn't come true"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Duplicate payments will be refunded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Technical non-delivery will be investigated</span>
                  </li>
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

export default Refund;

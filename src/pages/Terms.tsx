import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";

const Terms = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Terms of <span className="text-gradient-saffron">Service</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </div>

            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using {SITE_CONFIG.name}'s services, including our WhatsApp bot and website, 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.name} provides AI-powered Vedic astrology services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Kundali (birth chart) generation</li>
                  <li>Horoscope predictions and rashifal</li>
                  <li>Marriage compatibility analysis</li>
                  <li>Career and financial guidance</li>
                  <li>Astrological remedies and suggestions</li>
                  <li>Consultation with human astrologers (VIP plan)</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">3. Disclaimer</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Important:</strong> Our astrology services are for 
                    entertainment and spiritual guidance purposes only. We do not guarantee the accuracy 
                    of predictions or outcomes.
                  </p>
                  <p>
                    Astrological readings should not be used as a substitute for professional advice in 
                    matters of health, law, finance, or any other critical decisions. Always consult 
                    qualified professionals for such matters.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground">By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Provide accurate birth details for readings</li>
                  <li>Use the service for personal, non-commercial purposes</li>
                  <li>Not share or redistribute premium content</li>
                  <li>Not attempt to reverse-engineer or abuse our AI system</li>
                  <li>Respect our astrologers and support team</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">5. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>All prices are in Indian Rupees (INR)</li>
                  <li>Payments are processed securely through trusted payment gateways</li>
                  <li>Premium services are activated upon successful payment</li>
                  <li>Subscription plans auto-renew unless cancelled</li>
                  <li>GST is included in displayed prices where applicable</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, including but not limited to text, graphics, logos, and software, is the 
                  property of {SITE_CONFIG.name} and is protected by copyright laws. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.name} shall not be liable for any direct, indirect, incidental, consequential, 
                  or punitive damages arising from your use of our services. Our maximum liability is 
                  limited to the amount you paid for the specific service.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate your access to our services at any time, 
                  without notice, for conduct that we believe violates these Terms or is harmful to other 
                  users or our business.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, 
                  Maharashtra.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">10. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
                  <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
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

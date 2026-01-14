import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";

const Refund = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Refund <span className="text-gradient-saffron">Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </div>

            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <section className="p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-saffron/5 border border-gold/20">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">💰 7-Day Money-Back Guarantee</h2>
                <p className="text-foreground text-lg">
                  We stand behind our services. If you're not satisfied with your paid purchase, 
                  you can request a full refund within 7 days of payment — no questions asked.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">1. Refund Eligibility</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">You are eligible for a refund if:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You request within 7 days of purchase</li>
                    <li>This is your first refund request</li>
                    <li>The service was not delivered as promised</li>
                    <li>Technical issues prevented service delivery</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">2. Non-Refundable Services</h2>
                <p className="text-muted-foreground">The following are NOT eligible for refunds:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Free services (kundali, basic horoscope)</li>
                  <li>Completed VIP consultations (after the call has taken place)</li>
                  <li>PDF reports that have been downloaded</li>
                  <li>Requests made after 7 days of purchase</li>
                  <li>Second or subsequent refund requests</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">3. How to Request a Refund</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>To request a refund, follow these steps:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Send a WhatsApp message to {SITE_CONFIG.phone}</li>
                    <li>Include "REFUND REQUEST" in your message</li>
                    <li>Provide your payment receipt or transaction ID</li>
                    <li>Briefly explain the reason for refund (optional)</li>
                  </ol>
                  <p className="mt-4">
                    Alternatively, email us at <strong className="text-foreground">{SITE_CONFIG.email}</strong> 
                    with the subject line "Refund Request".
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">4. Refund Processing</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Refund requests are processed within 3-5 business days</li>
                  <li>Refunds are credited to the original payment method</li>
                  <li>Bank processing may take additional 5-7 business days</li>
                  <li>You will receive confirmation via WhatsApp/email</li>
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">5. Subscription Cancellation</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For monthly subscription plans (Premium/VIP):</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You can cancel anytime to prevent future charges</li>
                    <li>Access continues until the end of the current billing period</li>
                    <li>No partial refunds for unused portions of the billing period</li>
                    <li>To cancel, message "CANCEL SUBSCRIPTION" on WhatsApp</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">6. Chargebacks</h2>
                <p className="text-muted-foreground">
                  We encourage you to contact us first before initiating a chargeback with your bank. 
                  Chargebacks incur additional fees and may result in account suspension. We're committed 
                  to resolving any issues quickly through our support channels.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-glass border border-gold/10">
                <h2 className="text-2xl font-display font-semibold text-gold mb-4">7. Contact for Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For all refund-related queries:</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong className="text-foreground">WhatsApp:</strong> {SITE_CONFIG.phone}</li>
                    <li><strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}</li>
                    <li><strong className="text-foreground">Response Time:</strong> Within 24 hours</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20">
                <h2 className="text-2xl font-display font-semibold text-emerald-400 mb-4">✅ Our Promise</h2>
                <p className="text-foreground">
                  At {SITE_CONFIG.name}, customer satisfaction is our priority. If you ever face any issues 
                  with our service, please reach out. We'll do our best to make it right!
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

export default Refund;

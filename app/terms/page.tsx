"use client";

export default function TermsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <p className="text-lg text-muted-foreground text-center mb-12">
        Please read these Terms of Service carefully before using UrbanEco. By accessing or using our platform, you agree to comply with these terms.
      </p>

      <section className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to <strong>UrbanEco</strong>. These Terms of Service govern your use of our website, services, and products. By accessing or using UrbanEco, you acknowledge that you have read, understood, and agreed to be bound by these terms.
          </p>
        </div>

        {/* Section 2: User Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. User Eligibility</h2>
          <p className="text-muted-foreground">
            To use our services, you must:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Be at least 18 years old or have parental/guardian consent if under 18.</li>
            <li>Provide accurate and up-to-date information during registration.</li>
            <li>Not engage in any unlawful activities while using UrbanEco.</li>
          </ul>
        </div>

        {/* Section 3: Use of Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
          <p className="text-muted-foreground">
            You agree to use UrbanEco for lawful purposes only. Prohibited activities include but are not limited to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Hacking, phishing, or attempting unauthorized access to our systems.</li>
            <li>Distributing malicious software, spam, or fraudulent content.</li>
            <li>Using our services for illegal transactions or deceptive practices.</li>
          </ul>
        </div>

        {/* Section 4: Product & Service Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Product & Service Information</h2>
          <p className="text-muted-foreground">
            We strive to provide accurate descriptions of refurbished electronic components. However, UrbanEco does not guarantee that product descriptions, images, or specifications are always 100% accurate, complete, or error-free.
          </p>
        </div>

        {/* Section 5: Payments & Transactions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Payments & Transactions</h2>
          <p className="text-muted-foreground">
            All payments are processed securely through trusted gateways like <strong>Razorpay</strong>. By making a purchase, you agree to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Provide accurate billing information.</li>
            <li>Comply with all payment-related terms from the gateway provider.</li>
            <li>Understand that all transactions are final, and refund policies apply as per our guidelines.</li>
          </ul>
        </div>

        {/* Section 6: User Accounts */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">6. User Accounts</h2>
          <p className="text-muted-foreground">
            When you create an account on UrbanEco, you are responsible for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>Ensuring your account activity complies with our terms.</li>
            <li>Not sharing or transferring your account to others.</li>
          </ul>
        </div>

        {/* Section 7: Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on UrbanEco, including logos, text, images, and code, is the property of UrbanEco and protected by copyright and intellectual property laws. You may not reproduce, modify, or distribute any content without prior permission.
          </p>
        </div>

        {/* Section 8: Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            UrbanEco is not responsible for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Losses due to misuse of our services.</li>
            <li>Technical issues beyond our control.</li>
            <li>Third-party service failures, including payment processing errors.</li>
          </ul>
        </div>

        {/* Section 9: Modifications to Terms */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to update or modify these Terms of Service at any time. Continued use of UrbanEco after changes implies acceptance of the updated terms.
          </p>
        </div>

        {/* Section 10: Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these terms, feel free to reach out:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Email:</strong> <a href="mailto:tarunjuneja471@gmail.com" className="text-blue-600 font-semibold hover:underline">tarunjuneja471@gmail.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/devtarunjuneja" target="_blank" className="text-blue-600 font-semibold hover:underline">devtarunjuneja</a></li>
          </ul>
        </div>
      </section>

      <p className="text-center text-muted-foreground mt-12">
        <strong>Last Updated:</strong> February 2025
      </p>
    </main>
  );
}

"use client";

export default function PrivacyPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <p className="text-lg text-muted-foreground text-center mb-12">
        Your privacy matters to us. Learn how we collect, use, and protect your personal information.
      </p>

      <section className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to <strong>UrbanEco</strong>. Your privacy is of utmost importance to us. This Privacy Policy explains how we 
            collect, use, and safeguard your personal data when you use our platform.
          </p>
        </div>

        {/* Section 2: Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect the following types of information when you use our services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Personal Information:</strong> Name, email, contact details when you create an account or reach out to us.</li>
            <li><strong>Usage Data:</strong> Browsing behavior, pages visited, and time spent on our site.</li>
            <li><strong>Payment Information:</strong> If you make purchases, we process transactions securely via trusted gateways like Razorpay.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies to improve your experience and provide relevant content.</li>
          </ul>
        </div>

        {/* Section 3: How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            Your data helps us enhance your experience. We use it for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Providing, operating, and maintaining our services.</li>
            <li>Personalizing user experiences and improving our platform.</li>
            <li>Processing payments and fulfilling orders securely.</li>
            <li>Sending important updates, newsletters, or promotional offers (only with your consent).</li>
          </ul>
        </div>

        {/* Section 4: Data Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground">
            We take your privacy seriously and implement strong security measures to protect your data against unauthorized 
            access, misuse, or breaches. However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Section 5: Third-Party Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="text-muted-foreground">
            We may integrate trusted third-party services for payment processing, analytics, or customer support. These services 
            have their own privacy policies, and we encourage you to review them.
          </p>
        </div>

        {/* Section 6: Your Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights & Choices</h2>
          <p className="text-muted-foreground">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Request access to your personal data.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Request data deletion or corrections.</li>
            <li>Disable cookies through your browser settings.</li>
          </ul>
        </div>

        {/* Section 7: Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our Privacy Policy, feel free to reach out:
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

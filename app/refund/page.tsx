"use client";

export default function RefundPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Refund Policy</h1>

      <p className="text-lg text-muted-foreground text-center mb-12">
        At <strong>UrbanEco</strong>, we aim to provide the best experience for our customers. Our refund policy ensures transparency, fairness, and customer satisfaction. Please read through our refund guidelines below.
      </p>

      <section className="space-y-8">
        {/* Section 1: Refund Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Refund Eligibility</h2>
          <p className="text-muted-foreground">
            You are eligible for a refund if the product received is:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>The product is damaged during transit</li>
            <li>The product does not match the description provided</li>
            <li>The product is defective and cannot be used</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            If the product is returned in its original condition, we will issue a full refund.
          </p>
        </div>

        {/* Section 2: Non-Refundable Items */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Non-Refundable Items</h2>
          <p className="text-muted-foreground">
            The following items are not eligible for a refund:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Products that are used or opened after delivery</li>
            <li>Products that are customized or made-to-order</li>
            <li>Items returned after the 30-day return window has passed</li>
          </ul>
        </div>

        {/* Section 3: Refund Process */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
          <p className="text-muted-foreground">
            To initiate a refund request, please contact us at <strong>tarunjuneja471@gmail.com</strong> with the following details:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Order Number</li>
            <li>Product Name</li>
            <li>Reason for Return</li>
            <li>Photographs of the damaged or defective product (if applicable)</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Once we receive your request, our team will evaluate the case and get back to you within 3-5 business days.
          </p>
        </div>

        {/* Section 4: Refund Method */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Refund Method</h2>
          <p className="text-muted-foreground">
            If your refund is approved, we will process it via the original payment method. Refunds typically take 7-10 business days to reflect in your account.
          </p>
        </div>

        {/* Section 5: Exchange Policy */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Exchange Policy</h2>
          <p className="text-muted-foreground">
            If you wish to exchange an item, please follow the same process as a refund request. Our customer support team will assist you with the exchange process based on product availability.
          </p>
        </div>

        {/* Section 6: Contact for Refund Queries */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">
            For any questions regarding our refund policy or if you have concerns about a product, please reach out to us:
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

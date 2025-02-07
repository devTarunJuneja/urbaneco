"use client";

export default function ShippingPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Shipping Policy</h1>

      <p className="text-lg text-muted-foreground text-center mb-12">
        At <strong>UrbanEco</strong>, we are committed to providing a seamless and eco-friendly shipping experience. Below are the details of our shipping policies, including delivery charges, timelines, order tracking, and our trusted delivery partners.
      </p>

      <section className="space-y-8">
        {/* Section 1: Shipping Locations */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Shipping Locations</h2>
          <p className="text-muted-foreground">
            We currently ship across India. If you are ordering from a remote area, additional shipping time may be required. International shipping is not available at this time.
          </p>
        </div>

        {/* Section 2: Delivery Time */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Estimated Delivery Time</h2>
          <p className="text-muted-foreground">
            We process and ship all orders within <strong>24-48 hours</strong> (excluding Sundays and public holidays). Estimated delivery time depends on your location:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Metro Cities:</strong> 3-5 business days</li>
            <li><strong>Tier 2 & 3 Cities:</strong> 5-7 business days</li>
            <li><strong>Remote Areas:</strong> 7-10 business days</li>
          </ul>
        </div>

        {/* Section 3: Delivery Charges */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Shipping Charges</h2>
          <p className="text-muted-foreground">
            Our shipping charges are based on the weight of the package:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Orders up to 2kg:</strong> ₹49</li>
            <li><strong>Orders up to 5kg:</strong> ₹99</li>
            <li><strong>For bulk orders above 5kg:</strong> Shipping charges will be calculated at checkout.</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Shipping charges are non-refundable once the order is dispatched.
          </p>
        </div>

        {/* Section 4: Order Tracking */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Order Tracking</h2>
          <p className="text-muted-foreground">
            Once your order is shipped, you will receive a tracking link via email/SMS. You can also track your order in the <strong>My Orders</strong> section of your account.
          </p>
        </div>

        {/* Section 5: Delivery Partners */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Our Delivery Partners</h2>
          <p className="text-muted-foreground">
            We have partnered with reliable delivery services to ensure that your orders reach you safely and on time:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Ekart</strong></li>
            <li><strong>BlueDart</strong></li>
            <li><strong>Post Office India</strong></li>
          </ul>
          <p className="text-muted-foreground mt-4">
            These partners help us provide secure and timely deliveries across the country.
          </p>
        </div>

        {/* Section 6: Shipping Restrictions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Shipping Restrictions</h2>
          <p className="text-muted-foreground">
            Certain items may be restricted based on location due to regulations. If an order cannot be delivered, our support team will contact you for further assistance.
          </p>
        </div>

        {/* Section 7: Delays & Issues */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">7. Delays & Issues</h2>
          <p className="text-muted-foreground">
            While we ensure timely deliveries, delays may occur due to unforeseen circumstances such as weather conditions, logistics issues, or high order volumes. In such cases, we appreciate your patience and will provide updates on your order status.
          </p>
        </div>

        {/* Section 8: Contact for Shipping Queries */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about shipping or need help with your order, feel free to reach out to us:
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

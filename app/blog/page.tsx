"use client";

import { FaLeaf, FaRecycle, FaBolt, FaMicrochip, FaGlobe, FaTools } from "react-icons/fa";

export default function BlogPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <p className="text-lg text-center text-muted-foreground font-semibold mb-12">
        Stay updated with the latest insights on sustainability, e-waste management, and electronics innovation.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaRecycle className="text-4xl text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Importance of E-Waste Recycling</h2>
          <p className="text-muted-foreground">
            Learn why recycling e-waste is crucial for the environment and how you can contribute to a sustainable future.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>

        {/* Blog Post 2 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaLeaf className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Sustainable Tech: The Future of Electronics</h2>
          <p className="text-muted-foreground">
            Discover how the tech industry is moving towards sustainability by using eco-friendly materials and processes.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>

        {/* Blog Post 3 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaBolt className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Energy-Efficient Gadgets You Should Know</h2>
          <p className="text-muted-foreground">
            Explore the latest innovations in energy-efficient devices that help reduce your carbon footprint.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>

        {/* Blog Post 4 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaMicrochip className="text-4xl text-gray-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Refurbished Electronics: Myths vs. Reality</h2>
          <p className="text-muted-foreground">
            Debunking common misconceptions about refurbished electronics and why they’re a great choice.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>

        {/* Blog Post 5 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaGlobe className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Global E-Waste Trends & Challenges</h2>
          <p className="text-muted-foreground">
            Get insights into how different countries handle e-waste and the biggest challenges faced worldwide.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>

        {/* Blog Post 6 */}
        <div className="p-6 border rounded-lg shadow-lg">
          <FaTools className="text-4xl text-red-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">DIY: Repairing & Repurposing Old Electronics</h2>
          <p className="text-muted-foreground">
            Learn how to repair and repurpose old gadgets instead of throwing them away, reducing waste and saving money.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
            Read More →
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-muted-foreground">
          More articles coming soon! Stay tuned for updates.
        </p>
      </div>
    </main>
  );
}

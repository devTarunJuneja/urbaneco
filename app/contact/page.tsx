"use client";

import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-muted-foreground text-lg mb-6 text-center font-semibold">
        Have questions? Want to collaborate? Reach out to us!
      </p>

      <section className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-2xl text-red-600" />
          <span className="text-lg font-semibold">Email:</span>
          <a
            href="mailto:tarunjuneja471@gmail.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            tarunjuneja471@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaGithub className="text-2xl text-gray-800" />
          <span className="text-lg font-semibold">GitHub:</span>
          <a
            href="https://github.com/devtarunjuneja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            github.com/devtarunjuneja
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-2xl text-green-600" />
          <span className="text-lg font-semibold">Phone:</span>
          <span className="text-muted-foreground font-semibold">+91 7988288471</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-2xl text-red-500" />
          <span className="text-lg font-semibold">Location:</span>
          <span className="text-muted-foreground font-semibold">India</span>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-muted-foreground">
          Stay connected for updates and inquiries. We’d love to hear from you!
        </p>
      </div>
    </main>
  );
}

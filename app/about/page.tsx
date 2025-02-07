"use client";

import { FaRecycle, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="text-center mb-12">
        <p className="text-muted-foreground text-lg mb-6 font-bold">
          We are <span className="text-green-600">Devenclosure</span>, a passionate team committed to driving change for a sustainable future in the field of electronics. Our project, <span className="text-blue-600">UrbanEco</span>, is designed to provide <span className="text-yellow-600">refurbished electronic components</span> to engineering students, promoting sustainability, skill enhancement, and eco-friendly solutions that help reduce e-waste. We believe in the power of innovation and collaboration to shape a greener tomorrow.
        </p>
      </div>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center font-bold">
          <FaRecycle className="mr-2 text-green-600" /> Our Mission
        </h2>
        <p className="text-muted-foreground text-lg mb-6 font-bold">
          At <span className="text-blue-600">UrbanEco</span>, we believe in the power of <span className="text-green-600">reusing and refurbishing</span> electronic components to reduce the growing menace of <span className="text-red-600">e-waste</span>. Our mission is to provide students with access to high-quality, <span className="text-yellow-600">affordable</span> resources, while supporting the environment by promoting sustainability. 
        </p>
        <p className="text-muted-foreground text-lg mb-6 font-bold">
          Through our platform, we strive to create a positive environmental impact while helping students enhance their skills, expand their knowledge in electronics, and contribute to a future that is both <span className="text-green-600">technologically advanced</span> and <span className="text-blue-600">environmentally conscious</span>. We are driven by the belief that sustainability is not just an option, but a responsibility we all share.
        </p>
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-4xl text-yellow-500 mb-2" />
            <span className="font-semibold text-lg font-bold">Innovation</span>
            <p className="text-muted-foreground text-center font-bold">We innovate by refurbishing electronic components, giving them a second life and reducing unnecessary waste.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-blue-500 mb-2" />
            <span className="font-semibold text-lg font-bold">Community</span>
            <p className="text-muted-foreground text-center font-bold">We are a community-driven platform, aiming to support students and foster collaboration to make the world a better place.</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center font-bold">
          <FaUsers className="mr-2 text-blue-600" /> Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/WhatsApp Image 2025-02-06 at 18.09.38_f7ef10e1.jpg" // replace with actual image paths
              alt="Monali Verma"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg font-bold">Monali Verma</h3>
            <p className="text-muted-foreground font-bold">Founder & Project Lead</p>
          </div>
          <div className="text-center">
            <img
              src="/WhatsApp Image 2025-02-06 at 16.57.27_97939505.jpg"
              alt="Tarun Juneja"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg font-bold">Tarun Juneja</h3>
            <p className="text-muted-foreground font-bold">Technical Lead</p>
          </div>
          <div className="text-center">
            <img
              src="/Screenshot 2025-02-06 165931.jpg"
              alt="Sahil Chahal"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg font-bold">Sahil Chahal</h3>
            <p className="text-muted-foreground font-bold">UI/UX Designer</p>
          </div>
          <div className="text-center">
            <img
              src="/diksha.jpg"
              alt="Diksha Bansal"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg font-bold">Diksha Bansal</h3>
            <p className="text-muted-foreground font-bold">Marketing & Outreach</p>
          </div>
        </div>
      </section>
    </main>
  );
}

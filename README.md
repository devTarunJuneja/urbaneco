UrbanEco - E-Waste Management and Refurbished Electronics Marketplace
UrbanEco is a web platform designed to revolutionize urban sustainability through efficient e-waste management and by providing affordable, high-quality refurbished electronic components to students and makers. Our mission is to reduce the environmental impact of e-waste while contributing to a more sustainable future by promoting the reuse of electronic parts.

Table of Contents
Features
Technologies Used
Installation
Usage
Contributing
License
Features
UrbanEco offers the following features to users:

E-Waste Reporting:

Citizens can report overflowing dustbins, illegal landfills, or e-waste issues by uploading photos and providing location details.
Anonymity is supported for users who prefer to report without revealing their identity.
Automatic escalation to higher authorities in case of unaddressed complaints.
Marketplace for Refurbished Electronic Components:

A collection of affordable, refurbished electronic components, including circuits, batteries, controllers, and more.
Ideal for engineering students, makers, and hobbyists who need sustainable and cost-effective parts for their projects.
AI-Powered Chatbot (EcoAI):

Provides waste recycling tips, energy-saving suggestions, and environmental awareness.
Generates PDF reports of user interactions via GPT-4 integration.
Rewards System:

Users earn points for reporting waste-related issues, which can be redeemed for discounts on municipal bills or marketplace items.
Technologies Used
Frontend: React, Next.js, Tailwind CSS, React Icons
Backend: Node.js, Next.js API routes
Database: Neon (PostgreSQL serverless)
Authentication: Auth0
Payment Gateway: Razorpay
Other: Tailwind CSS, Axios, Zod (form validation), JS and TypeScript
Installation
Prerequisites
Ensure you have the following installed:

Node.js (v16 or above)
npm (v7 or above)
Git
Steps to Set Up
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/urbaneco.git
Navigate into the project directory:

bash
Copy
Edit
cd urbaneco
Install the project dependencies:

bash
Copy
Edit
npm install
Set up environment variables for your project (you may need to create a .env file in the root directory):

Set up NEXT_PUBLIC_API_URL for your API endpoint.
Add your Auth0 credentials: AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, and AUTH0_DOMAIN.
Razorpay credentials: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET.
Run the development server:

bash
Copy
Edit
npm run dev
Open the browser and visit http://localhost:3000 to see the application in action.

Usage
Once the application is running, users can:

Browse and buy refurbished electronics through the marketplace.
Report e-waste and waste-related issues.
Interact with the EcoAI chatbot to learn more about sustainability and recycling.
Earn rewards for participating in the reporting system.
Contributing
We welcome contributions to improve UrbanEco! Here’s how you can get involved:

Fork this repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
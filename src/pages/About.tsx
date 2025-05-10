
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-6">About Expert AI</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Expert AI provides specialized chat assistants trained on domain-specific knowledge to help users get guidance and information in various fields.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to make specialized knowledge accessible to everyone through conversational AI. We believe that expert guidance should be available to all, regardless of location or resources.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
            <p className="mb-4">
              Our AI assistants are trained on vast amounts of domain-specific information, allowing them to provide helpful guidance and information in their areas of expertise.
            </p>
            <p className="mb-6">
              While our assistants can provide valuable information, they are designed as tools to assist and should not replace professional consultation when needed.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy First</h2>
            <p className="mb-6">
              We prioritize user privacy. Our chat interfaces don't require login or personal information, and chat histories are not stored after your session ends.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Continuous Improvement</h2>
            <p>
              We're constantly working to improve our AI assistants by updating their knowledge and enhancing their capabilities to better serve your needs.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;


import React from 'react';

const features = [
  {
    title: 'Domain-Specific Expertise',
    description: 'Our AI assistants are trained on specialized knowledge in their respective fields.'
  },
  {
    title: 'No Login Required',
    description: 'Start chatting immediately without the hassle of creating an account.'
  },
  {
    title: 'Instant Answers',
    description: 'Get responses to your questions in real-time, 24/7.'
  },
  {
    title: 'Continuous Learning',
    description: 'Our AI experts are constantly improving with the latest knowledge in their fields.'
  }
];

const Features = () => {
  return (
    <div className="bg-secondary/30 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Our Expert Chat Assistants?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our specialized AI assistants provide guidance and information tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

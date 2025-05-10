
import React from 'react';
import ExpertCard, { ExpertCardProps } from './ExpertCard';

const experts: ExpertCardProps[] = [
  {
    id: "real-estate",
    title: "Real Estate Expert",
    description: "Property insights and investment guidance",
    icon: "🏠",
    color: "blue",
    features: [
      "Property valuation advice",
      "Investment opportunity analysis",
      "Market trend insights",
      "First-time buyer guidance"
    ]
  },
  {
    id: "psychology",
    title: "Psychology Expert",
    description: "Mental health and personal growth advice",
    icon: "🧠",
    color: "purple",
    features: [
      "Stress management techniques",
      "Relationship advice",
      "Personal growth strategies",
      "Emotional wellness tips"
    ]
  },
  {
    id: "finance",
    title: "Financial Expert",
    description: "Personal finance and investment guidance",
    icon: "💰",
    color: "green",
    features: [
      "Budgeting assistance",
      "Investment portfolio advice",
      "Retirement planning",
      "Debt management strategies"
    ]
  },
  {
    id: "nutrition",
    title: "Nutrition Expert",
    description: "Dietary advice and meal planning",
    icon: "🥗",
    color: "teal",
    features: [
      "Personalized diet recommendations",
      "Meal planning assistance",
      "Nutritional information",
      "Dietary restriction guidance"
    ]
  },
  {
    id: "career",
    title: "Career Coach",
    description: "Career development and job search guidance",
    icon: "💼",
    color: "orange",
    features: [
      "Resume and cover letter advice",
      "Interview preparation",
      "Career transition strategies",
      "Professional development planning"
    ]
  },
  {
    id: "legal",
    title: "Legal Assistant",
    description: "Basic legal information and guidance",
    icon: "⚖️",
    color: "blue",
    features: [
      "General legal information",
      "Document explanation",
      "Legal process overview",
      "Resource recommendations"
    ]
  }
];

const ExpertList = () => {
  return (
    <div className="py-16 container" id="experts">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Our Expert Chat Assistants</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our range of specialized AI assistants designed to help with specific domains.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <ExpertCard key={expert.id} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertList;

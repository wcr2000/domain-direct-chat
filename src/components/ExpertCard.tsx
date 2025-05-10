
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export interface ExpertCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  id,
  title,
  description,
  icon,
  color,
  features
}) => {
  return (
    <Card className="expert-card-hover overflow-hidden border-border/40">
      <CardHeader className={`bg-expert-${color}/10`}>
        <div className={`w-12 h-12 rounded-full bg-expert-${color}/20 flex items-center justify-center mb-4`}>
          <span className={`text-expert-${color} text-2xl`}>{icon}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 text-expert-${color}`}>✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full bg-expert-${color} hover:bg-expert-${color}/90`}>
          <Link to={`/chat/${id}`}>Chat with Expert</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExpertCard;

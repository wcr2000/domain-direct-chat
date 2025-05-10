
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "First-Time Home Buyer",
    content: "The real estate expert helped me understand the home buying process and gave me confidence to make my first purchase.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    title: "Entrepreneur",
    content: "The financial expert provided clear guidance that helped me restructure my business finances during a critical growth period.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    title: "Graduate Student",
    content: "The psychology expert gave me practical techniques for managing academic stress that I use every day.",
    avatar: "ER"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-muted/50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from people who have used our expert chat assistants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/40">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden hero-gradient">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Expert Chat Assistants <span className="text-primary">for Any Domain</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Get instant access to specialized knowledge and guidance from AI experts trained in specific fields. No login required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="#experts">Explore Experts</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
              alt="Expert Chat Assistant Interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-sm ml-auto">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">AI</div>
                  <div className="bg-secondary p-3 rounded-lg text-sm">
                    How can I help you with your financial planning today?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Chat with an Expert?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Get the specialized guidance you need without creating an account or providing personal information.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="#experts">Find Your Expert</Link>
        </Button>
      </div>
    </div>
  );
};

export default CTA;

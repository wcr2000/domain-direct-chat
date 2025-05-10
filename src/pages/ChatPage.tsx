
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import { toast } from '@/components/ui/use-toast';

// These should match the experts in ExpertList.tsx
const experts = {
  "real-estate": {
    title: "Real Estate Expert",
    icon: "🏠",
    color: "blue"
  },
  "psychology": {
    title: "Psychology Expert",
    icon: "🧠",
    color: "purple"
  },
  "finance": {
    title: "Financial Expert",
    icon: "💰",
    color: "green"
  },
  "nutrition": {
    title: "Nutrition Expert",
    icon: "🥗",
    color: "teal"
  },
  "career": {
    title: "Career Coach",
    icon: "💼",
    color: "orange"
  },
  "legal": {
    title: "Legal Assistant",
    icon: "⚖️",
    color: "blue"
  }
};

type Expert = {
  title: string;
  icon: string;
  color: string;
};

const ChatPage = () => {
  const { expertId } = useParams<{ expertId: string }>();
  
  // Find the expert with the matching ID
  const expert = expertId ? (experts[expertId as keyof typeof experts] as Expert) : undefined;
  
  // If no expert is found, show an error
  if (!expert) {
    // Show toast for error
    React.useEffect(() => {
      toast({
        title: "Expert not found",
        description: "The requested expert could not be found.",
        variant: "destructive"
      });
    }, []);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Expert Not Found</h1>
          <p className="text-muted-foreground mb-6">The expert you're looking for doesn't exist or may have been removed.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-background p-4 border-b border-border/40 flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">Chat with {expert.title}</h1>
      </header>
      
      <div className="flex-1 overflow-hidden">
        <ChatInterface 
          expertId={expertId || ''}
          expertTitle={expert.title}
          expertIcon={expert.icon}
          expertColor={expert.color}
        />
      </div>
    </div>
  );
};

export default ChatPage;

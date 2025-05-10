
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  expertId: string;
  expertTitle: string;
  expertIcon: string;
  expertColor: string;
}

// This is a mock function that simulates AI responses based on the expert domain
const getMockResponse = (expertId: string, message: string): Promise<string> => {
  // We're simulating a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple mock responses based on domain expertise
      switch (expertId) {
        case 'real-estate':
          resolve("Based on current market trends, property values in that area have been steadily increasing. Would you like more specific information about particular neighborhoods?");
          break;
        case 'psychology':
          resolve("It sounds like you're experiencing some stress. Many people find mindfulness techniques helpful for managing similar feelings. Would you like to learn about a simple breathing exercise?");
          break;
        case 'finance':
          resolve("For your financial goals, I'd recommend starting with an emergency fund of 3-6 months of expenses. After that, you might consider investing in low-cost index funds. Would you like more details on either of these strategies?");
          break;
        case 'nutrition':
          resolve("Based on your dietary preferences, I would suggest incorporating more plant-based proteins. Foods like lentils, chickpeas, and quinoa can be excellent additions to your meal plan.");
          break;
        case 'career':
          resolve("For your resume, I would highlight your transferable skills from your previous roles. Focus on quantifiable achievements rather than just listing responsibilities.");
          break;
        case 'legal':
          resolve("While I can provide general information, this complex situation may require consultation with a licensed attorney who specializes in this area of law. Would you like me to explain what type of attorney might be most appropriate?");
          break;
        default:
          resolve("Thank you for your message. How can I assist you further with this topic?");
      }
    }, 1000); // 1 second delay to simulate network request
  });
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ expertId, expertTitle, expertIcon, expertColor }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hi, I'm your ${expertTitle}. How can I help you today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get AI response
      const response = await getMockResponse(expertId, userMessage.content);
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className={`p-4 border-b border-border/40 flex items-center bg-expert-${expertColor}/10`}>
        <div className={`w-10 h-10 rounded-full bg-expert-${expertColor}/20 flex items-center justify-center mr-3`}>
          <span className="text-xl">{expertIcon}</span>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{expertTitle}</h2>
          <p className="text-xs text-muted-foreground">AI Assistant</p>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`chat-bubble ${message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
          >
            {message.content}
            <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-bubble chat-bubble-assistant flex space-x-1">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border/40 bg-background">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;

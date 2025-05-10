
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface InfluencerProps {
  name: string;
  expertise: string;
  image?: string;
  initials: string;
}

const influencers: InfluencerProps[] = [
  {
    "name": "Kim Property Live",
    "expertise": "Real Estate Expert",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_kXnMaYvCSo-_0xg7zWcI0le3cMr3aBK3K-tOtJmgNAf3d4=s900-c-k-c0x00ffffff-no-rj",
    "initials": "SS"
  },
  {
    "name": "Ray Dalio",
    "expertise": "Investor and Financial Expert",
    "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    "initials": "RD"
  },
  {
    "name": "Brené Brown",
    "expertise": "Self-Development Expert",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    "initials": "BB"
  },
  {
    "name": "Naval Ravikant",
    "expertise": "Investor and Entrepreneur",
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    "initials": "NR"
  },
  {
    "name": "Sara Blakely",
    "expertise": "Entrepreneur and Businesswoman",
    "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    "initials": "SB"
  },
  {
    "name": "Daniel Kahneman",
    "expertise": "Psychologist and Decision-Making Expert",
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500",
    "initials": "DK"
  }
];

const Influencers = () => {
  return (
    <div className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Insights from World-Class Experts</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've distilled the knowledge of world-class experts across various fields to create expert AI assistants that you can converse with and learn from anytime.
        </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {influencers.map((influencer, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-card p-6 rounded-xl shadow-sm border transition-all hover:shadow-md flex flex-col items-center text-center h-full">
                  <Avatar className="w-24 h-24 mb-4">
                    {influencer.image ? (
                      <AvatarImage src={influencer.image} alt={influencer.name} />
                    ) : null}
                    <AvatarFallback className="text-lg">{influencer.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl mb-1">{influencer.name}</h3>
                  <p className="text-muted-foreground text-sm">{influencer.expertise}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Influencers;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import backgroundImage from '@/assets/images/flyfish.gif';
import image2 from '@/assets/images/shirt-1333x2000.jpg';

function App() {
  return (
    <div 
      className="min-h-screen font-['Inter'] flex flex-col bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Container with mobile-optimized padding */}
      <div className="relative z-10 flex-1 flex flex-col max-w-md mx-auto w-full px-6 py-8 gap-8">
        
        {/* Header Text */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-white leading-tight drop-shadow-lg">
            Øivind 50 år
          </h1>
          <p className="text-white/90 mt-3 text-lg drop-shadow-md">
            Discover what we have to offer
          </p>
        </header>

        {/* Images Section */}
        <section className="flex flex-col gap-6">
          <Card className="overflow-hidden border-border bg-card/90 backdrop-blur-sm">
            <img 
              src={image2} 
              alt="Featured image" 
              className="w-full h-auto aspect-[4/3] object-cover"
              loading="lazy"
            />
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mt-auto pt-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full h-14 text-lg font-medium bg-white/90 hover:bg-white text-black backdrop-blur-sm border border-white/20"
          >
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Learn More
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import image1 from '@/assets/images/image1.svg';
import image2 from '@/assets/images/image2.svg';

function App() {
  return (
    <div className="min-h-screen bg-background font-['Inter'] flex flex-col">
      {/* Container with mobile-optimized padding */}
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full px-6 py-8 gap-8">
        
        {/* Header Text */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-foreground leading-tight">
            Øivind 50 år
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Discover what we have to offer
          </p>
        </header>

        {/* Images Section */}
        <section className="flex flex-col gap-6">
          <Card className="overflow-hidden border-border bg-card">
            <img 
              src={image1} 
              alt="First featured image" 
              className="w-full h-auto aspect-[4/3] object-cover"
              loading="eager"
            />
          </Card>
          
          <Card className="overflow-hidden border-border bg-card">
            <img 
              src={image2} 
              alt="Second featured image" 
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
            className="w-full h-14 text-lg font-medium bg-accent hover:bg-accent/90 text-accent-foreground"
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
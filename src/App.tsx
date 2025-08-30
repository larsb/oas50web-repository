import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import backgroundImage from '@/assets/images/flyfish.gif';
import image2 from '@/assets/images/shirt-1333x2000.jpg';

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const correctAccessCode = "oivind50";

  // Check for access code in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl === correctAccessCode) {
      setIsAuthorized(true);
    }
  }, []);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.toLowerCase() === correctAccessCode) {
      setIsAuthorized(true);
      toast.success("Tilgang godkjent!");
    } else {
      toast.error("Feil tilgangskode");
      setAccessCode("");
    }
  };

  // Show access form if not authorized
  if (!isAuthorized) {
    return (
      <div className="min-h-screen font-['Inter'] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <div className="text-center space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Øivind 50 år
                </h1>
                <p className="text-gray-600 text-sm">
                  Skriv inn tilgangskoden for å fortsette
                </p>
              </div>

              <form onSubmit={handleAccessSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="access-code" className="text-sm font-medium text-gray-700">
                    Tilgangskode
                  </Label>
                  <Input
                    id="access-code"
                    type="password"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Skriv inn koden..."
                    className="text-center h-12"
                    autoFocus
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium"
                  disabled={!accessCode.trim()}
                >
                  Fortsett
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main content (after authorization)
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
          <p className="text-white/90 mt-3 text-base leading-relaxed drop-shadow-md max-w-sm mx-auto">
            Halve livet har du lokket folk ut på dansegulvet,
            og den andre halvdelen har du lokket ørreten opp av elva.
            Må de neste 50 gi like mye rytme, napp og glede –
            og masse kvalitetstid med familie og venner som heier på deg i elv og på gulv.
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
          
          {/* Product Description */}
          <div className="text-center px-2">
            <p className="text-white/90 text-base leading-relaxed drop-shadow-md">
              En skjorte i naturlig bomullscanvas føles som deg. Uten parfyme, sminke og plast. Like anvendelig bak barnevogn som bak miksebord. Og skulle det slites et hull så kan det repareres.
            </p>
            <p className="text-white/80 text-sm mt-3 drop-shadow-md">
              Trykk på linken under for å bestille.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-auto pt-4 space-y-6">
          <Button 
            asChild 
            size="lg" 
            className="w-full h-14 text-lg font-medium bg-white/90 hover:bg-white text-black backdrop-blur-sm border border-white/20"
          >
            <a 
              href="https://www.northernplayground.no/nb/shop/the-canvas-shirt?fit=men&size=XL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              The Canvas Shirt hos Northern Playground
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;
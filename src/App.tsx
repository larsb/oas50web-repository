import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, QrCode } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useKV } from '@github/spark/hooks';
import QRCode from 'qrcode';
import backgroundImage from '@/assets/images/flyfish.gif';
import image2 from '@/assets/images/shirt-1333x2000.jpg';

function App() {
  const [copied, setCopied] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useKV("authorized", false);
  const [showQR, setShowQR] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  
  const giftCardCode = "NP-JSOWK93MF43";
  const correctAccessCode = "oivind50";

  // Generate QR code on component mount
  useEffect(() => {
    const generateQR = async () => {
      try {
        const websiteUrl = window.location.origin + window.location.pathname + "?code=" + correctAccessCode;
        const qrDataUrl = await QRCode.toDataURL(websiteUrl, {
          width: 256,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrDataUrl);
      } catch (err) {
        console.error('Failed to generate QR code:', err);
      }
    };
    generateQR();
  }, []);

  // Check for access code in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl === correctAccessCode) {
      setIsAuthorized(true);
    }
  }, [setIsAuthorized]);

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(giftCardCode);
      setCopied(true);
      toast.success("Kode kopiert!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Kunne ikke kopiere kode");
    }
  };

  // Access code screen
  if (!isAuthorized) {
    return (
      <div 
        className="min-h-screen font-['Inter'] flex flex-col bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-md mx-auto w-full px-6 py-8 gap-8">
          <Card className="p-6 bg-white/95 backdrop-blur-sm border border-white/20">
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

              <div className="border-t pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowQR(!showQR)}
                  className="w-full gap-2"
                >
                  <QrCode className="h-4 w-4" />
                  {showQR ? "Skjul QR-kode" : "Vis QR-kode"}
                </Button>
                
                {showQR && qrCodeUrl && (
                  <div className="mt-4 text-center">
                    <img 
                      src={qrCodeUrl} 
                      alt="QR Code til nettsiden" 
                      className="mx-auto bg-white p-2 rounded"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Skann for direkte tilgang
                    </p>
                  </div>
                )}
              </div>
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
          {/* Gift Card Code */}
          <div className="space-y-2">
            <Label 
              htmlFor="gift-code" 
              className="text-white/90 text-sm font-medium drop-shadow-md"
            >
              Kode til ditt unike gavekort
            </Label>
            <div className="relative">
              <Input
                id="gift-code"
                value={giftCardCode}
                readOnly
                className="bg-white/90 backdrop-blur-sm border-white/20 text-black font-mono text-center pr-12 h-12 text-base"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 p-0 hover:bg-black/10"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-600" />
                )}
              </Button>
            </div>
          </div>

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

          {/* Admin reset option (for testing) */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAuthorized(false)}
            className="w-full text-white/60 hover:text-white/80 text-xs"
          >
            Reset tilgang (for testing)
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Discover Your Dream
            <span className="block text-accent mt-2">Property</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Premium residential and commercial properties in the most sought-after locations. 
            Your journey to exceptional real estate starts here.
          </p>

          {/* Search Bar */}
          <div className="bg-background rounded-2xl p-4 sm:p-6 shadow-2xl max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Enter location, city, or property type"
                  className="pl-11 h-14 border-border bg-background text-foreground"
                />
              </div>
              <Button className="h-14 px-8 bg-accent text-accent-foreground hover:bg-luxury-gold-light font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search Properties
              </Button>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Apartments
              </button>
              <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Houses
              </button>
              <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Commercial
              </button>
              <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Luxury Estates
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm sm:text-base text-primary-foreground/80 mt-1">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">1,200+</div>
              <div className="text-sm sm:text-base text-primary-foreground/80 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">15+</div>
              <div className="text-sm sm:text-base text-primary-foreground/80 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

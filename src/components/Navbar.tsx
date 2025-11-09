import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              Elite<span className="text-accent">Properties</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-foreground hover:text-accent transition-colors">
              Properties
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-luxury-gold-light font-semibold">
              Schedule Viewing
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#properties"
              className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
            >
              Properties
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>
            <Button className="w-full mt-2 bg-accent text-accent-foreground hover:bg-luxury-gold-light font-semibold">
              Schedule Viewing
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

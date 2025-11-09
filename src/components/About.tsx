import { Button } from "@/components/ui/button";
import { Award, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About EliteProperties
              </h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of excellence in the real estate industry, EliteProperties 
              has established itself as a trusted partner for luxury property transactions 
              across premier locations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our dedicated team of professionals brings unparalleled expertise, market 
              knowledge, and commitment to helping clients find their perfect property or 
              achieve optimal investment returns.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-luxury-gold-light font-semibold"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    Award-winning service recognized by industry leaders and satisfied clients worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Precision</h3>
                  <p className="text-muted-foreground">
                    Data-driven approach ensuring accurate valuations and strategic market positioning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Dedication</h3>
                  <p className="text-muted-foreground">
                    Personalized service with unwavering commitment to your real estate goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

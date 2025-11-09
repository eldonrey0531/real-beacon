import { Card } from "@/components/ui/card";
import { Building2, Key, TrendingUp, Shield, Home, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive management services for residential and commercial properties with 24/7 support.",
    },
    {
      icon: Key,
      title: "Buy & Sell",
      description: "Expert guidance through the entire buying and selling process with market insights.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment planning and portfolio management for maximum returns.",
    },
    {
      icon: Shield,
      title: "Legal Assistance",
      description: "Full legal support for transactions, contracts, and property documentation.",
    },
    {
      icon: Home,
      title: "Property Valuation",
      description: "Accurate market valuations using advanced analytics and local market expertise.",
    },
    {
      icon: Users,
      title: "Relocation Services",
      description: "Complete relocation support including neighborhood tours and settling assistance.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end real estate solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 group bg-card"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

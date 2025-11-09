import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      image: property1,
      title: "Modern Downtown Penthouse",
      location: "Manhattan, New York",
      price: "$4,250,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      status: "For Sale" as const,
    },
    {
      image: property2,
      title: "Luxury Beachfront Villa",
      location: "Malibu, California",
      price: "$8,900,000",
      bedrooms: 5,
      bathrooms: 6,
      area: "5,800 sq ft",
      status: "For Sale" as const,
    },
    {
      image: property3,
      title: "Contemporary Townhouse",
      location: "Brooklyn, New York",
      price: "$2,100,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,400 sq ft",
      status: "For Rent" as const,
    },
    {
      image: property4,
      title: "Oceanview Luxury Condo",
      location: "Miami Beach, Florida",
      price: "$3,750,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      status: "For Sale" as const,
    },
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in exclusive locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-navy-medium font-semibold px-8"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

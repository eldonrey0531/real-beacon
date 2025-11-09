import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: "For Sale" | "For Rent" | "Sold";
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  status,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge
            className={`font-semibold ${
              status === "For Sale"
                ? "bg-accent text-accent-foreground"
                : status === "For Rent"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{area}</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="text-2xl font-bold text-accent">{price}</div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;

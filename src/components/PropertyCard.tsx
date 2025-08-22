import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, TrendingUp } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  totalValue: number;
  tokenPrice: number;
  roi: number;
  fundingProgress: number;
  totalTokens: number;
  soldTokens: number;
}

const PropertyCard = ({
  id,
  title,
  location,
  image,
  totalValue,
  tokenPrice,
  roi,
  fundingProgress,
  totalTokens,
  soldTokens,
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className="group hover-lift shadow-card bg-gradient-card overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-success text-success-foreground">
                {roi}% ROI
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Value</span>
              <span className="font-semibold">₹{totalValue.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Token Price</span>
              <span className="font-semibold">₹{tokenPrice.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Funding Progress</span>
                <span className="font-semibold">{fundingProgress}%</span>
              </div>
              <Progress value={fundingProgress} className="h-2" />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{soldTokens} tokens sold</span>
              <span>{totalTokens - soldTokens} remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
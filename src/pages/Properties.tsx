import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Search, Filter, MapPin } from "lucide-react";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortBy, setSortBy] = useState("roi");

  const cities = ["all", "mumbai", "bangalore", "delhi", "goa"];

  const filteredProperties = properties
    .filter(property => 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(property => 
      selectedCity === "all" || 
      property.location.toLowerCase().includes(selectedCity.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "roi":
          return b.roi - a.roi;
        case "price":
          return a.tokenPrice - b.tokenPrice;
        case "value":
          return b.totalValue - a.totalValue;
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Investment Properties
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover premium real estate opportunities. Invest small, own big.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-card shadow-card rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Search Properties
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="min-w-[150px]">
            <label className="text-sm font-medium text-foreground mb-2 block">
              City
            </label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-[150px]">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Sort By
            </label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roi">Highest ROI</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
                <SelectItem value="value">Highest Value</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary" className="bg-gradient-primary text-white">
            <MapPin className="w-3 h-3 mr-1" />
            {filteredProperties.length} Properties Available
          </Badge>
          {selectedCity !== "all" && (
            <Badge variant="outline" onClick={() => setSelectedCity("all")} className="cursor-pointer">
              {selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)} ✕
            </Badge>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">No properties found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Properties;
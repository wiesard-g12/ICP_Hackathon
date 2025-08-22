import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Timer, 
  Gavel, 
  Home, 
  DollarSign, 
  Users,
  TrendingUp,
  Clock,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import marketplace property images
import juhuVillaAuction from "@/assets/juhu-villa-auction.jpg";
import gurgaonTechHub from "@/assets/gurgaon-tech-hub.jpg";
import jaipurHeritageHotel from "@/assets/jaipur-heritage-hotel.jpg";
import koramangalaCoworking from "@/assets/koramangala-coworking.jpg";
import khanMarketRetail from "@/assets/khan-market-retail.jpg";

const Marketplace = () => {
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");
  const [selectedAuction, setSelectedAuction] = useState<string | null>(null);

  // Mock auction data
  const auctions = [
    {
      id: "auction-1",
      title: "Premium Villa in Juhu",
      location: "Juhu, Mumbai",
      image: juhuVillaAuction,
      startingPrice: 50000,
      currentBid: 125000,
      bidCount: 23,
      timeLeft: "2h 45m",
      totalTokens: 20000,
      minBidIncrement: 5000,
      description: "Luxury beachfront villa with private access"
    },
    {
      id: "auction-2",
      title: "Tech Hub Office Space",
      location: "Cyber City, Gurgaon",
      image: gurgaonTechHub,
      startingPrice: 75000,
      currentBid: 189000,
      bidCount: 31,
      timeLeft: "1d 12h",
      totalTokens: 15000,
      minBidIncrement: 8000,
      description: "Modern office space in prime tech district"
    },
    {
      id: "auction-3",
      title: "Heritage Boutique Hotel",
      location: "Pink City, Jaipur",
      image: jaipurHeritageHotel,
      startingPrice: 35000,
      currentBid: 87500,
      bidCount: 18,
      timeLeft: "4h 23m",
      totalTokens: 12000,
      minBidIncrement: 3500,
      description: "Restored heritage property in historic quarter"
    }
  ];

  // Mock rental properties
  const rentalProperties = [
    {
      id: "rent-1",
      title: "Co-working Space in Koramangala",
      location: "Koramangala, Bangalore",
      image: koramangalaCoworking,
      monthlyRent: 45000,
      expectedYield: 14.5,
      minInvestment: 25000,
      totalValue: 8500000,
      availableTokens: 3200,
      features: ["24/7 Access", "High-speed WiFi", "Meeting Rooms"]
    },
    {
      id: "rent-2",
      title: "Retail Store in Khan Market",
      location: "Khan Market, Delhi",
      image: khanMarketRetail,
      monthlyRent: 85000,
      expectedYield: 12.8,
      minInvestment: 50000,
      totalValue: 15200000,
      availableTokens: 1800,
      features: ["Prime Location", "High Footfall", "Brand Presence"]
    }
  ];

  const handlePlaceBid = (auctionId: string) => {
    const auction = auctions.find(a => a.id === auctionId);
    const bid = parseFloat(bidAmount);
    
    if (!auction || !bid) return;
    
    if (bid < auction.currentBid + auction.minBidIncrement) {
      toast({
        title: "Invalid Bid",
        description: `Minimum bid is ₹${(auction.currentBid + auction.minBidIncrement).toLocaleString()}`,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Bid Placed Successfully! 🎉",
      description: `Your bid of ₹${bid.toLocaleString()} has been placed for ${auction.title}`,
    });
    
    setBidAmount("");
    setSelectedAuction(null);
  };

  const handleRentInvestment = (propertyId: string) => {
    const property = rentalProperties.find(p => p.id === propertyId);
    if (property) {
      toast({
        title: "Investment Successful! 🏠",
        description: `You've invested in ${property.title} for rental income`,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Property Marketplace
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Participate in auctions and invest in rental properties for passive income
        </p>
      </div>

      <Tabs defaultValue="auctions" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="auctions" className="flex items-center gap-2">
            <Gavel className="w-4 h-4" />
            Live Auctions
          </TabsTrigger>
          <TabsTrigger value="rentals" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Rental Properties
          </TabsTrigger>
        </TabsList>

        <TabsContent value="auctions" className="space-y-6">
          {/* Active Auctions Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Timer className="w-8 h-8 mx-auto text-accent mb-2" />
                <div className="text-2xl font-bold">{auctions.length}</div>
                <div className="text-sm text-muted-foreground">Active Auctions</div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto text-success mb-2" />
                <div className="text-2xl font-bold">
                  {auctions.reduce((sum, auction) => sum + auction.bidCount, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Bids</div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">
                  ₹{auctions.reduce((sum, auction) => sum + auction.currentBid, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </CardContent>
            </Card>
          </div>

          {/* Auction Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {auctions.map((auction) => (
              <Card key={auction.id} className="shadow-elevated hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                      <Clock className="w-3 h-3 mr-1" />
                      {auction.timeLeft}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {auction.bidCount} bids
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-lg">{auction.title}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {auction.location}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{auction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Starting Price</span>
                      <div className="font-semibold">₹{auction.startingPrice.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Current Bid</span>
                      <div className="font-bold text-lg text-accent">
                        ₹{auction.currentBid.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {selectedAuction === auction.id ? (
                    <div className="space-y-3">
                      <Input
                        type="number"
                        placeholder={`Min. ₹${(auction.currentBid + auction.minBidIncrement).toLocaleString()}`}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handlePlaceBid(auction.id)}
                          className="flex-1 bg-gradient-primary text-white"
                          disabled={!bidAmount || parseFloat(bidAmount) < auction.currentBid + auction.minBidIncrement}
                        >
                          Place Bid
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedAuction(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setSelectedAuction(auction.id)}
                      className="w-full bg-gradient-primary text-white hover:opacity-90"
                    >
                      <Gavel className="w-4 h-4 mr-2" />
                      Place Bid
                    </Button>
                  )}

                  <div className="text-xs text-muted-foreground text-center">
                    Minimum increment: ₹{auction.minBidIncrement.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rentals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rentalProperties.map((property) => (
              <Card key={property.id} className="shadow-elevated hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-success text-success-foreground">
                      {property.expectedYield}% Yield
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>
                    <h3 className="font-display font-semibold text-lg">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Monthly Rent</span>
                      <div className="font-bold text-lg text-success">
                        ₹{property.monthlyRent.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Min Investment</span>
                      <div className="font-semibold">
                        ₹{property.minInvestment.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {property.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Available Tokens</span>
                    <span className="font-semibold">{property.availableTokens.toLocaleString()}</span>
                  </div>

                  <Button
                    onClick={() => handleRentInvestment(property.id)}
                    className="w-full bg-gradient-success text-white hover:opacity-90"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Invest for Rental Income
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Marketplace;
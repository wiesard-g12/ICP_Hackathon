import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { properties } from "@/data/properties";
import { 
  MapPin, 
  TrendingUp, 
  Calendar, 
  Home, 
  DollarSign, 
  PieChart,
  ArrowUpRight,
  Coins
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [investmentAmount, setInvestmentAmount] = useState("");
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleInvestment = () => {
    const amount = parseFloat(investmentAmount);
    if (amount && amount >= property.tokenPrice) {
      const tokens = Math.floor(amount / property.tokenPrice);
      toast({
        title: "Investment Successful! 🎉",
        description: `You've purchased ${tokens} tokens for ₹${amount.toLocaleString()}`,
      });
      setInvestmentAmount("");
    } else {
      toast({
        title: "Invalid Amount",
        description: `Minimum investment is ₹${property.tokenPrice.toLocaleString()}`,
        variant: "destructive"
      });
    }
  };

  const calculateTokens = () => {
    const amount = parseFloat(investmentAmount);
    return amount ? Math.floor(amount / property.tokenPrice) : 0;
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Hero Image */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 shadow-elevated">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <Badge className="mb-3 bg-success text-success-foreground">
            {property.roi}% ROI
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">
            {property.title}
          </h1>
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            {property.location}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 mx-auto text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="font-bold text-lg">₹{property.totalValue.toLocaleString()}</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <Coins className="w-8 h-8 mx-auto text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Token Price</p>
                <p className="font-bold text-lg">₹{property.tokenPrice.toLocaleString()}</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto text-success mb-2" />
                <p className="text-sm text-muted-foreground">Expected ROI</p>
                <p className="font-bold text-lg">{property.roi}%</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <Home className="w-8 h-8 mx-auto text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Monthly Rent</p>
                <p className="font-bold text-lg">₹{property.monthlyRent.toLocaleString()}</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Property Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Year Built</p>
                      <p className="font-semibold">{property.yearBuilt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-semibold">{property.sqft.toLocaleString()} sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Property Type</p>
                      <p className="font-semibold">{property.propertyType}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      {property.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <ArrowUpRight className="w-4 h-4 text-success mr-2" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financials" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Price History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {property.priceHistory.map((entry, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{entry.date}</span>
                        <span className="font-semibold">₹{entry.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Property Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Property Valuation Report</span>
                      <Button variant="outline" size="sm">View PDF</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Legal Due Diligence</span>
                      <Button variant="outline" size="sm">View PDF</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Rental Agreement Template</span>
                      <Button variant="outline" size="sm">View PDF</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Investment Panel */}
        <div className="space-y-6">
          <Card className="shadow-elevated sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Investment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Funding Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Funding Progress</span>
                  <span className="font-semibold">{property.fundingProgress}%</span>
                </div>
                <Progress value={property.fundingProgress} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{property.soldTokens} sold</span>
                  <span>{property.totalTokens - property.soldTokens} remaining</span>
                </div>
              </div>

              {/* Investment Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Investment Amount (₹)
                  </label>
                  <Input
                    type="number"
                    placeholder={`Min. ₹${property.tokenPrice.toLocaleString()}`}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>

                {investmentAmount && (
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">You will receive</p>
                    <p className="font-bold text-lg">{calculateTokens()} Tokens</p>
                    <p className="text-xs text-muted-foreground">
                      Expected monthly income: ₹{(calculateTokens() * (property.monthlyRent / property.totalTokens)).toLocaleString()}
                    </p>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-primary text-white hover:opacity-90"
                  onClick={handleInvestment}
                  disabled={!investmentAmount || parseFloat(investmentAmount) < property.tokenPrice}
                >
                  Invest Now
                </Button>
              </div>

              {/* Quick Investment Options */}
              <div className="grid grid-cols-2 gap-2">
                {[5000, 10000, 25000, 50000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    size="sm"
                    onClick={() => setInvestmentAmount(amount.toString())}
                  >
                    ₹{amount.toLocaleString()}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Disclaimer */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h4 className="font-semibold text-sm mb-2">Investment Disclaimer</h4>
              <p className="text-xs text-muted-foreground">
                All investments carry risk. Past performance does not guarantee future results. 
                Please invest responsibly and only what you can afford to lose.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
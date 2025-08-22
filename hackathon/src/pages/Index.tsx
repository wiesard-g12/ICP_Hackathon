import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  DollarSign, 
  Home,
  Zap,
  PieChart,
  Star
} from "lucide-react";

const Index = () => {
  const featuredProperties = properties.slice(0, 3);

  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Blockchain-powered ownership with full transparency and security"
    },
    {
      icon: DollarSign,
      title: "Low Minimum Investment",
      description: "Start investing with as little as ₹5,000 in premium properties"
    },
    {
      icon: TrendingUp,
      title: "High Returns",
      description: "Earn rental income and capital appreciation from day one"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of investors building wealth together"
    }
  ];

  const stats = [
    { value: "₹2.5Cr+", label: "Assets Under Management" },
    { value: "5,000+", label: "Active Investors" },
    { value: "15.2%", label: "Average Returns" },
    { value: "50+", label: "Properties Listed" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Powered by ICP
            </Badge>

            {/* Main heading */}
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="block text-primary">Invest Small,</span>
              <span className="block text-black">Own Big</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Fractional real estate investment made simple. Start building your property portfolio 
              with just ₹10,000 and earn monthly rental income.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="gradient"
                className="shadow-glow px-8 py-4 text-lg"
                asChild
              >
                <Link to="/properties">
                  Start Investing Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg hover-lift"
                asChild
              >
                <Link to="/marketplace">
                  Explore Marketplace
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Why Choose CoInvest
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              The Future of Real Estate Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Democratizing real estate with cutting-edge technology and transparent processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover-lift bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              <Star className="w-4 h-4 mr-2" />
              Featured Investments
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Premium Properties Available Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked properties with high growth potential and steady rental yields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-lift"
              asChild
            >
              <Link to="/properties">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Simple Process
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Start Investing in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Connect Your Wallet",
                description: "Sign up with Internet Identity or connect your ICP wallet in seconds"
              },
              {
                step: "02", 
                title: "Browse & Select",
                description: "Explore verified properties and choose investments that match your goals"
              },
              {
                step: "03",
                title: "Earn & Grow",
                description: "Receive monthly rental income and watch your investment appreciate"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-3/4 w-1/4 h-0.5 bg-gradient-primary" />
                )}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="font-bold text-white text-xl">{step.step}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Build Your Property Portfolio?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of smart investors who are already earning passive income 
              through fractional real estate ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                asChild
              >
                <Link to="/properties">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                asChild
              >
                <Link to="/dashboard">
                  View Dashboard
                  <PieChart className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
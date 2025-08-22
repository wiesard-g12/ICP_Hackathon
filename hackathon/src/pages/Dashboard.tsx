import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Wallet, 
  Home, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Mock user data
  const portfolioData = {
    totalInvested: 125000,
    currentValue: 142800,
    totalReturn: 17800,
    returnPercentage: 14.24,
    monthlyIncome: 3450,
    propertiesOwned: 4,
    tokensOwned: 1247
  };

  const investments = [
    {
      id: 1,
      propertyName: "Luxury Apartment in Bandra West",
      tokensOwned: 450,
      currentValue: 52500,
      invested: 45000,
      return: 7500,
      returnPercentage: 16.67,
      monthlyIncome: 1250
    },
    {
      id: 2,
      propertyName: "Commercial Space in Electronic City",
      tokensOwned: 320,
      currentValue: 38400,
      invested: 32000,
      return: 6400,
      returnPercentage: 20,
      monthlyIncome: 980
    },
    {
      id: 3,
      propertyName: "Premium Retail Space in CP",
      tokensOwned: 285,
      currentValue: 35625,
      invested: 31500,
      return: 4125,
      returnPercentage: 13.1,
      monthlyIncome: 850
    },
    {
      id: 4,
      propertyName: "Beachfront Villa in North Goa",
      tokensOwned: 192,
      currentValue: 16275,
      invested: 16500,
      return: -225,
      returnPercentage: -1.36,
      monthlyIncome: 370
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "buy",
      property: "Luxury Apartment in Bandra West",
      tokens: 50,
      amount: 5500,
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      type: "income",
      property: "Commercial Space in Electronic City",
      amount: 980,
      date: "2024-01-10",
      status: "received"
    },
    {
      id: 3,
      type: "sell",
      property: "Premium Retail Space in CP",
      tokens: 25,
      amount: 3125,
      date: "2024-01-08",
      status: "completed"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">
            Portfolio Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your real estate investments and earnings
          </p>
        </div>
        <div className="flex gap-2">
          {["7d", "30d", "90d", "1y"].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="text-2xl font-bold">₹{portfolioData.totalInvested.toLocaleString()}</p>
              </div>
              <Wallet className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Value</p>
                <p className="text-2xl font-bold">₹{portfolioData.currentValue.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-success mr-1" />
                  <span className="text-sm text-success font-medium">
                    +{portfolioData.returnPercentage}%
                  </span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Income</p>
                <p className="text-2xl font-bold">₹{portfolioData.monthlyIncome.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Next payout in 12 days</p>
              </div>
              <DollarSign className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Properties</p>
                <p className="text-2xl font-bold">{portfolioData.propertiesOwned}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {portfolioData.tokensOwned} tokens owned
                </p>
              </div>
              <Home className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="investments" className="space-y-6">
        <TabsList>
          <TabsTrigger value="investments">My Investments</TabsTrigger>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          <TabsTrigger value="income">Income Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="investments" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Property Investments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-card transition-smooth"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold">{investment.propertyName}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{investment.tokensOwned} tokens</span>
                        <span>₹{investment.monthlyIncome}/month income</span>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="font-semibold">
                        ₹{investment.currentValue.toLocaleString()}
                      </div>
                      <div className={`text-sm flex items-center ${
                        investment.return >= 0 ? 'text-success' : 'text-destructive'
                      }`}>
                        {investment.return >= 0 ? (
                          <ArrowUpRight className="w-3 h-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 mr-1" />
                        )}
                        {investment.return >= 0 ? '+' : ''}₹{investment.return.toLocaleString()}
                        ({investment.returnPercentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'buy' ? 'bg-accent/10' :
                        transaction.type === 'sell' ? 'bg-destructive/10' :
                        'bg-success/10'
                      }`}>
                        {transaction.type === 'buy' ? (
                          <ArrowUpRight className={`w-5 h-5 text-accent`} />
                        ) : transaction.type === 'sell' ? (
                          <ArrowDownRight className={`w-5 h-5 text-destructive`} />
                        ) : (
                          <DollarSign className={`w-5 h-5 text-success`} />
                        )}
                      </div>

                      <div>
                        <div className="font-medium">
                          {transaction.type === 'buy' ? 'Token Purchase' :
                           transaction.type === 'sell' ? 'Token Sale' :
                           'Rental Income'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.property}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold">
                        {transaction.type === 'sell' || transaction.type === 'income' ? '+' : '-'}
                        ₹{transaction.amount.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Income Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">₹3,450</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">₹41,400</div>
                  <div className="text-sm text-muted-foreground">This Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">₹65,200</div>
                  <div className="text-sm text-muted-foreground">All Time</div>
                </div>
              </div>

              <div className="space-y-3">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    className="flex justify-between items-center p-3 bg-muted/30 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-sm">{investment.propertyName}</div>
                      <div className="text-xs text-muted-foreground">
                        {investment.tokensOwned} tokens
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-success">
                        +₹{investment.monthlyIncome}
                      </div>
                      <div className="text-xs text-muted-foreground">monthly</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
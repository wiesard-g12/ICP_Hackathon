import luxuryMumbaiApartment from "@/assets/luxury-mumbai-apartment.jpg";
import bangaloreTechOffice from "@/assets/bangalore-tech-office.jpg";
import delhiRetailSpace from "@/assets/delhi-retail-space.jpg";
import goaBeachVilla from "@/assets/goa-beach-villa.jpg";

export interface Property {
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
  description: string;
  yearBuilt: number;
  sqft: number;
  monthlyRent: number;
  propertyType: string;
  highlights: string[];
  priceHistory: Array<{ date: string; value: number }>;
}

export const properties: Property[] = [
  {
    id: "luxury-mumbai-apartment",
    title: "Luxury Apartment in Bandra West",
    location: "Bandra West, Mumbai",
    image: luxuryMumbaiApartment,
    totalValue: 25000000,
    tokenPrice: 2500,
    roi: 12.5,
    fundingProgress: 78,
    totalTokens: 10000,
    soldTokens: 7800,
    description: "Premium 3BHK apartment in the heart of Bandra West, Mumbai's most sought-after locality. This property offers stunning sea views and is located in a building with world-class amenities.",
    yearBuilt: 2019,
    sqft: 1850,
    monthlyRent: 185000,
    propertyType: "Residential Apartment",
    highlights: [
      "Sea-facing balcony",
      "Premium location in Bandra West",
      "24/7 security and concierge",
      "Swimming pool and gym",
      "High rental yield area"
    ],
    priceHistory: [
      { date: "Jan 2024", value: 23500000 },
      { date: "Mar 2024", value: 24200000 },
      { date: "Jun 2024", value: 24800000 },
      { date: "Sep 2024", value: 25000000 }
    ]
  },
  {
    id: "bangalore-tech-office",
    title: "Commercial Space in Electronic City",
    location: "Electronic City, Bangalore",
    image: bangaloreTechOffice,
    totalValue: 18000000,
    tokenPrice: 1800,
    roi: 15.2,
    fundingProgress: 45,
    totalTokens: 10000,
    soldTokens: 4500,
    description: "Modern commercial office space in Bangalore's IT hub. Perfect for tech companies with state-of-the-art infrastructure and excellent connectivity.",
    yearBuilt: 2021,
    sqft: 2500,
    monthlyRent: 228000,
    propertyType: "Commercial Office",
    highlights: [
      "IT park location",
      "Metro connectivity",
      "Modern infrastructure",
      "High-speed internet ready",
      "Growing tech hub"
    ],
    priceHistory: [
      { date: "Jan 2024", value: 16800000 },
      { date: "Mar 2024", value: 17200000 },
      { date: "Jun 2024", value: 17600000 },
      { date: "Sep 2024", value: 18000000 }
    ]
  },
  {
    id: "delhi-retail-space",
    title: "Premium Retail Space in CP",
    location: "Connaught Place, New Delhi",
    image: delhiRetailSpace,
    totalValue: 35000000,
    tokenPrice: 3500,
    roi: 10.8,
    fundingProgress: 92,
    totalTokens: 10000,
    soldTokens: 9200,
    description: "Prime retail space in Connaught Place, Delhi's commercial heart. High footfall area with excellent visibility and brand presence opportunities.",
    yearBuilt: 2018,
    sqft: 1200,
    monthlyRent: 315000,
    propertyType: "Retail Space",
    highlights: [
      "Prime Connaught Place location",
      "High footfall area",
      "Metro station nearby",
      "Brand presence opportunity",
      "Stable rental income"
    ],
    priceHistory: [
      { date: "Jan 2024", value: 33200000 },
      { date: "Mar 2024", value: 33800000 },
      { date: "Jun 2024", value: 34400000 },
      { date: "Sep 2024", value: 35000000 }
    ]
  },
  {
    id: "goa-beach-villa",
    title: "Beachfront Villa in North Goa",
    location: "Candolim, North Goa",
    image: goaBeachVilla,
    totalValue: 12000000,
    tokenPrice: 1200,
    roi: 18.5,
    fundingProgress: 23,
    totalTokens: 10000,
    soldTokens: 2300,
    description: "Stunning beachfront villa in Goa with private beach access. Perfect for vacation rentals with high seasonal demand and growing tourism.",
    yearBuilt: 2020,
    sqft: 2200,
    monthlyRent: 185000,
    propertyType: "Vacation Villa",
    highlights: [
      "Beachfront location",
      "Private beach access",
      "High vacation rental demand",
      "Swimming pool",
      "Fully furnished"
    ],
    priceHistory: [
      { date: "Jan 2024", value: 11200000 },
      { date: "Mar 2024", value: 11500000 },
      { date: "Jun 2024", value: 11800000 },
      { date: "Sep 2024", value: 12000000 }
    ]
  }
];
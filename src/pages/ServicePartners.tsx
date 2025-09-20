import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Plane, Hotel, Car, MapPin, Users, Star, Globe } from "lucide-react";
import resortsNetworkMap from "@/assets/resorts-network-map.png";
import happyFeetLogo from "@/assets/happy-feet-logo.png";

const ServicePartners = () => {
  const partnerCategories = [
    {
      title: "Accommodation Partners",
      icon: Hotel,
      description: "Premium hotels and resorts worldwide",
      partners: ["5-star luxury hotels", "Boutique properties", "Resort chains", "Heritage hotels"],
      color: "bg-blue-500"
    },
    {
      title: "Transportation Partners", 
      icon: Plane,
      description: "Reliable travel and transport services",
      partners: ["International airlines", "Domestic carriers", "Car rental services", "Private transfers"],
      color: "bg-green-500"
    },
    {
      title: "Local Experience Partners",
      icon: MapPin,
      description: "Authentic local experiences and guides",
      partners: ["Certified tour guides", "Adventure operators", "Cultural centers", "Local artisans"],
      color: "bg-purple-500"
    },
    {
      title: "Corporate Partners",
      icon: Building2,
      description: "Business travel and corporate services",
      partners: ["Corporate travel agencies", "Meeting venues", "Business centers", "Event planners"],
      color: "bg-orange-500"
    }
  ];

  const featuredPartners = [
    {
      name: "Luxury Hotels International",
      type: "Hotel Chain",
      locations: "50+ countries",
      rating: 4.9,
      specialization: "Luxury accommodation and premium services"
    },
    {
      name: "Global Airways",
      type: "Airline Partner", 
      locations: "100+ destinations",
      rating: 4.7,
      specialization: "International and domestic flights"
    },
    {
      name: "Heritage Tours & Travels",
      type: "Tour Operator",
      locations: "Pan India",
      rating: 4.8,
      specialization: "Cultural and heritage tourism"
    },
    {
      name: "Adventure Seekers",
      type: "Activity Provider",
      locations: "Adventure destinations",
      rating: 4.6,
      specialization: "Trekking, rafting, and adventure sports"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <img 
              src={happyFeetLogo} 
              alt="Happy Feet Holidays Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-primary font-medium mb-4 uppercase tracking-wider">TRUSTED NETWORK</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="text-primary">Happy Feet Holidays</span> Service Partners
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We collaborate with the finest service providers to ensure exceptional travel experiences
          </p>
        </div>
      </section>

      {/* Resort Network Map */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Resort Networks</h2>
            <p className="text-lg text-muted-foreground">
              Discover our extensive network of partner resorts across India's most beautiful destinations
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={resortsNetworkMap} 
              alt="Happy Feet Holidays Resort Network Map"
              className="max-w-full h-auto rounded-xl shadow-strong"
            />
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Partner Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${category.color} mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.partners.map((partner, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Featured Partners</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {partner.type}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{partner.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>{partner.locations}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {partner.specialization}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Partnership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quality Assurance</h3>
              <p className="text-muted-foreground">
                All our partners are carefully vetted to ensure the highest standards of service and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Seamless Coordination</h3>
              <p className="text-muted-foreground">
                Our strong partnerships enable smooth coordination and hassle-free travel experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Our extensive partner network provides you access to services worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePartners;